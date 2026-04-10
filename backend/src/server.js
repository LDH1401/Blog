import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoute from './routes/postRoute.js';
import authRoute from './routes/authRoute.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);

const PORT = 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});



