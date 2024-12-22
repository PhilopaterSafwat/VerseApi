import userModel from "../../../DB/model/user.model.js";
import jwt from 'jsonwebtoken'


export const signup = async (req, res, next) => {
    const { userName, email, password } = req.body
    try {
        console.log(userName, email, password);
        // const user = new userModel({ userName, email, password })
        // await user.save()
        const user = await userModel.create({ userName, email, password })
        return res.status(201).json({ messege: "signup Done", user })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ messege: "error at signup page", error })
    }
}
export const Login = async (req, res, next) => {
    try {
        const user = await userModel.findOne(req.body);
        const token = jwt.sign({ id: user._id }, `felo2000`, { expiresIn: `1h` })
        return res.status(200).json({ token })
    } catch (error) {
        return res.status(500).json({ messege: "Error at login" })
    }

}