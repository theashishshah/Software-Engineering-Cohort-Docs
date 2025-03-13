import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/auth.route.js';
import dbConnect from './lib/dbConnect.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 9999;

app.use(
    cors({
        origin: process.env.BASE_URI,
        credentials: true,
        methods: ['POST', 'GET', 'DELETE', 'PUT', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/accounts/', userRouter);

app.get('/', (req, res) => {
    console.log(req.header.origin);
    res.send('Hello World!');
});


dbConnect()
    .then(() => console.log('DB connected succussfuly in server.js file'))
    .catch(() => console.log('Unable to connect DB in server.js file'));

function startServer() {
    const server = app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });

    server.on('error', (error) => {
        console.log(`❌ server error, ${error.message}`);
    });

    server.on('connection', () => console.log(`🔌New connection established.`));
    process.on('SIGINT', () => shutdown(server));
    process.on('SIGTERM', () => shutdown(server));

    console.log(`Server is running on port ${server.address().port}`);
}

function shutdown(server) {
    console.log('⚠️ Shutting down server...');
    server.close(() => {
        console.log('✅ Server closed.');
        process.exit(0);
    });
}

startServer();
