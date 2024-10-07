import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    console.log("Connect to MongoDB");
})
.catch((err)=>{
    console.log(err.message);
})


app.listen(5222,()=>{
    console.log("Api listening at port 5222")
})