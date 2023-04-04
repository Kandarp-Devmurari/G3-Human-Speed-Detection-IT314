const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const connectDB = async () => {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
}

module.exports = connectDB;