const DoctorManager = require('../managers/doctor-manager');

const getAppointments = async ( req, res ) => 
    DoctorManager.getAppointments( req.query, req.user )
        .then( req => res.status(200).send(req) )
        .catch( err => res.status(500).send(err.data) )
    
const editDoctor = async ( req, res ) => 
    DoctorManager.editDoctor( req.body, req.user )
        .then( req => res.status(200).send(req) )
        .catch( err => res.status(500).send(err) )

const getAllDoctors = async ( req, res ) => {
    DoctorManager.getAllDoctors( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteDoctor = async ( req, res ) => {
    DoctorManager.deleteDoctor( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const addAppointment = async ( req, res ) => {
    DoctorManager.addAppointment( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const appointmentById = async ( req, res ) => {
    DoctorManager.appointmentById( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const reAppointment = async ( req, res ) => {
    DoctorManager.reAppointment( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const analytics = async ( req, res ) => {
    DoctorManager.analytics( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}
        
module.exports = {
    getAppointments,
    editDoctor,
    getAllDoctors,
    deleteDoctor,
    addAppointment,
    appointmentById,
    reAppointment,
    analytics
}
