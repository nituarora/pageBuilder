
const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    file: {
        type: String,
    },
    templateData: {
        type: String,
    },
    widgetId: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;