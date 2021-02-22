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
  
    return Admin;
};