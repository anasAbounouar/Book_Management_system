const express = require('express');

router = express.Router();

const {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
} = require('../controllers/bookController');
  
// @route Post /api/books
// @desc create new book
// @access  public
router.post('/', createBook)

// @route   Get /api/books
// @desc    Get all books
// @access  Public 

router.get('/', getBooks)

// @route   Get /api/books/:id
// @desc    Get  book by id
// @access  Public 

router.get('/', getBookById)
// @route   PUT /api/books/:id
// @desc    Update a book by ID
// @access  Public (Change to Private with authentication if needed)
router.post('/:id', updateBook)

// @route   DELETE /api/books/:id
// @desc    Delete a book by ID
// @access  Public (Change to Private with authentication if needed)
router.post('/:id', deleteBook)



module.exports = router;