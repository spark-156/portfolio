module.exports = mongoose => {
    const About = mongoose.model(
      "About",
      mongoose.Schema(
        {
          name: {
              type: String,
              require: true,
              minlength: 3
          },
          description: {
              type: String,
              require: true,
              minlength: 3
          },
        },
        { timestamps: true }
      )
    );
  
    return About;
  };