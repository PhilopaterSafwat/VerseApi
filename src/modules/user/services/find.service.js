import userModel from "../../../DB/model/user.model.js";
import jwt from "jsonwebtoken";

export const userById = async (req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(400).json({ message: "No token provided" });
    }

    try {

        const { id } = jwt.verify(authorization, "felo2000");

        const user = await userModel.findById(id);




        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User found"});
    } catch (error) {

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        }

        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
};