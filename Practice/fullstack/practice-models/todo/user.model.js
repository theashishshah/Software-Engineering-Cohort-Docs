import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema(
    /** Business requirement
     *  1. username
     *  2. email
     *  3. full name
     *  4. password
     */
    {
        username: {
            type: String,
            required: [true, 'Username is required.'],
            unique: true,
            lowercase: true,
            trim: true,
            
        },

        email: {
            type: String,
            required: [true, "Email is required."],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/\S+@\S+\.\S+/, "Invalid email format"]
        },

        password: {
            type: String,
            required: [true, "Password is required."],
            minlength: [8, "Password must be at least 8 characters long."],
            maxlength: [20, "Password is too long."]

        },
    },
    { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
