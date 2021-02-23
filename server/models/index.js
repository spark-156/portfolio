const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.about = require("./about.model.js")(mongoose);
db.projects = require("./projects.model.js")(mongoose);
db.images = require("./images.model.js")(mongoose);

module.exports = db;
