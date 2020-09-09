const pool = require('../utils/pool');
const fs = require('fs');
const Page = require('./page');
const Book = require('./book');

describe('Page model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('../sql/setup.sql'));
  })

  it('creates a new page with insert', async() => {
    const book = await Book.insert({
      title: 'A Book',
      author: 'Some Author'
    });

    const page = await Page.insert({
      bookId: book.bookId,
      number: 1,
      text: 'Thanks for reading'
    });

    const { rows } = pool.query(
      'SELECT * FROM pages'
    );

    expect(rows[0]).toEqual(page);
  });
});
