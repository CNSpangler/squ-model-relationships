class Page {
  id;
  bookId;
  number;
  text;

  constructor(row) {
    this.id = row.id;
    this.bookId = row.book_id;
    this.number = row.number;
    this.text = row.text;
  }
}

module.exports = Page;
