module.exports = mongoose => {
    const Admin = mongoose.model(
        "Admin",
        mongoose.Schema(
            {
                email: { type: String, required: true, unique: true },
                password: { type: String, required: true}
            },
            { timestamps: true }
        )
    );
    Admin.pre('save', function(next) {
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
    return Admin;
};