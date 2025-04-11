import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import {db }from './database/db.js';
const app = express();

dotenv.config({ path: './config/.env' });
app.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        methods: [ 'POST'],
        credentials: true,
    }

));
db();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
export default app;