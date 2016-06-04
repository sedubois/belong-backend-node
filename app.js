const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const NotFound = require('./utils/errors').NotFound;
const practices = require('./components/practice/routes');
const users = require('./components/user/routes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/practices', practices);
app.use('/api/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFound(req.url, req.method)));

// error handler
app.use((err, req, res, next) => {
  console.error("Express error:", err);
  res.status(err.status || 500).send({ message: err.message });
});

module.exports = app;
