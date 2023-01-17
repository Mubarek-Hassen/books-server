// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../models/Book');

// functions for the path
const {
  test, getBooks, getBook, createBook, updateBook, deleteBook
} = require('../controllers/books-controller')

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', test);

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', getBooks);

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', getBook);

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', createBook);

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', updateBook);

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', deleteBook);

module.exports = router;