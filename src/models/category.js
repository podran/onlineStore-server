const mongoose = require('mongoose');;

const categoryScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {collection: 'categories'});

const Category = mongoose.model('category', categoryScheme);
module.exports = Category;