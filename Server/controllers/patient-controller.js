const patientManager = require('../managers/patient-manager')

const savePatientDetails = async ( req, res ) => {
    patientManager.savePatientDetails( req.body, )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getPatientDetails = async ( req, res ) => {
    patientManager.getPatientDetails( req.body, )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}



const appointments = async ( req, res ) => {
    patientManager.appointments( req.body, req.user)
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

module.exports = {
    savePatientDetails,
    getPatientDetails,
    appointments,
}