const express = require('express');
const bcrypt = require('bcrypt');

const mongoose = require("mongoose");
const AdminModel = mongoose.model("Admin");

AdminModel.schema.pre('save', function(next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const document = this;
      bcrypt.hash(document.password, saltRounds,
        function(err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });

const adminRouter = express.Router();

adminRouter.post('/register', (req, res, next) => {
    const { email, password} = req.body;
    const admin = new AdminModel({ email, password});
    console.log("saving admin");
    admin.save(err => {
        if (err) {
            res.status(500).send("Error registering new admin");
        } else {
            res.status(200).send("Admin registered");
        }
    });
});

module.exports = adminRouter;