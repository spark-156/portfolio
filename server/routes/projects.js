const express = require('express');
const app = express();

const projectsRouter = express.Router();

// Hello World route
projectsRouter.get('/all', (req, res, next) => {

});

projectsRouter.get('/latest', (req, res, next) => {

});

projectsRouter.post('/admin/new', (req, res, next) => {

})

projectsRouter.put('/admin/id/:id', (req, res, next) => {

})

projectsRouter.delete('/admin/id/:id', (req, res, next) => {

})
module.exports = projectsRouter;
