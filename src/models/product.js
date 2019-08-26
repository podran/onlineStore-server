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
}, {
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            return ret;
        }
    }
});

const Product = mongoose.model('product', productScheme);
module.exports = Product;