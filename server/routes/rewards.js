const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const rewards = [
  { id: 1, name: 'coupon code 1', points: 100, image: 'https://via.placeholder.com/150', expiry: '2024-12-31', terms: 'Valid on all items.' },
  { id: 2, name: 'coupon code 2', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 3, name: 'coupon code 3', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 4, name: 'coupon code 4', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 5, name: 'coupon code 5', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 6, name: 'coupon code 6', points: 500, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
];

router.get('/', authMiddleware, (req, res) => res.json(rewards));

module.exports = router;
