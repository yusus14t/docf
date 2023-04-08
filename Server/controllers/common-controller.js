const { comparePassword, Error, createToken } = require('../constants/utils');
const commonManager = require('../managers/common-manager');
const userModel = require('../models/user-model');


const signUp = async ( req, res ) =>
    commonManager.signUp( req.body )
        .then( req => res.status(200).send(req.data) )
        .catch( err => res.status(500).send(err.data) )

const logIn = async ( req, res ) => {
    try{ 
        let user = await userModel.findOne({ email: body.email })
        if(!user) return Error({ message:' User not found'})

        let isValid = await comparePassword(body.password, user.password)
        // if(!isValid) return Error({message: 'Invalid Password'})

        let token = createToken(user._id)
        console.log(token)
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}

const createOrganization = async ( req, res ) =>
commonManager.signUp( req.body )
    .then( req => res.status(200).send(req.data) )
    .catch( err => res.status(500).send(err.data) )

const checkDuplicateEmail = async ( req, res ) =>
    commonManager.signUp( req.body )
        .then( req => res.status(200).send(req.data) )
        .catch( err => res.status(500).send(err.data) )

        
module.exports = {
    signUp,
    logIn,
    createOrganization,
    checkDuplicateEmail,
}