import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            maxlength: [10, "Username is too long."],
            minlength: [1, "Username can be of 1 character."],
            lowercase: true,
        },
        email:{
            type: String,
            trim: true,
            required: [true, "Email is required."],
            unique: [true, "Already account exist with this email,Try another"],
            lowercase: true,
            match: [/\S+@\S+\.\S+/, "Invalid email format"],
        },
        password: {
            type: String,
            trim: true,
            required: true,
            minlength: [8, "At least 8 characters required."],
            maxlength: [20, "Password is too long."]
        }
    }, { timestamps: true });

export const User = mongoose.model("User", userSchema)