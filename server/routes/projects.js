const express = require('express');
const mongoose = require("mongoose");
const ProjectsModel = mongoose.model("Projects");

const projectsRouter = express.Router();

// Hello World route
projectsRouter.get('/all', async (req, res, next) => {
    try {
        const projects = await ProjectsModel.find().select('-image');
        if (!projects.length > 0) return res.status(404).send("No projects found");
        res.status(200).send(projects);
    } catch {
        const error = new Error("Could not get all projects");
        next(error);
    }
});

projectsRouter.get('/image/:id', async (req, res, next) => {
    try {
        console.log(req.params.id)
        const project = await ProjectsModel.findById(req.params.id);
        if (!project > 0) return res.status(404).send("no image found");
        res.setHeader("content-type", project.image.mimetype);
        res.status(200).send(project.image.data);
    } catch {
        next(new Error("Could not get image"));
    }
});

projectsRouter.get('/latest', (req, res, next) => {

});

projectsRouter.post('/admin/new', async (req, res, next) => {
    try {
        console.log(req.files.image);
        const { title, description, company, startDate, endDate } =  req.body;
        if (!title || !description || !company || !startDate || !req.files || Object.keys(req.files).length === 0) {
            const error = new Error("Please send all required fields")
            error.status = 400; // Bad request
            return next(error);
        }
        if (req.files.image.truncated) {
            const error = new Error("Image filesize too big");
            error.status = 400;
            return next(error);
        }
        if (req.files.image.mimetype in ["image/jpg", "image/jpeg", "image/png"]) {
            const error = new Error(`Mimetype is not in ["jpg", "jpeg", "png"]`);
            error.status = 400;
            return next(error);
        }
        let project = new ProjectsModel({
            title, description, company, startDate, endDate 
        });
        console.log(project);

        const { data, mimetype } = req.files.image;
        project.image.data = data;
        project.image.mimetype = mimetype;
        await project.save();
        res.status(201).json({ "id": project._id });
    } catch {
        next(new Error("Could not create new project"));
    }
})

projectsRouter.put('/admin/id/:id', (req, res, next) => {

})

projectsRouter.delete('/admin/id/:id', (req, res, next) => {

})

module.exports = projectsRouter;
