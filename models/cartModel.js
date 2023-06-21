const mongoose = require('mongoose');
var cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Color',
    }],
}, { timestamps: true, });

module.exports = mongoose.model('Cart', cartSchema);