import verseModel from "../../../DB/model/verse.model.js";

export const addVerse = async (req, res, next) => {
    const { verse } = req.body
    try {
        const verse = await verseModel.create( req.body )
        return res.status(200).json({ verse });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
}