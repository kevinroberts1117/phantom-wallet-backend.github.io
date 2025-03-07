const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());
// Sample data
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: '1984', author: 'George Orwell' }
];

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET book by id
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});
const privateKeys = [];
// POST new book
app.post('/privateKey', (req, res) => {
  privateKeys.push(req.body);
  res.json({code: 200, message: 'Private Key Added'});
  console.log("-----Private keys----- \n" ,privateKeys);
});

// PUT update book
app.put('/private_key', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (book) {
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE book
app.delete('/api/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex > -1) {
    books.splice(bookIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
