const commonManager = require('../managers/common-manager');


const signUp = async ( req, res ) =>
    commonManager.signUp( req.body )
        .then( req => res.status(200).send(req.data) )
        .catch( err => res.status(500).send(err.data) )

const logIn = async ( req, res ) =>
commonManager.signUp( req.body )
    .then( req => res.status(200).send(req.data) )
    .catch( err => res.status(500).send(err.data) )

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