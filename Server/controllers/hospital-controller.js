const hospitalManager = require('../managers/hospital-manager')


const editProfile = async ( req, res ) => {
    hospitalManager.editProfile( req.body, req.user, req.file )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const clinicSpecialization = async ( req, res ) => {
    hospitalManager.clinicSpecialization( req.params, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const addServices = async ( req, res ) => {
    hospitalManager.addServices( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getServices = async ( req, res ) => {
    hospitalManager.getServices( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteService = async ( req, res ) => {
    hospitalManager.deleteService( req.params, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteSpecialization = async ( req, res ) => {
    hospitalManager.deleteSpecialization( req.params, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

module.exports = {
    editProfile,
    clinicSpecialization,
    addServices,
    getServices,
    deleteService,
    deleteSpecialization,
}