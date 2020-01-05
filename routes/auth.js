const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../controllers/auth');

// Auth route
router.route('/').get(isAuthenticated);

module.exports = router;
