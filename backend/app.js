const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const path = require('path');
dotenv.config();

const app = express()

// connect to db
connectDB();

// middlware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/books', require('./routes/book'));


// Serve static assets in production (if needed)
// Example: app.use(express.static(path.join(__dirname, '../frontend/build')));
// Example route for serving frontend (if using server-side rendering):
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });


//default Route 
app.get('/', (req, res) => {
    res.send('API is running')
})
