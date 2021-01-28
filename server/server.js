const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.port || 5000;

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Import and init projects route
const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  status = err.status || 500;

});

// listen for requests
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});