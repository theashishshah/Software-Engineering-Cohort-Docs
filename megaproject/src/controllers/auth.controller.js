import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

   // validation
});

export const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

export const logoutUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

export const verifyEmail = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

export const resentVerificationEmail = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

export const forgotPasswordRequest = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

export const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

export const getCurrentUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // validation
});

/**
 *  // ways to validate
    if (!email || !password) {
    }
    if(!password){}

    const isValidate = (password) =>{
        
    }
 */
