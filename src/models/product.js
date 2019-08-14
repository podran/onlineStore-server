const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productScheme = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: ObjectId,
        required: true
    }
});

const Product = mongoose.model('product', productScheme);
module.exports = Product;