// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    details: {
        type: String,
        required: [true, 'Details are required']
    },
    contact: {
        type: String,
        required: [true, 'Contact info is required']
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Create and export the model
module.exports = mongoose.model('Contact', contactSchema);