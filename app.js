const config = require('./utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const notesRouter = require('./controllers/notes');
const userRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const middleware = require('./utils/middleware');
const morgan = require('morgan');
const mongoose = require('mongoose');
const logger = require('./utils/logger');

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch(error => {
    console.error('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

morgan.token('data', (request, response) => {
  return JSON.stringify(request.body);
});
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :data')
);

app.use('/api/notes', notesRouter);
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
