use chrono::NaiveDateTime;
use serde_derive::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Deserialize, Debug)]
pub struct CreateAnimeDTO {
  pub(crate) titles: Vec<String>,
  pub(crate) status: Option<String>,
  pub(crate) description: Option<String>,
}

#[derive(Deserialize, Debug)]
pub struct UpdateAnimeDTO {
  pub(crate) titles: Option<String>,
  pub(crate) status: Option<String>,
  pub(crate) description: Option<String>,
}

#[derive(Serialize, Debug, sqlx::FromRow)]
pub struct Anime {
  id: i32,
  titles: Vec<String>,
  status: String,
  description: String,
  created_at: NaiveDateTime,
  updated_at: NaiveDateTime,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct FilterItem {
  pub(crate) label: String,
  pub(crate) uuid: Uuid,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct FilterCategory {
  pub(crate) title: String,
  pub(crate) uuid: Uuid,
  pub(crate) items: Vec<FilterItem>,
}
