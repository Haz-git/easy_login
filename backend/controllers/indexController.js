const User = require('../models/userModel');
const handleAsync = require('../utils/handleAsync');
const throwAppError = require('../utils/throwAppError');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/email');
const crypto = require('crypto');

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
    const resetToken = userEmail.createPasswordResetToken();

    await userEmail.save({
        validateBeforeSave: false
    });

    //Send to User:
    const resetURL = `${req.protocol}://${req.get('host')}/api/resetPassword/${resetToken}`;

    const message = `Hello! This is from my test app. To reset your password, please submit a PATCH request with your new password and passwordConfirm to ${resetURL}.`

    //Wrap try/catch block in order to catch mailing errors:
    try{

        await sendEmail({
            email: userEmail.email,
            subject: 'Your password reset token (valid for 10 mins)',
            message,
        });

        res.status(200).json({
            status: 'Message sent successfully',
            message: 'Token was sent to email address'
        })

    } catch(err) {
        userEmail.passwordResetToken = undefined;
        userEmail.passwordResetExpires = undefined;
        await userEmail.save({ validateBeforeSave: false });

        return next(new throwAppError('Something went wrong sending this email.', 500));
    }
});

exports.resetPassword = handleAsync(async (req, res, next) => {
    //Hash token that was sent to email via URL.
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');
    
    //Search for USER via hash token:
    const user = await User.findOne({ 
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gte: Date.now() } //If the date is greater than now, that means that that the token is still in effect, remember that we set the token to ~10 mins greater than now.
    });

    //If the token is not expired AND the password reset token's hashes are correct, then we'll change the user fields:
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    //Send JWT to user:

    const token = signToken(user._id);

    res.status(200).json({
        status: 'Success',
        message: 'Your password has been changed!',
        token
    })

    
})