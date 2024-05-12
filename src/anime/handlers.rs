use std::sync::Arc;
use axum::extract::{Path, State};
use axum::http::StatusCode;
use axum::{Json};
use serde_json::json;
use uuid::Uuid;
use crate::anime::model::{Anime, CreateAnimeDTO, FilterCategory, FilterItem, UpdateAnimeDTO};
use crate::AppState;
use crate::core::error::internal_error;
use crate::core::response::ApiResponse;

pub(crate) async fn create_anime(
  Json(payload): Json<CreateAnimeDTO>,
  state: Arc<AppState>,
) -> Json<ApiResponse<()>> {
  let status = payload.status.unwrap_or("anime".to_string());
  let description = payload.description.unwrap_or("".to_string());

  let result = sqlx::query(
    "INSERT INTO anime (titles) VALUES ($1)"
  )
    .bind(&payload.titles)
    .bind(status)
    .bind(description)
    .execute(&state.pool)
    .await;

  let mut response = ApiResponse {
    data: None,
    errors: Vec::new(),
    messages: Vec::new(),
  };

  match result {
    Ok(_) => {
      response.messages.push("Аниме успешно создано".to_string());
      Json(response)
    },
    Err(err) => {
      response.errors.push(internal_error(err).1); // Получить только строку из кортежа
      Json(response)
    }
  }
}

pub(crate) async fn get_animes(
  state: State<Arc<AppState>>,
) -> Result<Json<ApiResponse<Vec<Anime>>>, (StatusCode, String)> {
  let result = sqlx::query_as::<_, Anime>("SELECT * FROM anime")
    .fetch_all(&state.pool)
    .await
    .map_err(internal_error)?;

  let mut response = ApiResponse {
    data: Some(result),
    errors: Vec::new(),
    messages: Vec::new(),
  };

  Ok(Json(response))
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

// filters
pub(crate) async fn get_anime_filters<'a>(
  Path(key): Path<String>,
) -> Result<Json<ApiResponse<FilterCategory>>, (StatusCode, String)> {
  let uuid = match Uuid::parse_str(&key) {
    Ok(uuid) => uuid,
    Err(_) => return Ok(Json(ApiResponse { data: None, errors: Vec::new(), messages: Vec::new() })),
  };

  let category = get_categories().iter().find(|c| c.uuid == uuid).cloned();

  let response = ApiResponse {
    data: category,
    errors: Vec::new(),
    messages: Vec::new(),
  };

  Ok(Json(response))
}

fn get_categories() -> Vec<FilterCategory> {
  vec![
    FilterCategory {
      title: "Жанры".to_string(),
      uuid: "92add9a4-4daa-4e70-bc1b-7e81fe9a11ef".parse().unwrap(),
      items: vec![
        FilterItem {
          label: "Хоррор".to_string(),
          uuid: uuid::Uuid::new_v4(),
        },
        FilterItem {
          label: "Комедия".to_string(),
          uuid: uuid::Uuid::new_v4(),
        },
        FilterItem {
          label: "Приключения".to_string(),
          uuid: uuid::Uuid::new_v4(),
        },
      ],
    },
    FilterCategory {
      title: "Страны".to_string(),
      uuid: "70b44723-5c67-421b-bf0c-9202ae955dea".parse().unwrap(),
      items: vec![
        FilterItem {
          label: "Омерика".to_string(),
          uuid: uuid::Uuid::new_v4(),
        },
        FilterItem {
          label: "Британия".to_string(),
          uuid: uuid::Uuid::new_v4(),
        },
        FilterItem {
          label: "Казхастан".to_string(),
          uuid: uuid::Uuid::new_v4(),
        },
      ],
    },
  ]
}