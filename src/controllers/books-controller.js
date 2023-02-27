const Book = require('../models/Book')
const User = require('../models/User')

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
  Book.create({
    user: req.user.id,
    title: req.body.title,
    author: req.body.author,
  })
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book', err }));
}

// @description update book

const updateBook = async (req, res) => {
  const user = await User.findById(req.user.id)
  const book = await Book.findById(req.params.id)
  if(!user){
    res.status(401)
    throw new Error('user not found!')
  }

  // logged in user check
  if(book.user.toString() !== user.id){
    console.log(book)
    console.log(user.id)
    res.status(401)
    throw new Error('User not authorized')
  }
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
}

// @description delete book

const deleteBook = async(req, res) => {
  const user = await User.findById(req.user.id)
  if(!user){
    res.status(401)
    throw new Error('user not found!')
  }

  // logged in user check
  if(Book.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized')
  }
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
}


module.exports = {
  test, getBooks, getBook, createBook, updateBook, deleteBook
}