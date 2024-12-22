import mongoose, { model, Schema } from "mongoose";

const verseSchema = new Schema({
    verse: {
        type: String,
        required: true
    },
    isAccepted: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true })

const verseModel = mongoose.models.verse || model("verse", verseSchema)

export default verseModel