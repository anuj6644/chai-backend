 // require('dotenv').config({path: './env'})
 
 import dotenv from 'dotenv'
 import connectDB from './db/db.js'

 dotenv.config({
    path: './env'
 })

 connectDB()
 .then(() => {
     app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is runnning on ${process.env.PORT}`);
     })
 })
 .catch((err) => {
     console.log("MONGO db connnection failed !!",err);
 })













/*
import mongoose, { Mongoose } from "mongoose";
import express from express;

import {DB_NAME} from "./constants";

const app =express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("ERRR: ",error);
            throw error
        })

        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ",error)
        throw err
    }

    
})()

*/