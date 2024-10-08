import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model("resume", resumeSchema);

export default Resume;
