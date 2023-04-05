const mongoose = require('mongoose'); // Import mongoose

const userschema = new mongoose.Schema({ // Create a schema for user
    email:{ // Create a field for email
        type: String,
        required: true,
        unique: true,

    },
    password:{ // Create a field for password
        type: String,
        required: true,
    },
}    

);

const User = mongoose.model('User', userschema); // Create a model for user

module.exports = User; // Export User model
