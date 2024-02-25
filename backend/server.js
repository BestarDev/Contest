import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

import userRouter from './routes/userRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

// Read .env Config and Perform Pre-Actions
dotenv.config();
connectDB();
const port = process.env.PORT || 5000;

// Create a new Express Server
const app = express()

// Use Third-party middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Router control
app.get("/", (req, res) => {
    res.send("This is contest server")
})
app.use('/api/users', userRouter);

// Use Custom Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server is running ...");
})