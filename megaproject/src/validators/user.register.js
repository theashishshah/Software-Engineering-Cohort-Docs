import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required.")
            .isEmail()
            .withMessage("Please provide valid email address."),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required.")
            .isLength({ max: 12 })
            .withMessage("Username can not exceed 12 characters.")
            .isLength({ min: 3 })
            .withMessage("Username should be at least of 3 characters."),
    ];
};

const userLoginValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Please provide email address.")
            .isEmail()
            .withMessage("Please provide valid email address."),
        body("password").trim().notEmpty().withMessage("Please provide password."),
    ];
};
export { userRegistrationValidator, userLoginValidator };
