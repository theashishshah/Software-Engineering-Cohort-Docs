import mongoose from 'mongoose';
import 'dotenv/config';

function dbConnect() {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            console.log(`Connected to mongoDB`);
        })
        .catch((err) => {
            console.log(`Got an error while connecting to database, ${err}`);
        });
}

export default dbConnect;
