// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path : './env'
})

connectDB()

























// import dotenv from 'load_dotenv'
// import express from 'express'

// const app = express()


// load_dotenv()


// // the semicolon is best practice when you start a iife 
// ;( async ()=>{

//     try {
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         application.on()
//         app.on("error",(error)=>{
//             console.log("Error the db in express");
//             throw error
            
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app listen on port ${process.env.PORT}`);
            

//         })

        
//     } catch (error) {

//         console.error("ERROR",error)
//         throw error
        
//     }

// })()