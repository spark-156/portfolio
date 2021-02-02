module.exports = mongoose => {
    const Admin = mongoose.model(
        "Admin",
        mongoose.Schema(
            {
                username: String,
                password: String
            },
            { timestamps: true }
        )
    );
    return Admin;
};