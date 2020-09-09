const pool = require('../utils/pool');

class Book {
  id;
  title;
  author;
  genre;
  
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
    this.genre = row.genre;
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, author, genre) VALUES ($1, $2, $3) RETURNING *',
      [book.title, book.author, book.genre]
    );

    return new Book(rows[0]);
  }
}

module.exports = Book;
