const express = require('express');
const User = require('../Models/user');
const router = express.Router();

const sessions = {};

// Register new user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ // check if user already exists
            $or: [{ email: email }, { username: username }]
        });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email or username already exists, please try another one!'
            });
        }
        // Create new user
        const user = new User({ username, email, password });
        await user.save();

        // Create session
        const sessionId = Date.now().toString();
        sessions[sessionId] = user._id;

        res.json({
            success: true,
            message: 'Registered successfully!',
            sessionId,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Error! Please try again.',
            error: error.message
        });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'No account found with this email'
            });
        }
        // Check password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            });
        }
        // Create session
        const sessionId = Date.now().toString();
        sessions[sessionId] = user._id;

        res.json({
            success: true,
            message: 'Logged in successfully!',
            sessionId,
            user: {
            id: user._id,
            username: user.username,
            email: user.email    
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Error logging in',
            error: error.message
        });
    }
});

// Logout route
router.post('/logout', (req, res) => {
    const { sessionId } = req.body;
    delete sessions[sessionId];
    res.json({ success: true, message: 'logged out successfully!' });
});

module.exports = router;