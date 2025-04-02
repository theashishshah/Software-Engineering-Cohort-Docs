import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    registrationValidation(req.body)
});

/**
 *  // ways to validate
    if (!email || !password) {
    }
    if(!password){}

    const isValidate = (password) =>{
        
    }
 */
