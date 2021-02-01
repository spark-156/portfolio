const express = require('express');
const mongoose = require("mongoose");
const ProjectsModel = mongoose.model("Projects");

const projectsRouter = express.Router();

// Hello World route
projectsRouter.get('/all', async (req, res, next) => {
    try {
        const projects = await ProjectsModel.find();
        if (!projects.length > 0) {
            return res.status(404).send("No projects found")
        }
        res.status(200).send(projects);
    } catch {
        const error = new Error("Could not get all projects");
        next(error);
    }
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
