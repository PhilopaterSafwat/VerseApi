import verseModel from "../../../DB/model/verse.model.js";

export const AcceptVerse = async (req, res, next) => {
    const { id } = req.body
    try {
        const verse = await verseModel.findByIdAndUpdate(id, { isAccepted: true })
        return res.status(201).json({ message: "updated" });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
}