import app from './app.js';
import dotenv from 'dotenv';
import dbConnect from './db/db.config.js';

dotenv.config({
    path: '../.env',
});

const PORT = process.env.PORT || 9999;

dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error while connecting to database.', error);
        process.exit(1);
    });
