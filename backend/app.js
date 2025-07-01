import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { db } from './database/db.js';
import { errorMiddleWare } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: './config/.env' });
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ['POST'],
        credentials: true,
    })
);

db();

// Define routes

app.use('/api/v1/reservation', reservationRouter);

// Use error-handling middleware at the end
app.use(errorMiddleWare);

export default app;