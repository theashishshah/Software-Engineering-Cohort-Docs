import mongoose, {Schema} from "mongoose";

const tasksSchema = new Schema(
    {
        complete: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            required: true,
            max: [100, "100 Characters are allowed only."],
            trim: true
        },
        parentSubTodo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo",
            required: true
        }
    }, {timestamps: true})

export const SubTask = mongoose.model("SubTask", tasksSchema)