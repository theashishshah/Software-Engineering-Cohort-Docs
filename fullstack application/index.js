import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import dbConnect from './utils/dbConnect.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 3000;

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
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send(`Home page!`);
});

dbConnect();

//user routes
app.use("/api/v1/users/", userRoutes)
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});



/** we can bring other file's content in our file via two ways:
 *  1. require
 *  2. import, both provides the same functionality
 *  if we're using @import keyword then "type": "module" we've to set in package.json
 *
 *  @error all the routes start from '/' else will get error: "/ashish", "/login",  "login"❌
 */

// what will happen if you write multiple same route: the first one will be picked and there is no casing of letters