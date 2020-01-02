// Connects to the Google Sheets Document
const GoogleMethods = require('../config/googleSheetsData');
const students = GoogleMethods.students;
const uuid = require('uuid');
const handleActions = GoogleMethods.connectGoggleSheets;
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
    const newStudent = {
      id: uuid.v4(),
      studentname: req.body.studentname,
      gender: req.body.gender,
      major: req.body.major,
      homestate: req.body.homestate,
      classlevel: req.body.classlevel,
      extracurricularactivity: req.body.extracurricularactivity
    };

    if (!newStudent.studentname) {
      return res
        .status(400)
        .json({ message: 'Please insert at least your name!' });
    }
    await handleActions(newStudent, 'create');
    res.redirect('/api/v2/students');
  } catch (error) {
    console.log(error);
  }
};

// @desc  GET Create Student Layout
// @route POST /api/v2/create
// @access Public
exports.createStudent = (req, res, next) => {
  res.render('create', { title: 'Students' });
};
