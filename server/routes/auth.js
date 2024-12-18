const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const mockUser = { username: 'testuser', password: 'testuser0000', points: 300 };

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign({ username, points: mockUser.points }, 'your_secret_key', { expiresIn: '1h' });
    return res.json({ success: true, token, user: { username, points: mockUser.points } });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

module.exports = router;
