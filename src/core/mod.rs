pub mod db;
pub mod app;
pub mod error;

use std::sync::Arc;
pub use db::DatabaseConfig;

use crate::anime::{routing as anime_routing};
use axum::Router;
use crate::AppState;


pub fn create_routing(shared_state: Arc<AppState>) ->  Router<Arc<AppState>> {
  let mut app = Router::new();

  app = Router::new()
    .nest("/api/v1/anime", anime_routing::create_router(shared_state));

  app
}
