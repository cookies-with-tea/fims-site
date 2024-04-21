-- Add up migration script here

BEGIN;

CREATE TABLE IF NOT EXISTS genres
(
  id          SERIAL PRIMARY KEY NOT NULL,
  title       TEXT UNIQUE        NOT NULL,
  description TEXT
);

COMMIT;
