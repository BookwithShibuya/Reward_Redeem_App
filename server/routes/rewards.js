const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const rewards = [
  { id: 1, name: '10% Off Coupon', points: 100, image: 'https://via.placeholder.com/150', expiry: '2024-12-31', terms: 'Valid on all items.' },
  { id: 2, name: 'Free Shipping', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 3, name: 'Free Shipping', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 4, name: 'Free Shipping', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 5, name: 'Free Shipping', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 6, name: 'Free Shipping', points: 500, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
];

router.get('/', authMiddleware, (req, res) => res.json(rewards));

module.exports = router;
