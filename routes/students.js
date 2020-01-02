const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudentById,
  addStudent,
  createStudent
} = require('../controllers/students');

router
  .route('/')
  .get(getStudents)
  .post(addStudent);

router.route('/create').get(createStudent);

router.route('/:id').get(getStudentById);

module.exports = router;
