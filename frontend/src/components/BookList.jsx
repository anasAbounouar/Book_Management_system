// frontend/src/components/BookList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import BookForm from './BookForm';
import { Button, Box, Typography } from '@mui/material';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('/api/books');
      setBooks(res.data);
    } catch (err) {
      console.error({"error is ": err});
      alert('Failed to fetch books.');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddNew = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Book Management
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleAddNew}
        sx={{ marginBottom: 2 }}
      >
        Add New Book
      </Button>

      {showForm && (
        <BookForm
          fetchBooks={fetchBooks}
          onClose={handleCloseForm}
        />
      )}

      <Box sx={{ marginTop: 2 }}>
        {books.length === 0 ? (
          <Typography variant="body1">No books available.</Typography>
        ) : (
          books.map((book) => (
            <BookItem key={book._id} book={book} fetchBooks={fetchBooks} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default BookList;
