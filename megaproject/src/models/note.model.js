import mongoose, { Schema } from "mongoose";

const projectNoteSchema = new Schema(
    {
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: [true, "Project ID is required"],
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User ID is required"],
        },
        content: {
            type: String,
            required: [true, "Note content is required."],
            trim: true,
            minLength: [1, "Note content must be at least 1 character"],
            maxLength: [10000, "Note content cannot exceed 10000 characters"],
        },
    },
    { timestamps: true },
);

export const Note = mongoose.model("Note", projectNoteSchema);

/*
import mongoose, { Schema } from "mongoose";

const projectNoteSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: [true, "Project ID is required"],
      validate: {
        async validator(value) {
          try {
            const project = await mongoose.model("Project").findById(value);
            return !!project; // Returns true if project exists, false otherwise
          } catch (error) {
            return false;
          }
        },
        message: "Project with this ID does not exist",
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      validate: {
        async validator(value) {
          try {
            const user = await mongoose.model("User").findById(value);
            return !!user;
          } catch (error) {
            return false;
          }
        },
        message: "User with this ID does not exist",
      },
    },
    content: {
      type: String,
      required: [true, "Note content is required"],
      trim: true, // Remove leading and trailing whitespace
      minlength: [1, "Note content must be at least 1 character"],
      maxlength: [10000, "Note content cannot exceed 10000 characters"], // Adjust as needed
    },
  },
  { timestamps: true },
);

export const Note = mongoose.model("Note", projectNoteSchema);
*/
