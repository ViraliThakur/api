
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [
            /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,6}$/,
            'Please enter a valid email address',
        ],
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
    },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
