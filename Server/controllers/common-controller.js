const commonManager = require('../managers/common-manager');


const signUp = async ( req, res ) =>
    commonManager.signUp( req.body )
        .then( data => res.status(data.code).send(data) )
        .catch( err => res.status(500).send(err.data) )


const createOrganization = async ( req, res ) =>
commonManager.signUp( req.body )
    .then( data => res.status(200).send(data) )
    .catch( err => res.status(500).send(err.data) )

const checkDuplicateEmail = async ( req, res ) =>
    commonManager.signUp( req.body )
        .then( data => res.status(200).send(data) )
        .catch( err => res.status(500).send(err.data) )

const logIn = async ( req, res ) =>
    commonManager.logIn( req.body, req.user, req.userId )
        .then( result => res.status(result.code).send(result) )
        .catch( err => res.status(500).send(err.data) )

const getAllDoctors = async ( req, res ) => {
    commonManager.getAllDoctors( req.body, req.user, req.userId )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}
    
        
module.exports = {
    signUp,
    logIn,
    createOrganization,
    checkDuplicateEmail,
    getAllDoctors,
}