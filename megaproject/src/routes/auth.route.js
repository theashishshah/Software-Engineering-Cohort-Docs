import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { validateMiddeware } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator } from "../validators/user.register.js";

const router = Router();

router.route("/register").get(userRegistrationValidator(), validateMiddeware, registerUser);

export default router;
