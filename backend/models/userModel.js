const mongoose = require('mongoose');

//Creating new Schema via mongoose:

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A new user must have a name'],
    },
    email: {
        type: String,
        required: [true, 'A new user must have a valid email address'],
    }
})