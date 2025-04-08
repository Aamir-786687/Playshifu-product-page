import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config()

const app=express();
app.use(express.json());
// app.use('/productPage', userRoute)
app.use(cors());

mongoose.connect("mongodb+srv://aamir557ahmad:nCxQwOGCAjM1kSLb@cluster0.ccxf9bs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Playshifu-DB")
.then(console.log("MongoDb connected"))
.catch((err)=>{
    console.log("err:", err)
})


app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
});
