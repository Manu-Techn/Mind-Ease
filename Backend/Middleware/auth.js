const auth = (req, res, next) => {
    console.log('Auth middleware - will implement later');
    next();
};

module.exports = auth;