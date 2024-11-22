// frontend/src/pages/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/books");
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Book Management System
      </Typography>
      <Typography variant="body1" paragraph>
        Manage your book collection efficiently.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleNavigate}
        sx={{ marginTop: 2 }}
      >
        Go to books page
      </Button>
    </Box>
  );
};

export default Home;
