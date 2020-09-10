const pool = require('../utils/pool');

class Book {
  id;
  title;
  author;
  genre;
  tags;
  
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
    this.genre = row.genre;
    this.tags = row.tags;
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
