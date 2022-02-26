const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array