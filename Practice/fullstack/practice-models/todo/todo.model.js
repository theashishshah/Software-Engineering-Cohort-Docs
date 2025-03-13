import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: [
                true,
                "Title is required.",
            ],
            trim: true
        },
        description: {
            type: String,
            default: "",
            trim: true
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        subTodos: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            },
        ],
    },
    { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
