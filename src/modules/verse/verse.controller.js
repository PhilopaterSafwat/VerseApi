import { Router } from "express";
import * as insertVerse from "./services/insert.service.js"
import * as findVerse from "./services/find.service.js"
import * as deleteVerse from "./services/delete.service.js"
import * as updateVerse from "./services/update.service.js"


const router = Router()

router.post("/addVerse", insertVerse.addVerse)
router.get("/notAccept", findVerse.verseNotAccept)
router.get("/Accepted", findVerse.verseAccepted)
router.delete("/deleteByid", deleteVerse.deleteById)
router.put("/UpdateByid", updateVerse.AcceptVerse)

export default router