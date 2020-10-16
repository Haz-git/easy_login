const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

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

//Generating a instance method for token creation:
userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');

    //The reset token is saved in its hashed form to the database, similar to the password:

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
}


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