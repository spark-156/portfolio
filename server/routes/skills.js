const express = require('express');
const mongoose = require("mongoose");
const SkillsModel = mongoose.model("Skills");

const basicAuth = require('../authorization.js');

const skillsRouter = express.Router();

skillsRouter.use('/id/:id', async (req, res, next) => {
    try {
        const skill = await SkillsModel.findById(req.params.id);
        if (!skill > 0) return res.status(404).send("No skill found for this id");
        req.foundSkill = skill;
        next();
    } catch {
        next(new Error("could not get specific skills by id"));
    }
});

skillsRouter.get('/id/:id', async (req, res, next) => {
    // Get a specific skills by id
    try {
        res.send(req.foundSkill);
    } catch {
        next(new Error("could not get specific skills by id"));
    }
});

skillsRouter.get('/latest', async (req, res, next) => {
    try {
        const skill = await SkillsModel.find().limit(1).sort({$natural:-1});
        if (!skill > 0) return res.status(404).send("No skill found for this id");
        res.send(skill);
    } catch {
        next(new Error("Could not get latest skills"));
    }
});

skillsRouter.get('/all', async (req, res, next) => {
    try {
        const skills = await SkillsModel.find().sort({$natural:-1});
        if (!skills > 0) return res.status(404).send("No skills found");
        res.send(skills);
    } catch {
        next(new Error("Could not get all skills"));
    }
});

skillsRouter.post('/new', basicAuth, async (req, res, next) => {
    try {

        const { skills } = req.body;
        console.log(skills);
        if (!skills.length > 0) {return res.status(400).send("No skills were sent in the request body")};
        let skillsNew = new SkillsModel({
            skills
        });
        await skillsNew.save()
        res.status(201).json({ id: skillsNew._id })
    } catch {
        next(new Error("Could not create new skills object"));
    }
});

skillsRouter.put('/id/:id', basicAuth, async (req, res, next) => {
    try {
        const skills = {
            skills: req.body.skills
        };
        await SkillsModel.findByIdAndUpdate(req.params.id, skills, { useFindAndModify: false });
        res.status(200).send({ id: req.params.id });
    } catch {
        next(new Error("Could not update specific skills object"))
    }
});

skillsRouter.delete('/id/:id', basicAuth, async (req, res, next) => {
    try {
        await SkillsModel.findByIdAndDelete(req.params.id);
        res.send({ id: req.params.id });
    } catch {
        next(new Error("Could not delete skills object"));
    }
});

module.exports = skillsRouter;