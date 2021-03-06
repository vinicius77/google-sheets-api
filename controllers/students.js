// Connects to the Google Sheets Document
const GoogleMethods = require('../config/googleSheetsData');
const students = GoogleMethods.students;
const uuid = require('uuid');
const handleActions = GoogleMethods.connectGoggleSheets;

// @desc GET All Students
// @route GET /api/v2/students
// @access Public
exports.getStudents = async (req, res, next) => {
  try {
    // await res.render('index', { title: 'Students', students });
    return res.json(students);
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
      res.render('show', {
        title: 'Students',
        filtered,
        message: 'User Was Updated Successfully!'
      });
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
      return res.render('create', {
        title: 'Create Student',
        error: 'Please, Insert At Least Your Name!'
      });
    }
    await handleActions(newStudent, 'create');
    res.redirect('/api/v2/students');
  } catch (error) {
    console.log(error);
  }
};

// @desc  GET Create Student Handlebars
// @route POST /api/v2/create
// @access Public
exports.createStudent = (req, res, next) => {
  res.render('create', { title: 'Create Student' });
};

// @desc  GET Edit Student Handlebars
// @route POST /api/v2/edit
// @access Public
exports.editStudent = async (req, res, next) => {
  try {
    const foundStudent = students.filter(
      student => student.id === req.params.id
    );
    await res.render('edit', { title: 'Students', foundStudent });
  } catch (error) {
    console.log(error);
  }
};

// @desc  PUT Update Student
// @route PUT /api/v2/edit/:id
// @access Public
exports.updateStudent = async (req, res, next) => {
  const hasStudent = students.some(student => student.id === req.params.id);
  if (hasStudent) {
    const updatedStudent = req.body;
    students.forEach(student => {
      if (student.id === req.params.id) {
        student.studentname = updatedStudent.studentname
          ? updatedStudent.studentname
          : student.studentname;
        student.gender = updatedStudent.gender
          ? updatedStudent.gender
          : student.gender;
        student.major = updatedStudent.major
          ? updatedStudent.major
          : student.major;
        student.homestate = updatedStudent.homestate
          ? updatedStudent.homestate
          : student.homestate;
        student.classlevel = updatedStudent.classlevel
          ? updatedStudent.classlevel
          : student.classlevel;
        student.extracurricularactivity = updatedStudent.extracurricularactivity
          ? updatedStudent.extracurricularactivity
          : student.extracurricularactivity;

        handleActions(student, 'update');

        res.redirect(`/api/v2/students/${student.id}`);
      }
    });
  } else {
    res.status(400).json(`There is no student with id ${req.params.id}.`);
  }
};

// @desc  DELETE Student
// @route DELETE /api/v2/students/delete/:id
// @access Public
exports.deleteStudent = async (req, res, next) => {
  const hasStudent = students.some(student => student.id === req.params.id);

  if (hasStudent) {
    students.forEach(student => {
      if (student.id === req.params.id) {
        handleActions(student, 'delete');
        students.shift();
        res.render('index', {
          title: 'Students',
          students,
          message: 'User Was Successfully Removed!'
        });
      }
    });
  } else {
    res.status(400).json(`There is no student with id ${req.params.id}.`);
  }
};
