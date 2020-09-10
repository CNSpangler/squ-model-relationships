const pool = require('../utils/pool');

class Author {
  firstName;
  middleName;
  lastName;
  books;

  constructor(row) {
    this.firstName = String(row.first_name);
    this.middleName = String(row.middle_name);
    this.lastName = String(row.last_name);
    this.books = row.books;
  }

  static async insert(author) {
    const { rows } = await pool.query(
      'INSERT INTO authors (first_name, middle_name, last_name, books VALUES ($1, $2, $3, $3) RETURNING *',
      [author.firstName, author.middleName, author.lastName, author.books]
    );
  }
}

module.exports = Author;
