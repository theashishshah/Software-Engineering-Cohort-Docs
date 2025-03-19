import express from "express"
import { registerUser, verify, login, getProfile, logout, resetPassword, forgotPassword } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/register", registerUser)
router.get("/verify/:verificationToken", verify)
router.get("/login", login)
router.get("/logout", isLoggedIn, logout)
router.get("/profile",isLoggedIn ,getProfile)
router.post("/resetpassword",isLoggedIn,resetPassword)
router.post("/forgotpassword", forgotPassword)

export default router;