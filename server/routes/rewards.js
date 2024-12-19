const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const rewards = [
  { id: 11, name: 'coupon code 1', points: 50, image: 'https://via.placeholder.com/150', expiry: '2024-12-31', terms: 'Valid on all items.' },
  { id: 22, name: 'coupon code 2', points: 100, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 33, name: 'coupon code 3', points: 200, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 44, name: 'coupon code 4', points: 50, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 55, name: 'coupon code 5', points: 10, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
  { id: 66, name: 'coupon code 6', points: 500, image: 'https://via.placeholder.com/150', expiry: '2024-11-30', terms: 'One-time use only.' },
];

router.get('/', authMiddleware, (req, res) => res.json(rewards));

module.exports = router;
