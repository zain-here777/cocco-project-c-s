const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stream = require("stream");
const e = require("express");
const port = 4000;
const app = express();
const cors = require('cors')
const Cart = require("./models/cart");

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173'
}))

mongoose.connect('mongodb://localhost:27017/cocco', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongoose Connected'))
    .catch(err => console.log(err));

app.post('/api/cart', async (req, res) => {
    const {productId ,price, name, quantity, images, description} = req.body;

    if (!productId) {
        return res.status(400).json({message: 'Invalid request Parameters'});
    }
    const cartItem = new Cart({
        productId,
        price,
        name,
        quantity,
        images,
        description
    });
    await cartItem.save();
    res.status(200).json({message: "The Data is added to the Cart!"})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});