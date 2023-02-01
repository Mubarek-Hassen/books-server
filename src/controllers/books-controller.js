const Book = require('../models/Book')

const test = (req, res) => res.send('testing books route!')


// @description Get all books

const getBooks = async (req, res) => {
  const books = await Book.find({ user: req.user.id})
  res.json(books)
}



// @description Get single book by id

const getBook = (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
}

// @description add/create book

const createBook = (req, res) => {
  Book.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book', err }));
}

// @description update book

const updateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
}

// @description delete book

const deleteBook = (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
}


module.exports = {
  test, getBooks, getBook, createBook, updateBook, deleteBook
}