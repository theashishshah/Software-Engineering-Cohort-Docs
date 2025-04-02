import { APIError } from "../utils/APIError.js";
import { validationResult } from "express-validator";

const validateMiddeware = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
    }
    // console.log(errors)
    // console.log(typeof errors)
    const extractedErrors = [];
    errors.array.map((err) =>
        extractedErrors.push({
            [err.path]: err.msg,
        }),
    );

    throw new APIError(402, "Wrong credentials", extractedErrors, false)
};

export { validateMiddeware };
