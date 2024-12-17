
const userRoutes = require('./route');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Load environment variables
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(userRoutes)

// Connect to MongoDB
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Import routes from route.js
app.use('/api', userRoutes); // Prefix routes with `/api`

// Default route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server run ${PORT}`);
});
