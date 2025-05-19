import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { app } from "./app.js";
import dbConnect from "./db/index.js";

dbConnect()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`the server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("db connection failed!!!",err)
});

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from 'express';

// const app=express();
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on(error,(error)=>{
//             console.log("error",error);
//             throw error;
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log("the process is running just fine")
//         })
//     } catch (error) {
//         console.error("ERROR", error);
//         throw error;
//     }
// })()
