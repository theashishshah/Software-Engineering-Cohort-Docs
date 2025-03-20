import express from "express"
import { signup } from "../controllers/auth.controller.js"
const userRouter = express.Router()

userRouter.get("/signup", signup)

export default userRouter