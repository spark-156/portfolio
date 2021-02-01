const express = require('express');
const mongoose = require("mongoose");
const AboutModel = mongoose.model("About");

const aboutRouter = express.Router();

// Middleware for finding about with certain id
const findById = async (req, res, next) => {
    try {
        console.log("trying to find ID", req.params.id)
        const about = await AboutModel.find({ "_id": req.params.id });
        if (about.length > 0) {
            req.about = about;
            return next();
        }
        res.status(404).send();
    } catch {
        let error = new Error("Could not find an object by given ID.");
        error.status = 404;
        return next(error);
    }
};

// API endpoints
aboutRouter.get('/all', async (req, res, next) => {
    // Get all about descriptions
    try {
        const about = await AboutModel.find();
        if (!about) return res.status(404).send()
        res.status(200).send(about);
    } catch {
        let error = new Error("Could not get all about documents from database");
        return next(error);
    }
})

aboutRouter.get('/id/:id', findById, (req, res, next) => {
    // Get a specific about by ID
    res.status(200).send(req.about);
})

aboutRouter.get('/latest', async (req, res, next) => {
    // Get latest ADDED about description 
    try {
        const about = await AboutModel.find().limit(1).sort({$natural:-1});
        if (!about) return res.status(404).send()
        res.status(200).send(about);
    } catch {
        let error = new Error("Could not get latest about document from database");
        return next(error);
    }
})

aboutRouter.post('/admin/new', async (req, res, next) => {
    // Add a new about description 
    try {
        const { name, description } = req.body;
        if (!name || !description) return res.status(400).send("Please send a name and a description.");
        let about = new AboutModel({
            name,
            description
        });
        await about.save();
        res.status(201).json({"id": about._id});
    } catch {
        let error = new Error("Could not create new About document in database");
        return next(error);
    }
})

aboutRouter.put("/admin/id/:id", findById, async (req, res, next) => {
    // Update a specific about description 
    try {
        if (!req.body.name || !req.body.description) {
            res.status(400).send("Please send a 'name' and a 'description' field of string types")
        }
        const about = await AboutModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        if (!about) {
            const error = new Error(`Cannot find and update About object with id:${req.params.id}`);
            error.status = 404;
            return next(error) 
        }
        res.status(200).send()
    } catch {
        next(new Error("Could not update About object"));
    }
})

aboutRouter.delete("/admin/id/:id", findById, async (req, res, next) => {
    try {
        await AboutModel.findByIdAndDelete(req.params.id);
        res.status(200).send(req.params.id);
    } catch {
        next(new Error("Could not delete Object"));
    }
})

module.exports = aboutRouter;