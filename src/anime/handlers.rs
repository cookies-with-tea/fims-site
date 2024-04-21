use std::sync::Arc;
use axum::extract::{Path};
use axum::http::StatusCode;
use axum::{extract, Json};
use crate::anime::model::{Anime, CreateAnimeDTO, UpdateAnimeDTO};
use crate::AppState;

pub(crate) async fn create_anime(
  Json(payload): Json<CreateAnimeDTO>,
  state: Arc<AppState>,
) -> StatusCode {
  let status = payload.status.unwrap_or("anime".to_string());
  let description = payload.description.unwrap_or("".to_string());

  let _ = sqlx::query(
    "INSERT INTO anime (titles) VALUES ($1)"
  )
    .bind(&payload.titles)
    .bind(status)
    .bind(description)
    .execute(&state.pool)
    .await
    .map_err(internal_error)
    .unwrap();

  StatusCode::CREATED
}

pub(crate) async fn get_animes(
  state: extract::State<Arc<AppState>>,
) -> Result<Json<Vec<Anime>>, (StatusCode, String)> {
  let todos = sqlx::query_as::<_, Anime>("SELECT * FROM anime")
    .fetch_all(&state.pool)
    .await
    .map_err(internal_error)?;

  Ok(Json(todos))
}

async fn get_anime(
  Path(id): Path<i32>,
  state: Arc<AppState>,
) -> Result<Json<Anime>, (StatusCode, String)> {
  let result = sqlx::query_as::<_, Anime>("SELECT * FROM anime WHERE id = $1")
    .bind(id)
    .fetch_optional(&state.pool)
    .await
    .map_err(|error| (StatusCode::INTERNAL_SERVER_ERROR, error.to_string()))?;

  match result {
    Some(todo) => {
      println!("{:?}", todo);
      Ok(Json(todo))
    },
    None => Err((StatusCode::NOT_FOUND, "Аниме не найдено".to_string())),
  }
}

async fn update_anime(
  Path(id): Path<i32>,
  Json(payload): Json<UpdateAnimeDTO>,
  state: Arc<AppState>,
) -> Result<StatusCode, (StatusCode, String)> {
  let mut query = String::from("UPDATE anime SET");
  let mut bind_values = Vec::new();
  let mut bind_index = 1;

  if let Some(status) = payload.status {
    query.push_str("status = $");
    query.push_str(&bind_index.to_string());
    bind_values.push(status);
    bind_index += 1;
  }

  if let Some(titles) = payload.titles {
    if !bind_values.is_empty() {
      query.push_str(", ");
    }
    query.push_str("titles = $");
    query.push_str(&bind_index.to_string());
    bind_values.push(titles);
    bind_index += 1;
  }

  if let Some(description) = payload.description {
    if !bind_values.is_empty() {
      query.push_str(", ");
    }
    query.push_str("description = $");
    query.push_str(&bind_index.to_string());
    bind_values.push(description);
    bind_index += 1;
  }

  if !bind_values.is_empty() {
    query.push_str(" WHERE id = $");
    query.push_str(&bind_index.to_string());
  }

  let mut query_builder = sqlx::query(&query);
  for value in bind_values {
    query_builder = query_builder.bind(value);
  }

  query_builder = query_builder.bind(id);

  let result = query_builder
    .execute(&state.pool)
    .await
    .map_err(internal_error)?;

  if result.rows_affected() > 0 {
    Ok(StatusCode::OK)
  } else {
    Err((StatusCode::NOT_FOUND, "Аниме не найдено".to_string()))
  }
}

async fn delete_anime(
  Path(id): Path<i32>,
  state: Arc<AppState>,
) -> StatusCode {
  let _ = sqlx::query("DELETE FROM anime WHERE id = $1")
    .bind(id)
    .execute(&state.pool)
    .await
    .map_err(internal_error)
    .unwrap();

  StatusCode::OK
}

fn internal_error<E>(err: E) -> (StatusCode, String)
  where
    E: std::error::Error,
{
  (StatusCode::INTERNAL_SERVER_ERROR, err.to_string())
}
