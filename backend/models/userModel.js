const mongoose = require('mongoose');
const validator = require('validator')

//Creating new Schema via mongoose:

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A new user must have a name'],
    },
    email: {
        type: String,
        required: [true, 'A new user must have a valid email address'],
        validate: [validator.isEmail, 'Please enter a valid email address!'],
        unique: [true, 'This email has already been registered.']
    },
    password: {
        type: String,
        required: [true, 'A new user must have a password'],
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'You must confirm your password'],
        validate: {
            validator: function(passwordConfirmValue) {
                return passwordConfirmValue === this.password;
            },
            message: 'Passwords do not match'
        }
    }
})

//Creating Model from Schema:
const User = mongoose.model('User', userSchema);

module.exports = User;