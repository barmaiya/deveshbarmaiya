const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    content : {
        type : String
    }
});

module.exports = mongoose.model('Notification', notificationSchema)