import mongoose, { modelNames, mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "teacher", "TA", "admin"],
        default: "user"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)
export default User