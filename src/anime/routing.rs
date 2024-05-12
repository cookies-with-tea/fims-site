use std::sync::Arc;
use axum::Router;
use axum::routing::{get, post};
use crate::anime::handlers::{create_anime, get_anime_filters, get_animes};
use crate::AppState;

pub fn create_router(shared_state: Arc<AppState>) -> Router<Arc<AppState>> {
  let mut app = Router::new();

  app = app.route("/", post({
    let shared_state = shared_state.clone();
    move |body| create_anime(body, shared_state.clone())
  }))
  .route("/", get(get_animes))
  .route("/filters/:key", get(get_anime_filters));

  app
}
