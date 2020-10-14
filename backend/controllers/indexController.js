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
        data: {
            user: newUser
        }
    });
});

exports.login = (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: 'Hey! You are currently in the LOGIN location which I have not created yet. Sorry!'
    });
}