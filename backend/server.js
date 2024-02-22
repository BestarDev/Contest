import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

// Read .env Config and Perform Pre-Actions
dotenv.config();
connectDB();
const port = process.env.PORT || 5000;

// Create a new Express Server
const app = express()

// Use Third-party middleware
app.use(cors());

// Router control
app.get("/", (req, res) => {
    res.send("This is contest server")
})

app.listen(port, () => {
    console.log("Server is running ...");
})