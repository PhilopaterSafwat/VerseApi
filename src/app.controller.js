import connectDB from "./DB/db.conction.js";
import authController from "./modules/auth/auth.controller.js"
import userController from "./modules/user/user.controller.js"
import verseController from "./modules/verse/verse.controller.js"
import cors from 'cors'

connectDB()



const bootstrap = (app, express) => {
    app.use(express.json())
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }));

    app.get('/', (req, res, next) => {
        res.send('Hello World!');
    });
    app.use("/auth", authController)
    app.use("/user", userController)
    app.use("/verse", verseController)
}

export default bootstrap