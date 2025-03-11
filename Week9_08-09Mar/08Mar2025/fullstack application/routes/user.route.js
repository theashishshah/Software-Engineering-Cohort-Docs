import express from "express"
import { login, registerUser, verify } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser)
router.get("/verify/:verificationToken", verify)
router.post("/login", login)

export default router;