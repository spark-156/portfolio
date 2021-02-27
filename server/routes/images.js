const express = require('express');
const mongoose = require("mongoose");
const ImagesModel = mongoose.model("Images");

const basicAuth = require('../authorization.js');

const imageRouter = express.Router();

const validateImage = (req, res, next) => {
    if (!req.files.image || Object.keys(req.files).length === 0) {
        return res.status(400).send("Please attach an image") 
    }
    if (req.files.image.truncated) {
        return res.status(400).send("File too big");
    }
    if (req.files.image.mimetype in ["image/jpg", "image/jpeg", "image/png"]) {
        return res.status(400).send(`Mimetype is not in ["jpg", "jpeg", "png"]`);
    }
    next();
};

imageRouter.get('/all', async (req, res, next) => {
    try {
        const images = await ImagesModel.find().select('-image').sort({$natural:-1});
        res.status(200).send(images);
    } catch {
        next(new Error("Could not get all images"));
    }
});

imageRouter.get('/latest', async (req, res, next) => {
    try {
        const foundImage = await ImagesModel.find().limit(1).sort({$natural:-1});
        if (!foundImage) return res.status(404).send("Could not find latest image");
        res.setHeader("content-type", foundImage[0].image.mimetype);
        res.status(200).send(foundImage[0].image.data)
    } catch {
        next(new Error("Could not retreive image due to an internal server error"));
    }
});

imageRouter.get('/id/:id', async (req, res, next) => {
    try {
        const foundImage = await ImagesModel.findById(req.params.id);
        if (!foundImage) return res.status(404).send();
        res.setHeader("content-type", foundImage.image.mimetype);
        res.status(200).send(foundImage.image.data)
    } catch {
        next(new Error("Could not retreive image due to an internal server error"))
    }
});

imageRouter.post('/new', basicAuth, validateImage, async (req, res, next) => {
    try {
        let image = new ImagesModel({
            image: {
                data: req.files.image.data,
                mimetype: req.files.image.mimetype
            }, 
            alt: req.body.alt,
        })
        await image.save();
        res.status(201).send({"_id": image._id});
    } catch {
        next(new Error("Could not upload new image"));
    }
});

imageRouter.delete('/id/:id', basicAuth, async (req, res, next) => {
    try {
        await ImagesModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ id: req.params.id });
    } catch(error) {
        next(new Error(error));
    }
});

imageRouter.put('/id/:id', basicAuth, validateImage, async (req, res, next) => {
    // TODO make it so you can update the alt only too
    try {
        const image = {
            image: {
                data: req.files.image.data,
                mimetype: req.files.image.mimetype
            },
            alt: req.body.alt
        };
        await ImagesModel.findByIdAndUpdate(req.params.id, image, { useFindAndModify: false });
        res.status(200).send();
    } catch {
        next(new Error("Could not update image"));
    }
});

module.exports = imageRouter;