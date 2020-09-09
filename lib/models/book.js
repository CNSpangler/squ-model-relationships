const pool = require('../utils/pool');

class Book {
  id;
  title;
  author;
  
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO dogs (title, author) VALUES ($1, $2, $3) RETURNING *',
      [book.title, book.author]
    );

    return new Book(rows[0]);
  }
}

module.exports = Book;
