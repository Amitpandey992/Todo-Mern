import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const connectDb = () => {
    mongoose
        .connect(process.env.URL)
        .then(() => console.log('DB connected successfully'))
        .catch(error => console.log(error));
}