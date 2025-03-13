require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
