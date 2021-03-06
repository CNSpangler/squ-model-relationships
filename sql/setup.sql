DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author TEXT NOT NULL,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  tags TEXT
);

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name TEXT NOT NULL,
  middle_name TEXT,
  last_name TEXT NOT NULL,
  books TEXT
);

-- CREATE TABLE pages (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   book_id BIGINT REFERENCES books(id),
--   number INT NOT NULL,
--   text TEXT NOT NULL
-- )
