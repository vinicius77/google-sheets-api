const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudentById,
  addStudent,
  createStudent,
  editStudent,
  updateStudent
} = require('../controllers/students');

router
  .route('/')
  .get(getStudents)
  .post(addStudent);

router.route('/create').get(createStudent);

router
  .route('/edit/:id')
  .get(editStudent)
  .post(updateStudent);

router.route('/:id').get(getStudentById);

module.exports = router;
