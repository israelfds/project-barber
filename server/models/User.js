// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['cliente', 'barbeiro', 'admin'],
        default: 'cliente' // Defina 'cliente' como padrão
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
