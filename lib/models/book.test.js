const pool = require('../utils/pool');
const fs = require('fs');
const Book = require('./book');

describe('Book model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });


  it('creates a book with the insert method', async() => {
    const createdBook = await Book.insert({
      title: 'Read This',
      author: 'Boss O\'You',
      genre: 'self-help'
    });

    const { rows } = await pool.query('SELECT * FROM books');

    expect(createdBook).toEqual(rows[0]);
  });
});
