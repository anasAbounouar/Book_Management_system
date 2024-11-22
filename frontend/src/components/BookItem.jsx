// frontend/src/components/Bookitem

import axios from "axios";
import BookForm from "./BookForm";
import { useState } from "react";
import { Box, Button, Typography } from '@mui/material';

const BookItem = ({ fetchBooks, book }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/books/${book._id}`);
      fetchBooks();
    } catch (err) {
      console.error(err.message);
      alert('Failed to delete the book');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
  };

  return (
    <Box sx={{ border: '1px solid #ccc', padding: 2, marginBottom: 2 }}>
      <Typography variant="h6">{book.title}</Typography>
      <Typography variant="body2"><strong>Author:</strong> {book.author}</Typography>
      <Typography variant="body2"><strong>Genre:</strong> {book.genre}</Typography>
      <Typography variant="body2"><strong>ISBN:</strong> {book.isbn}</Typography>
      <Typography variant="body2"><strong>Description:</strong> {book.description}</Typography>
      <Typography variant="body2"><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</Typography>

      <Button onClick={handleEdit} variant="outlined" sx={{ marginRight: 2 }}>
        Edit
      </Button>
      <Button onClick={handleDelete} color="error" variant="outlined">
        Delete
      </Button>

      {isEditing && (
        <BookForm fetchBooks={fetchBooks} existingBook={book} onClose={handleCloseForm} />
      )}
    </Box>
  );
};

export default BookItem;
