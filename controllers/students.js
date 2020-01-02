// Connects to the Google Sheets Document
const students = require('../config/googleSheetsData');

const Student = require('../model/Student');

// @desc GET All Students
// @route GET /api/v2/students
// @access Public

exports.getStudents = async (req, res, next) => {
  try {
    await res.render('index', { title: 'Students', students });
  } catch (error) {
    console.log(error);
  }
};

// @desc GET Student By ID
// @route GET /api/v2/student/:id
// @access Public
exports.getStudentById = async (req, res, next) => {
  try {
    const hasStudent = students.some(student => student.id === req.params.id);
    if (hasStudent) {
      const filtered = students.filter(student => student.id === req.params.id);
      res.render('show', { title: 'Students', filtered });
    } else {
      res.status(400).json(`There is no student with id ${req.params.id}.`); //Bad Request status
    }
  } catch (error) {
    console.log(error);
  }
};

// @desc POST Student
// @route POST /api/v2/student
// @access Public

exports.addStudent = async (req, res, next) => {
  try {
    console.log('POST');
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
};
