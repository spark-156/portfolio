module.exports = mongoose => {
    const Admin = mongoose.model(
        "Admin",
        mongoose.Schema(
            {
                username: {
                    type: String,
                    require: true
                },
                password: {
                    type: String,
                    require: true
                }
            },
            { timestamps: true }
        )
    );
    return Admin;
};