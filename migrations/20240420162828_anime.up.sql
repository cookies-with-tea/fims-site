-- Add up migration script here
BEGIN;

CREATE TABLE IF NOT EXISTS anime
(
  id            SERIAL PRIMARY KEY NOT NULL,
  titles        TEXT[]             NOT NULL,
  description   TEXT DEFAULT '',
  images        TEXT[],
  status        TEXT                        DEFAULT 'онгоинг',
  season        TEXT DEFAULT '',
  release_date  DATE,
  rating        INT                         DEFAULT 0,
  reviews_count INT                         DEFAULT 0,
  age_rating    TEXT DEFAULT '',
  duration      INT                         DEFAULT 0,
  source        TEXT DEFAULT '',
  type          TEXT                        DEFAULT 'series',
  created_at    TIMESTAMP          NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMP          NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS anime_genres
(
  anime_id INTEGER REFERENCES anime (id) ON DELETE CASCADE,
  genre_id INTEGER REFERENCES genres (id) ON DELETE CASCADE,
  CONSTRAINT anime_genre_pkey PRIMARY KEY (genre_id, anime_id)
);

COMMIT;
