module.exports = mongoose => {
    const Projects = mongoose.model(
      "Projects",
      mongoose.Schema(
        {
          title: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 255
          },
          description: {
            type: String,
            require: true,
            minlength: 3,
          },
          image: {
            data: Buffer,
            mimetype: String
          },
          startDate: {
            type: Date,
            require: true
          },
          endDate: {
            type: Date,
            require: false
          },
          company: {
            type: String,
            require: true,
            maxlength: 255
          }
        },
        { timestamps: true }
      )
    );
  
    return Projects;
  };