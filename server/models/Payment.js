const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Payment', paymentSchema);
