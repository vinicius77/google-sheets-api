const connectGoggleSheets = require('../config/googleSheetsData');
// Connects to the Google Sheets Document

const Student = require('../model/Student');
// @desc GET All Students
// @route GET /api/v2/students
// @access Public

exports.getStudents = async (req, res, next) => {
  try {
    const students = await connectGoggleSheets({}, 'show');
    console.log(students);
    await res.render('index', { title: 'Students', students });
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
