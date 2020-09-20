import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();


const host = process.env.MONGO_HOST || "localhost";
const username = process.env.MONGO_USERNAME || "test";
const password = process.env.MONGO_PASSWORD || "test";
const db = process.env.MONGO_DB || "test";
const mongo_port = process.env.MONGO_PORT || 27017;

let mongu_url=`mongodb://${username}:${password}@${host}:${mongo_port}/${db}`
console.log("mongo url: ",mongu_url)

const mongoClient= mongoose.connect(mongu_url)


export default  mongoClient