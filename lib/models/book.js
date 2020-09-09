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
}

module.exports = Book;
