import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv'
import Router from './routes/route.js';
dotenv.config();

const app = express();

app.use('/', Router);

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`)); 
Connection(username,password);

