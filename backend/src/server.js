import dotenv from 'dotenv';

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import "dotenv/config";
import express from "express";
import notesRoutes from './routes/notesRoutes.js';
import connectDB from "./config/db.js";
import rateLimiter from './middleware/ratelimiter.js';

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

//middleware
app.use(express.json()); //to help u read the req.body
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

connectDB().then(()=>{
//Port
app.listen(PORT, () => {
    console.log("Server running successfully")
})
})
