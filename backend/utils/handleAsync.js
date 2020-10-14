//Utility function used to handle async functions to catch any errors:

module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
}