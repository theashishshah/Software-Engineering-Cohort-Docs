import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, 
            socketTimeoutMS: 45000, 
            autoIndex: false, 
            maxPoolSize: 10, 
        });

        console.log('✅ Database connected successfully.');
    } catch (error) {
        console.log(process.env.MONGODB_URI)
        console.error('❌ Database connection error:', error.message);
        process.exit(1);
    }
};

mongoose.connection.on("disconnected", () =>{
    console.warn("⚠️ MongoDB database connection disconnected. Retrying...")
    setTimeout(dbConnect, 5 * 1000);
})

process.on("SIGINT", async function () {
    await mongoose.connection.close()
    console.warn("⚠️Mongodb connection closed due to Ctrl + C press.")
    process.exit(0)
})

export default dbConnect;
