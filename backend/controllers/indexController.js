exports.getTest = (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: 'Hey! You are the first GET request ever!'
    });
}

exports.signup = (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: 'Hey! You are currently in the SIGNIN location which I have not created yet. Sorry!'
    });
}

exports.login = (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: 'Hey! You are currently in the LOGIN location which I have not created yet. Sorry!'
    });
}