import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoClient from './mongoClient'
import './models/metrics'
import "regenerator-runtime/runtime.js";
import router from "./routes";
import metrics from './metricsList'
import mongoose from 'mongoose'


//Load environment variables
dotenv.config()


// Init db

mongoClient.then(()=>{

    console.log('connect to db ok')
})
.catch(err=>{
    console.error('App starting error:',err.stack)
    process.exit(1)
})



//Init metrics list
const Metric=mongoose.model('Metric')

Metric.remove({},()=>{

  console.log("Metrics collection clean")
  Metric.insertMany(metrics).then(()=>console.log("Metrics inserted"))
})

//Configuration variables

const port = process.env.PORT || 4000


// Service configuration
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)


// Init Service
app.listen(port, () => {
  console.log(`app is listening to port ${port}`)
})