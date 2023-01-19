const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../models/Book');

// functions for the path
const {
  test, getBooks, getBook, createBook, updateBook, deleteBook
} = require('../controllers/books-controller')

// @route GET /books/test
// @description tests books route
router.route('/test').get(test);

// router.route('/path').httpMethod(function).httpMethod(function)...
// If the path is identical, they can be written as such

router.route('/').get(getBooks).post(createBook)

// router.get('/', getBooks);
// router.post('/', createBook);

router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)

// router.get('/:id', getBook);
// router.put('/:id', updateBook);
// router.delete('/:id', deleteBook);

module.exports = router;