const Book = require('../models/Book');

exports.createBook = async (req, res) => {
    
    const { title, author, genre, isbn, description, available } = req.body;
    try {
        // Check if the book with the same ISBN already exists
        let book = await Book.findOne({ isbn })
        if (book) {
            return res.status(400).json({ msg: 'BOOk with this isbn already exists' });

        }




        // create a new book instance 
        book = Book({
            title, author, genre, isbn, description, available: available == undefined ? true : available, coverImage: coverImageUrl,
            
        });

        await book.save();
        res.status(201).json(book)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

    
    
}
// get single book by ID

exports.getBookById = async (req, res) => {

    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ msg: " book not Found" });

        }

    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: "Book Not Found" });
        }
        res.status(500).send('server error');


    }
    

}

// update book bye id

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
        let book = await  Book.findById(req.params.id);
        if (!book) return res.status(404).json({ msg: 'Book not Found' });
        book = await Book.findByIdAndUpdate(
            req.params.id,
            { $set: bookFields },
            { new: true }
        );
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }
}

//delete book bye id

exports.deleteBook = async (req, res) => {
    const id = req.params.id
    

    try {
        let book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ msg: "Book  Not Found" });


        }
        await Book.findByIdAndDelete(id);
        res.json({ msg: 'Book removed' });


    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
        
    }
}

