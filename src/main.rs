mod core;
mod anime;

use serde::{Deserialize, Serialize};
use std::{sync::Arc};
use sqlx::{Pool, Postgres};
use crate::core::app::{AppConfig};
use crate::core::create_routing;
use crate::core::db::create_pool;

#[derive(Clone, Debug)]
struct AppState {
  pool: Pool<Postgres>
}

#[tokio::main]
async fn main() {
  tracing_subscriber::fmt()
    .init();
  dotenv::dotenv().ok();

  let config = AppConfig::new();
  let pool = create_pool(&config).await;
  let app_host = config.app_host.clone();
  let app_port = config.app_port.clone();

  let shared_state = Arc::new(AppState { pool: pool.clone() });

  let app = create_routing(shared_state.clone()).with_state(shared_state);

  let listener = tokio::net::TcpListener::bind(format!("{}:{}", {app_host}, {app_port})).await.unwrap();

  let _ = sqlx::migrate!().run(&pool.clone()).await;

  axum::serve(listener, app).await.unwrap();
}
