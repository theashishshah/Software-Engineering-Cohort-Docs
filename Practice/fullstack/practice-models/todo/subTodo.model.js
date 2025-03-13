import mongoose from "mongoose";
import { Schema } from "mongoose";

const subTodoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        },
        parentTodo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo",
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        subTasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTask"
        }],
    }, {timestamps: true})

const SubTodo = mongoose.model("SubTodo", subTodoSchema)