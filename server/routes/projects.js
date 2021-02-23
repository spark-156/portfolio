const express = require('express');
const mongoose = require("mongoose");
const ProjectsModel = mongoose.model("Projects");

const basicAuth = require('../authorization.js');

const projectsRouter = express.Router();

projectsRouter.use('/id/:id', async (req, res, next) => {
    try {
        const project = await ProjectsModel.findById(req.params.id);
        if (!project > 0) return res.status(404).send("No project found");
        req.foundProject = project;
        next();
    } catch {
        next(new Error("Could not find project"));
    }
});

const requiredProjectParams = (req, res, next) => {
    // TODO Fix up this ugly middleware
    try{
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

        const { data, mimetype } = req.files.image;
        project.image.data = data;
        project.image.mimetype = mimetype;
        req.newProject = project;
        return next();
    } catch {
        const error = new Error("Not all required params were satisfied");
        error.status = 400;
        next(error);
    }
};

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

projectsRouter.get('/id/:id', async (req, res, next) => {
    try {
        res.status(200).send(req.foundProject);
    } catch {
        next(new Error("Could not get project"))
    }
})

projectsRouter.get('/id/:id/image', async (req, res, next) => {
    try {
        res.setHeader("content-type", req.foundProject.image.mimetype);
        res.status(200).send(req.foundProject.image.data);
    } catch {
        next(new Error("Could not get image"));
    }
});

projectsRouter.get('/latest', async (req, res, next) => {
    try {
        const project = await ProjectsModel.find().limit(1).sort({$natural:-1}).select('-image');
        if (!project > 0) return res.status(404).send("no project found");
        res.status(200).send(project);
    } catch {
        next(new Error("Could not get project"));
    }
});

projectsRouter.post('/new', basicAuth, requiredProjectParams, async (req, res, next) => {
    try {
        const project = new ProjectsModel(req.newProject);
        await project.save();
        res.status(201).json({ "id": project._id });
    } catch {
        next(new Error("Could not create new project"));
    }
});

projectsRouter.put('/id/:id', basicAuth, async (req, res, next) => {
    // TODO Fix this api call!
    try {
        const project = req.body;
        if (req.files.image) {
            const { data, mimetype } = req.files.image;
            project.image.data = data;
            project.image.mimetype = mimetype;
        }
        const updatedProject = await ProjectsModel.findByIdAndUpdate(req.params.id, project, { useFindAndModify: false })
        if (!updatedProject) {
            const error = new Error(`Cannot find and update About object with id:${req.params.id}`);
            error.status = 404;
            return next(error) 
        }
        res.status(200).send();
    } catch {
        next(new Error("Could not update project"));
    }
});

projectsRouter.delete('/id/:id', basicAuth, async (req, res, next) => {
    try {
        await ProjectsModel.findByIdAndDelete(req.params.id);
        res.status(200).send()
    } catch {
        next(new Error("Could not delete project"));
    }
});

module.exports = projectsRouter;
