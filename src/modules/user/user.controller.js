import { Router } from "express";
import * as findUser from "./services/find.service.js"

const router = Router()
router.get("/findById", findUser.userById)

export default router