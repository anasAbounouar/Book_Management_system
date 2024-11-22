const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
    const { title, author, genre, isbn, description, available, coverImage } = req.body;
    try {
        // Check if the book with the same ISBN already exists
        let book = await Book.findOne({ isbn });
        if (book) {
            return res.status(400).json({ msg: 'Book with this ISBN already exists' });
        }

        // Create a new book instance
        book = new Book({
            title,
            author,
            genre,
            isbn,
            description,
            available: available === undefined ? true : available,
           
        });

        await book.save();
        res.status(201).json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error in Creation');
    }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ msg: "Book not found" });
        }
        res.json(book);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Book not found" });
        }
        res.status(500).send('Server error in getting book by id');
    }
};
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);


    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error in getting books ');

    }
}
// Update a book by ID
exports.updateBook = async (req, res) => {
    const { title, author, genre, isbn, description, available } = req.body;
    const bookFields = {};

    if (title) bookFields.title = title;
    if (author) bookFields.author = author;
    if (genre) bookFields.genre = genre;
    if (isbn) bookFields.isbn = isbn;
    if (description) bookFields.description = description;
    if (available) bookFields.available = available;

    try {
        let book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ msg: 'Book not found' });

        book = await Book.findByIdAndUpdate(
            req.params.id,
            { $set: bookFields },
            { new: true }
        );
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error in updating');
    }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
    const id = req.params.id;

    try {
        let book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ msg: "Book not found" });
        }
        await Book.findByIdAndDelete(id);
        res.json({ msg: 'Book removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error in deletion');
    }
};
