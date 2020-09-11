const pool = require('../utils/pool');

class Book {
  id;
  title;
  author;
  genre;
  tags;
  
  constructor({ id, title, author, genre, tags }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.tags = tags;
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, author, genre, tags) VALUES ($1, $2, $3, $4) RETURNING *',
      [book.title, book.author, book.genre, book.tags]
    );

    return new Book(rows[0]);
  }
}

module.exports = Book;
