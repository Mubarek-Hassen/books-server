const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../models/Book');

const { protect } = require('../middleware/authMiddleware')

// functions for the path
const {
  test, getBooks, getBook, createBook, updateBook, deleteBook
} = require('../controllers/books-controller')

// @route GET /books/test
// @description tests books route
router.route('/test').get(test);

// router.route('/path').httpMethod(function).httpMethod(function)...
// If the path is identical, they can be written as such

router.route('/').get(protect, getBooks).post(protect, createBook)

// router.get('/', getBooks);
// router.post('/', createBook);

router.route('/:id').get(getBook).put(protect, updateBook).delete(protect, deleteBook)

// router.get('/:id', getBook);
// router.put('/:id', updateBook);
// router.delete('/:id', deleteBook);

module.exports = router;