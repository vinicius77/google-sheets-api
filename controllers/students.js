// Connects to the Google Sheets Document
const GoogleMethods = require('../config/googleSheetsData');
const students = GoogleMethods.students;
const handleActions = GoogleMethods.connectGoggleSheets;

// @desc GET All Students - React
// @route GET /api/v2/students
// @access Public
exports.getStudents = async (req, res, next) => {
  try {
    return res
      .status(200)
      .json({ success: true, count: students.length, data: students });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error.message}`
    });
  }
};

// @desc POST Student - React
// @route POST /api/v2/students
// @access Public
exports.addStudent = async (req, res, next) => {
  try {
    const newStudent = req.body;
    await handleActions(newStudent, 'create');
    return res.status(200).json({
      success: true,
      data: newStudent
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error.message}`
    });
  }
};
// @desc  DELETE Student
// @route DELETE /api/v2/students/delete/:id
// @access Public
exports.deleteStudent = async (req, res, next) => {
  try {
    const student = req.params;
    await handleActions(student, 'delete');
    return res.status(200).json({
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error.message}`
    });
  }
};
