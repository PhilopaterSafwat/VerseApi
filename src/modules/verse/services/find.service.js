import verseModel from "../../../DB/model/verse.model.js";

export const verseNotAccept = async (req, res, next) => {
    try {
        const verses = await verseModel.find({ isAccepted: false })
        return res.status(200).json({ verses });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
}
export const verseAccepted = async (req, res, next) => {
    try {
        const verses = await verseModel.find({ isAccepted: true })
        return res.status(200).json({ verses });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
}