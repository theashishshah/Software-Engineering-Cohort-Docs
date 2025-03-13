import User from '../models/User.model.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
    // res.send('User registered succussfuly.');

    /** Get the data from user ✅
     *  Check the data ✅
     *  Check if user already exist or not
     *  if exists then send msg
     *  create a user in database
     *  create a verification token
     *  save token in database
     *  send token as email to user
     *  send success status to user
     */
    // const userName = req.params.name; // Access the 'name' parameter
    // console.log(userName);
    // res.send(`Registering user: ${userName}`);

    const { name, email, password } = req.body;
    console.log(name, email, password);

    if (!name || !email || !password) {
        // console.log("all the data fields are required.")
        return res.status(400).json({
            message: `All fields are required.`,
        });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists.',
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        });
        console.log(user);
        if (!user) {
            return res.status(400).json({
                message: 'User not registered.',
            });
        }

        const verificationToken = crypto.randomBytes(32).toString('hex');
        console.log(verificationToken);

        user.verificationToken = verificationToken;
        await user.save();

        // send mail
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"Ashish Shah 👻" ${process.env.MAILTRAP_SENDEREMAIL}`, // sender address
            to: user.email, // list of receivers
            subject: 'Verify your email address ✔', // Subject line
            text: `Please click link to verify your account: ${process.env.BASE_URI}/api/v1/users/verify?${user.verificationToken}`, // plain text body
            html: '<b>Hello world?</b>', // html body
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            message: 'User registered successfuly',
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            message: 'User not registerd, try again.',
            error,
            success: false,
        });
    }

    return res.status(200).json({
        message: 'success',
    });
};

const verify = async (req, res) => {
    /**    Logic
     * get token from the url
     * validate token
     * find user basedon token
     * get verification token from the database
     * if else
     * set isVerified to true
     * remove verification token
     * save
     * return response
     */

    const { verificationToken } = req.params;
    console.log(verificationToken);
    if (!verificationToken) {
        return res.status(400).json({
            message: 'Invalid token',
            success: false,
        });
    }

    try {
        const user = await User.findOne({ verificationToken });
        if (!user) {
            return res.status(400).json({
                message: 'Invalid token.',
                success: false,
            });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();
    } catch (error) {
        res.status(400).json({
            message: 'User not able to verify, try again.',
            error,
            success: false,
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'All fields are required.',
            success: false,
        });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({
                message: 'User does not exist with this email.',
                success: false,
            });
        }

        // const hashedPassword = bcrypt.hash(password, 10)
        // if(hashedPassword !== user.password){
        //     res.status(400).json({
        //         message: 'Incorrect password.',
        //         success: false,
        //     });
        // }

        if(!user.isVerified){
            res.status(400).json({
                message: 'Please verify your email.',
                success: false,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        console.log(isMatch);

        if (!isMatch) {
            res.status(400).json({
                message: 'Incorrect password.',
                success: false,
            });
        }

        const jwtToken = jwt.sign({ id: user._id }, 'shhhh', {
            expiresIn: '24h',
        });

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        }
        res.cookie("token", jwtToken, cookieOptions)

        res.status(200).json({
            message: "User login successfuly.",
            success: true, 
            jwtToken,
            user: {
                id: user._id,
                mail: user.email,
                role: user.role,
                name: user.name
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'Problme during login.',
            error,
            success: false,
        });
    }
};
export { registerUser, verify, login };
