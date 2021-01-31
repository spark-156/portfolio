const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.port || 5000;

const app = express();

// Logging middleware
app.use(morgan('dev'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Parse application/json
app.use(bodyParser.json())

// Import and init projects route
const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

// Import and init about route
const aboutRouter = require('./routes/about');
app.use("/api/about", aboutRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  status = err.status || 500;
  res.status(status).send(err.message);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});