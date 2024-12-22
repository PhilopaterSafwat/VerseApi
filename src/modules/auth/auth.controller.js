import { Router } from "express";
import * as registerationServices from "./services/registeration.service.js"

const router = Router()

router.post("/signup", registerationServices.signup)
router.post("/login", registerationServices.Login)

export default router