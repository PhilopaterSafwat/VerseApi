import mongoose from "mongoose";
import verseModel from "../../../DB/model/verse.model.js";

export const deleteById = async (req, res, next) => {
    const { id } = req.body
    try {
        const verse = await verseModel.findByIdAndDelete( id )
        return res.status(201).json({ message: "deleted" });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
}