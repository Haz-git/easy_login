const User = require('../models/userModel');
const handleAsync = require('../utils/handleAsync');
const throwAppError = require('../utils/throwAppError');
const jwt = require('jsonwebtoken');

//Creating function to sign JWT:
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

exports.getTest = (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: 'Hey! You are the first GET request ever!'
    });
}

exports.signup = handleAsync(async (req, res, next) => {
    console.log(req.body);
    //Creating new user:
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    //Creating Token:
    const token = signToken(newUser._id);

    res.status(200).json({
        status: 'Success',
        token,
        message: 'This User has been added to the DB',
        completed: true,
        data: {
            user: newUser
        }
    });
});

exports.login = handleAsync(async (req, res, next) => {
    //Extracting email and password from request
    const { email, password } = req.body;
    //Making sure email and password exists in request:
    if (!email || !password) {
        return next(new throwAppError('Please provide an email or password', 400));
    }
    //Checking if email and password exists in database:
    const user = await User.findOne({ email }).select('+password');

    //Grabbing user's name:
    const userName = await User.findOne({ email }).select(`+name`);

    //Comparing the two hashed passwords.
    if (!user || !await user.compareHashedPasswords(password, user.password)) {
        return next(new throwAppError('Incorrect email or password', 401));
    }

    //Send token to client if everything is correct:
    const token = signToken(user._id);

    res.status(200).json({
        status: 'Login is Successfull',
        userDetails: userName,
        completed: true,
        token,
    });
});

exports.forgotPassword = handleAsync(async (req, res, next) => {
    //Getting user based on POSTed email. Remember, this is our only identifier 
    const userEmail = await User.findOne({ email: req.body.email });
    //Check if there is really a user:
    
    if(!userEmail) {
        return next(new throwAppError('There is no registered User with that email address', 404));
    }

    //If there is a user, generate a random reset token and send.
    const resetToken = User.createPasswordResetToken();

    await User.save({
        validateBeforeSave: false
    });

});