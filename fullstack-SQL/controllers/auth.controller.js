import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

export const signup = async (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
        console.log('All fields are required.');
        return res.status(400).json({
            success: false,
            message: 'Please provide all the fields.',
        });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return res.status(401).json({
                success: false,
                message: 'User already exist.',
            });
        }
        // hash pass
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                phone,
                verificationToken,
                phone,
            },
        });

        //TODO: send mail functionality from other code file
    } catch (error) {
        return res.status(401).json({
            success: false,
            error,
            message: 'Internal server error.',
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({
            success: false,
            message: 'All fields are required.',
        });
    }

    // check if user exist from this email or not

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Wrong email, please provide valid email address.',
            });
        }

        //check password
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch){
            return res.status(401).json({
                success: false,
                message: 'Wrong password, please provide correct password.',
            });
        }
        
        // create user login session
        const jwtToken = jwt.sign(
            {id: user.id, role: user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "24h"}
        )


        const cookieOptions = {
            httpOnly: true
        }
        res.cookie("token", jwtToken, cookieOptions)

        // email and password bhi correct then send 
        res.status(200).json({
            success: true,
            message: "User login successfuly",
           userdata: {
                id: user.id, name: user.name,
                email: user.email 
            }
        })

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Login failed.',
            error,
        });
    }
};
