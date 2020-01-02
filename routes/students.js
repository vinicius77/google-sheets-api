const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudentById,
  addStudent
} = require('../controllers/students');

router
  .route('/')
  .get(getStudents)
  .post(addStudent);

router.route('/:id').get(getStudentById);

module.exports = router;
