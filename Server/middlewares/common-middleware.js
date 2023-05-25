const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

const jwt_verify = async ( req, res, next ) => {
    try{
        let verify = jwt.verify(req.header('auth-token'), process.env.JWT_SECRET )
        let user = await userModel.findOne({_id: verify._id}).lean();
        req.user = user
        req.userId = verify._id
        next();
     } catch(error){ res.status(400).send('Invalid Token') }
}

module.exports = {
    jwt_verify,
}