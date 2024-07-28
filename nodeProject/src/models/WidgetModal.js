
const mongoose = require('mongoose');

const widgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Widget = mongoose.model('Widgets', widgetSchema);

module.exports = Widget;