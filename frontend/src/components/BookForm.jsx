// frontend/src/components/BookForm

import axios from "axios";
import { useEffect, useState } from "react";
import { Button, TextField, Box, FormControlLabel, Checkbox, Typography } from '@mui/material';

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

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

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
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5">{existingBook ? 'Edit Book' : 'Create Book'}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={book.title}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Genre"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="ISBN"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={book.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <FormControlLabel
          control={<Checkbox checked={book.available} onChange={handleChange} name="available" />}
          label="Available"
        />
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary" type="submit" sx={{ marginRight: 2 }}>
            {existingBook ? 'Update Book' : 'Add Book'}
          </Button>
          <Button variant="outlined" onClick={onClose} color="secondary">
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BookForm;
    