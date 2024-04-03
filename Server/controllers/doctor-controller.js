const DoctorManager = require('../managers/doctor-manager');

const getAppointments = async ( req, res ) => 
    DoctorManager.getAppointments( req.query, req.user )
        .then( req => res.status(200).send(req) )
        .catch( err => res.status(500).send(err.data) )
    
const editDoctor = async ( req, res ) => 
    DoctorManager.editDoctor( req.body, req.user, req.file )
        .then( req => res.status(200).send(req) )
        .catch( err => res.status(500).send(err) )

const getAllDoctors = async ( req, res ) => {
    DoctorManager.getAllDoctors( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteDoctor = async ( req, res ) => {
    DoctorManager.deleteDoctor( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const addAppointment = async ( req, res ) => {
    DoctorManager.addAppointment( req.body, req.user, req.origin )
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
      
const createDoctor = async ( req, res ) => {
    DoctorManager.createDoctor( req.body, req.user, req.file )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const doctorsInOrganization = async ( req, res ) => {
    DoctorManager.doctorsInOrganization( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}
  
const deal = async ( req, res ) => {
    DoctorManager.deal( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const setAppointmentStatus = async ( req, res ) => {
    DoctorManager.setAppointmentStatus( req.body, )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const createDepartment = async ( req, res ) => {
    DoctorManager.createDepartment( req.body, req.user, req.file )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getDepartments = async ( req, res ) => {
    DoctorManager.getDepartments( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getClinics = async ( req, res ) => {
    DoctorManager.getClinics( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteDepartment = async ( req, res ) => {
    DoctorManager.deleteDepartment( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const patients = async ( req, res ) => {
    DoctorManager.patients( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const hospitalSpecialization = async ( req, res ) => {
    DoctorManager.hospitalSpecialization( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const addSpecialization = async ( req, res ) => {
    DoctorManager.addSpecialization( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const doghnutAnalytics = async ( req, res ) => {
    DoctorManager.doghnutAnalytics( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const anonymousAppointment = async ( req, res ) => {
    DoctorManager.anonymousAppointment( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const onlineBookingStatus = async ( req, res ) => {
    DoctorManager.onlineBookingStatus( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const sendMessage = async ( req, res ) => {
    DoctorManager.sendMessage( req.body, req.user )
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
    analytics,
    doghnutAnalytics,
    createDoctor,
    doctorsInOrganization,
    deal,
    setAppointmentStatus,
    createDepartment,
    getDepartments,
    deleteDepartment,
    patients,
    hospitalSpecialization,
    addSpecialization,
    getClinics,
    anonymousAppointment,
    onlineBookingStatus,
    sendMessage,
}
