
const express = require('express');
const { register } = require('./controller'); // Import the controller

const router = express.Router();
router.post('/register', register);

module.exports = router;

