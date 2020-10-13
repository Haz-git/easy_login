exports.getTest = (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: 'Hey! You are the first request ever!'
    });
}