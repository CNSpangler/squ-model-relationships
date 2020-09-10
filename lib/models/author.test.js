const pool = require('../utils/pool');
const fs = require('fs');
const Author = require('./author');

describe('Author class', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates an author with insert method', async() => {

    const createdAuthor = await Author.insert ({
      firstName: 'Chelsea',
      middleName: 'Nicole',
      lastName: 'Spangler',
      books: 'The Best One'
    });

    const { rows } = await pool.query('SELECT * FROM authors');
    console.log(rows[0]);

    expect(rows[0]).toEqual({
      id: expect.any(String),
      first_name: 'Chelsea',
      middle_name: 'Nicole',
      last_name: 'Spangler',
      books: 'The Best One'
    });

  });
});
