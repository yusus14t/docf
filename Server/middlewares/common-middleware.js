const apiMiddleware = ( req, res, next ) => {
    // console.log('This middleware call to all apis.......')
    next();
}

module.exports = {
    apiMiddleware,
}