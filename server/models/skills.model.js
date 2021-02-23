module.exports = mongoose => {
    const Skills = mongoose.model(
      "Skills",
      mongoose.Schema(
        {
            skills: {
                type: Array,
                require: true
            }
        },
        { timestamps: true }
      )
    );
  
    return Skills;
  };