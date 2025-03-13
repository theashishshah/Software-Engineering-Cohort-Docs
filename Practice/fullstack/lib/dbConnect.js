import mongoose from 'mongoose';


async function dbConnect() {
    await mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Database is connected successfuly.');
        })
        .catch(() => {
            console.log(
                `There is an error while connecting to database, check mongoDB URI.`
            );
        });
}
export default dbConnect