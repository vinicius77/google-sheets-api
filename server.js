const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

// Creates the server
const app = express();

// Middleware that allow Using PUT and DELETE requests coming from HTML forms
app.use(methodOverride('_method'));

// Loads the Environment Variables
dotenv.config({ path: './config/config.env' });

// // Handelbars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json()); //Allows to use body parser (Sending an object in the body of a post request)
app.use(express.urlencoded({ extended: false })); //Alows Send JSON in post requests

// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// CORS Middleware
app.use(cors());

// Link to students routes
const students = require('./routes/students');
app.use('/api/v2/students', students);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server Successfully started in ${process.env.NODE_ENV} on port ${PORT}`
  )
);
