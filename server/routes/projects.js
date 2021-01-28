const express = require('express');
const app = express();

const projectsRouter = express.Router();

// Hello World route
projectsRouter.get('/helloworld', (req, res, next) => {
    res.json({"message": "Hello World!"});
});

projectsRouter.get('/express_backend', (req, res, next) => {
    res.json({"message": "express_backend"});
});



module.exports = projectsRouter;
