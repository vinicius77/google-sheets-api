const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const handlebars = require('express-handlebars');

const app = express();

// Loads the Environment Variables
dotenv.config({ path: './config/config.env' });

// // Handelbars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());

// CORS Middleware
app.use(cors());

// Link to students routes
app.use('/api/v2/students', require('./routes/students'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    `Server Successfully started in ${process.env.NODE_ENV} on port ${PORT}`
  )
);
