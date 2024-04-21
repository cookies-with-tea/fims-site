pub mod db;
pub mod app;
pub mod error;

use std::sync::Arc;
pub use db::DatabaseConfig;

use crate::anime::{routing as anime_routing};
use axum::Router;


pub fn create_routing(shared_state: Arc<crate::AppState>) -> Router<Arc<crate::AppState>> {
  let mut app = Router::new();

  let api_routes = Router::new()
    .nest("/anime", anime_routing::create_router(shared_state));

  app = app.nest("/api/v1", api_routes);

  // app = app.nest("/api/v1", user_routing::create_router());

  app
}
