import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            required: true
        },
    }, { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;