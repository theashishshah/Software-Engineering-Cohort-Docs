import mongoose from 'mongoose';
import { User } from '../models/user.model.js';

async function signup(req, res) {
    /** Logic
     * get the data from the user
     * validate the data
     * check if already exist or not
     * if else statement
     * create the user
     * save the user
     */

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required.',
            success: false,
        });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(401).json({
                message: 'User already exists.',
                success: false,
            });
        }

        const user = await User.create({
            username,
            email,
            password,
        });

        console.log(user);

        if (!user) {
            return res.status(400).json({
                message: 'User not registered, try again.',
                success: false,
            });
        }

        // console.log(user)
        await user.save();

        res.status(400).json({
            message: 'User registered successfuly.',
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            message: 'User not registerd, try again.',
            error,
            success: false,
        });
    }
}

async function login(req, res) {
    /** Requirements
     *  get the data from the user
     *  check the data
     *  check user exists or not
     *  if exist, route to profile or home page
     */

    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({
            message: 'All fields are required.',
            error,
            success: false,
        });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: 'User does not exists, create an account.',
                error,
                success: false,
            });
        }

        res.status(200).json({
            message: 'User login successfuly.',
            user,
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            message: 'There is problem in login, try again.',
            error,
            success: false,
        });
    }
}

async function verify() {}

async function logout() {}

async function profile(params) {}

async function resetPassword(req, res) {
    
}

export { signup, login, verify, logout, profile, resetPassword };
