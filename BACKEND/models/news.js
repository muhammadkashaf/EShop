const mongoose = require('mongoose');

const newsOrder = mongoose.Schema({
    news_url: {
        type: String,
        // required: true,
    },
    image_url: {
        type: String,
        // required: true,
    },
    title: {
        type: String,
        // required: true,
    },
    text: {
        type: String,
        // required: true,
    },
    source_name: {
        type: String,
        // required: true,
    },
    type: {
        type: String,
        // required: true,
    },
    
})

exports.News = mongoose.model('News', newsOrder);
