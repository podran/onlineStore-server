const mongoose = require('mongoose');;

const userScheme = mongoose.Schema({
    name: {
        type: String,
        min: 2,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number
});

const User = mongoose.model('user', userScheme);
module.exports = User;