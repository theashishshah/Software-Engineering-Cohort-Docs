import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: [true, 'Username is required.'],
            lowercase: true,
            minlength: [3, 'Username must be at least 3 characters long.'],
            maxlength: [50, 'Username cannot exceed 50 characters.'],
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'Email is required.'],
            // match: [/\S+@\S+\.\S+/, 'Invalid email format'],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            trim: true,
            required: [true, 'Password is required.'],
            minlength: [8, 'Password must be at least 8 characters long.'],
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: ['User', 'Teacher', 'TA', 'Adming'],
            default: 'User',
        },
        resetPasswordToken: {
            type: String,
        },
        verificationToken: {
            type: String,
        },
        resetPasswordExpires: {
            type: String,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
