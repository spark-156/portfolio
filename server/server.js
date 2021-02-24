const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const fileuploader = require("express-fileupload");

const db = require("./models/index");

const PORT = process.env.port || 5000;

const app = express();

// Logging middleware
app.use(morgan('dev'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Parse application/json
app.use(bodyParser.json())

// Parse uploaded files
app.use(fileuploader());

// Import and init projects route
const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

// Import and init about route
const aboutRouter = require('./routes/about');
app.use("/api/about", aboutRouter);

// Import and init images route
const imagesRouter = require('./routes/images');
app.use("/api/images", imagesRouter);

// Import and init skills route
const skillsRouter = require("./routes/skills");
app.use("/api/skills", skillsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  status = err.status || 500;
  res.status(status).send(err.message);
});

// Start database connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.error("Cannot connect to the database!", err);
    process.exit();
  });

// Log start of server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});