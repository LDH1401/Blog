import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


import postRoute from './routes/postRoute.js';
app.use('/api/posts', postRoute);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
})

