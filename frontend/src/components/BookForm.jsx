// frontend/src/components/BookForm

import axios from "axios";
import { useEffect, useState } from "react";


const BookForm = ({ fetchBooks, existingBook, onClose }) => {
    const defaultBook = {
        title: '',
        author: '',
        genre: '',
        isbn: '',
        description: '',
        available: true,
    };
    const [book, setBook] = useState(defaultBook);
    
    useEffect(() => {
        if (existingBook) {
            setBook(existingBook);
        } 
    }, [existingBook]);
    
  
    useEffect(() => {
        if (existingBook) {
            setBook({
                title: existingBook.title,
                author: existingBook.author,
                genre: existingBook.genre,
                isbn: existingBook.isbn,
                description: existingBook.description,
                available: existingBook.available,
            });
        } else {
            setBook({
                title: '',
                author: '',
                genre: '',
                isbn: '',
                description: '',
                available: true,
            });
        }
    }, [existingBook]);
    

    const handleChange = (e) => {
        const { value, name, type, checked } = e.target
        setBook((prevState) => ({
            ...prevState,
            [name]:type ==='checkbox'?checked:value,
        }))

        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (existingBook) {
                await axios.put(`/api/books/${existingBook._id}`, book);

                
            } else {
                await axios.post('/api/books', book);

            }
            fetchBooks();
            onClose();
        } catch (err) {
            console.error(err.message);
            alert(`Error while saving the book: ${err.message}`);

        }
    }
    return (
        <div>
            <h2>{existingBook ? 'Edit Book' : 'create Book'}</h2>
            <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label><br />
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label><br />
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ISBN:</label><br />
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="available"
              checked={book.available}
              onChange={handleChange}
            />
            Available
          </label>
        </div>
        <button type="submit">{existingBook ? 'Update Book' : 'Add Book'}</button>
        <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
          Cancel
        </button>
      </form>
        </div>
    )
    
}

export default  BookForm 
