// backend/models/Book.js

const mongoose = require("mongoose");



const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim:true,
        },
        author: {
            type: String,
            required: true,
            trim:true,
        },
        genre: {
            type: String,
            required: true,
            trim:true,
        },
        isbn: {
            type: String,
            required: true,
            unique:true,
            trim:true,
        },
        // coverImage: {
        //     type: String, // Url to image
            
        // },
        description: {
            type: String,
            
            trim:true,
        },
        available: {
        type: Boolean,
        default: true
        }
        

    }, {
        timestamps: true,
    }
)
module.exports = mongoose.model('Book',BookSchema)