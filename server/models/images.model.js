module.exports = mongoose => {
    const Images = mongoose.model(
        "Images",
        mongoose.Schema(
            {
                alt: {
                    type: String,
                    require: true
                },
                image: {
                    data: Buffer,
                    mimetype: String
                }
            },
            { timestamps: true }
        )
    );
    return Images;
};