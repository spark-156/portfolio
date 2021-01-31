const express = require('express');
const app = express();

const aboutRouter = express.Router();

aboutRouter.get('/', (req, res, next) => {
    res.json({text: 'Ambitious, Full Stack Developer, Avid music listener', name: "Luca Bergman"});
})

module.exports = aboutRouter;