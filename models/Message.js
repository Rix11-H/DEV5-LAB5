const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    message: String,
    sender: String,
    receiver: String,
    date: Date,
});
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;