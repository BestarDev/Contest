import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Read .env Config
dotenv.config();
const port = process.env.PORT || 5000;

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