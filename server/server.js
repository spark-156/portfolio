const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Import and init projects route
const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on port 4000");
});