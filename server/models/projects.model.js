module.exports = mongoose => {
    const Projects = mongoose.model(
      "Projects",
      mongoose.Schema(
        {
          title: String,
          description: String,
          image: Buffer,
        },
        { timestamps: true }
      )
    );
  
    return Projects;
  };