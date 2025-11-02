const express = require('express');
const router = express.Router();

// Routes
router.post('/register', (req, res) => {
    res.json({ message: 'Register endpoint - will implement later' });
});

router.post('/login', (req, res) => {
    res.json({ message: 'Login endpoint - will implement later' });
});

module.exports = router;