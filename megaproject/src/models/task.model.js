import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatus, TaskStatusEnum } from "../constants/userRolesConstants.js";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required for task."],
            trim: true,
            maxLength: 30,
            minLength: 1,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        assignedBy: {
            Type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: AvailableTaskStatus,
            default: TaskStatusEnum.TODO
        },
        attachments: {
            type: [{
                url: String,
                mimetype: String,
                size: Number
            }],
            default: []
        },
    },
    { timestamps: true },
);

export const Task = mongoose.model("Task", taskSchema);
