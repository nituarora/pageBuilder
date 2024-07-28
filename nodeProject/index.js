const express = require("express")
const mongoose = require("mongoose") // new
require('dotenv').config();
const http = require("http");
const app = require('./app');

// Check if DB_URI is present in environment variables
if (!process.env.DB_URI) {
    console.error('Error: DB_URI is not defined in environment variables');
    process.exit(1);
}

//Connect to MongoDB database
mongoose.connect(process.env.DB_URI).then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const PORT = process.env.PORT || 3003;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});





  