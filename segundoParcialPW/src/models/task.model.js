import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      required: true,
    },
    priority: {
      type: Number,
      min: 1,
      max: 5,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
