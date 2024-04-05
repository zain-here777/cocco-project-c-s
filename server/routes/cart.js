const express = require('express')
const router = express.Router();


const Cart = require('../models/cart');

router.post('/cart/:productId', async (req, res) => {
    try {
        const productId = req.params.productId
        const cart = await Cart.findById(productId)
        res.status(200).json({message: 'Product Added to the Cart Successfully!'});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server Error'})
    }
});

module.exports = router