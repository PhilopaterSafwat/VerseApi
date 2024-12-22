import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

const userModel = mongoose.models.User || model("User", userSchema)

export default userModel