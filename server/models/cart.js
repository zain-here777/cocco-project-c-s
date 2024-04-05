const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productId: {
        type: Number,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    name: {
        type: String,
        required: true

    },
    images: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String
    }
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart