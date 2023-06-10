const commonManager = require('../managers/common-manager');
const notificationManager = require('../managers/notification-manager');
const supportManager = require("../managers/support-manager")

const signUp = async ( req, res ) => {
    commonManager.signUp( req.body )
        .then( data => res.status(data.code).send(data) )
        .catch( err => res.status(500).send(err.data) )
}

const createClinic = async ( req, res ) => {
commonManager.createClinic( req.body, req.user )
    .then( data => res.status(200).send(data) )
    .catch( err => res.status(500).send(err.data) )
}

const checkDuplicateEmail = async ( req, res ) => {
    commonManager.signUp( req.body )
        .then( data => res.status(200).send(data) )
        .catch( err => res.status(500).send(err.data) )
}

const logIn = async ( req, res ) => {
    commonManager.logIn( req.body )
        .then( result => res.status(result.code).send(result) )
        .catch( err => res.status(500).send(err.data) )
}

const sessionInfo = async ( req, res ) => {
    commonManager.sessionInfo( req.body, req.user )
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

const createTicket = async ( req, res ) => {
    supportManager.createTicket( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const allTickets = async ( req, res ) => {
    supportManager.allTickets( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const organizationDetails = async ( req, res ) => {
    commonManager.organizationDetails( req.body, req.user, )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

module.exports = {
    signUp,
    logIn,
    createClinic,
    checkDuplicateEmail,
    appointmentDoctors,
    addAppointment,
    getPatientByNumber,
    getUserByEmail,
    allNotification,
    addNotification,
    deleteNotification,
    createTicket,
    allTickets,
    sessionInfo,
    organizationDetails,
}