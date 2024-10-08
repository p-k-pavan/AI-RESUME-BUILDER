import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import resumeRouter from "./routers/resume.route.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));

mongoose.connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

app.use("/api/resume", resumeRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
