const commonManager = require('../managers/common-manager');
const notificationManager = require('../managers/notification-manager');


const signUp = async ( req, res ) =>
    commonManager.signUp( req.body )
        .then( data => res.status(data.code).send(data) )
        .catch( err => res.status(500).send(err.data) )


const createClinic = async ( req, res ) =>
commonManager.createClinic( req.body, req.user )
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
    commonManager.getAllDoctors( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteDoctor = async ( req, res ) => {
    commonManager.deleteDoctor( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const appointmentDoctors = async ( req, res ) => {
    commonManager.appointmentDoctors( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const addAppointment = async ( req, res ) => {
    commonManager.addAppointment( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}
 
const getPatientByNumber = async ( req, res ) => {
    commonManager.getPatientByNumber( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getUserByEmail = async ( req, res ) => {
    commonManager.getUserByEmail( req.query )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const allNotification = async ( req, res ) => {
    notificationManager.allNotification( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const addNotification = async ( req, res ) => {
    notificationManager.addNotification( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteNotification = async ( req, res ) => {
    notificationManager.deleteNotification( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

module.exports = {
    signUp,
    logIn,
    createClinic,
    checkDuplicateEmail,
    getAllDoctors,
    deleteDoctor,
    appointmentDoctors,
    addAppointment,
    getPatientByNumber,
    getUserByEmail,
    allNotification,
    addNotification,
    deleteNotification,
}