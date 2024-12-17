
const userModel = require('./model'); // Import the user model

// Controller function to handle user registration
exports.register = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Validate required fields
        if (!name || !email || !age) {
            return res.status(400).json({ message: 'Name, email, and age are required' });
        }

        // Create a new user in the database
        const createUser = await userModel.create({ name, email, age });

        // Send success response
        res.status(201).json({ message: 'User created successfully', data: createUser });
    } catch (error) {
      
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};
