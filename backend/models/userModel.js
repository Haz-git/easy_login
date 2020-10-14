const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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

//Pre-save hook for password encryption:

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})

//Creating instance method for comparing hashed passwords:
userSchema.methods.compareHashedPasswords = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

//Creating Model from Schema:
const User = mongoose.model('User', userSchema);

module.exports = User;