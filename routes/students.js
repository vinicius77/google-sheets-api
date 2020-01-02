const express = require('express');
const router = express.Router();
const { getStudents, addStudent } = require('../controllers/students');

router
  .route('/')
  .get(getStudents)
  .post(addStudent);

module.exports = router;
