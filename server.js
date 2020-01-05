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
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Alows Send JSON in post requests

// CORS Middleware
app.use(cors());

// Link to auth routes
app.use('/auth', require('./routes/auth'));

// Link to students routes
app.use('/api/v2/students', require('./routes/students'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    `Server Successfully started in ${process.env.NODE_ENV} on port ${PORT}`
  )
);
