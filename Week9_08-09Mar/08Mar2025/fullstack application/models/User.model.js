import mongoose, { modelNames, mongo } from "mongoose";
import bcryptjs from "bcryptjs"

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

userSchema.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = await bcryptjs.hash(this.password, 10)
    }
    next()
})

// userSchema.post("save", async function (next) {
//     next()
// })

const User = mongoose.model("User", userSchema)
export default User