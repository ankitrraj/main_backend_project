import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async ()=>{
    try {

        const connectionInsstaance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MONGODB connected  DB HODT ${connectionInsstaance.connection.host}`);// mongo db url fetch which host i connect 
        
        
        
    } catch (error) {
        console.log("mongodb connection failed",error);
        process.exit(1)
        
        
    }
}

export default connectDB