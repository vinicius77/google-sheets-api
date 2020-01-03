const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudentById,
  addStudent,
  createStudent,
  editStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/students');

router
  .route('/')
  .get(getStudents)
  .post(addStudent);

router.route('/create').get(createStudent);

router
  .route('/edit/:id')
  .get(editStudent)
  .put(updateStudent);

router.route('/:id').get(getStudentById);

router.route('/delete/:id').delete(deleteStudent);

module.exports = router;
