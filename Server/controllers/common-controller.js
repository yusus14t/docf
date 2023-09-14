const commonManager = require('../managers/common-manager');
const notificationManager = require('../managers/notification-manager');
const supportManager = require("../managers/support-manager");
const { response } = require('../routes');



const createClinic = async ( req, res ) => {
commonManager.createClinic( req.body, req.user )
    .then( data => res.status(200).send(data) )
    .catch( err => res.status(500).send(err.data) )
}

const createHospital = async ( req, res ) => {
    commonManager.createHospital( req.body, req.user )
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
    commonManager.sessionInfo( req, req.user )
        .then( result => res.status(result.code).send(result) )
        .catch( err => res.status(500).send(err.data) )
}

const appointmentDepartments = async ( req, res ) => {
    commonManager.appointmentDepartments( req.query, req.user )
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
    commonManager.organizationDetails( req.body, req.user, req.file)
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}



const signUp = async ( req, res ) => {
    commonManager.signUp( req.body, req.user, )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const validateOtp = async ( req, res ) => {
    commonManager.validateOtp( req.body )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const allSpecializations = async ( req, res ) => {
    commonManager.allSpecializations( req.body )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}
const oneSpecialization = async (req, res) => {
    commonManager.oneSpecialization(req.params)
    .then(result => res.status(result.code).send(result))
    .catch(err => res.status(500).send(err.data))
}
const getAllClinics = async ( req, res ) => {
    commonManager.getAllClinics( req.query )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const clinicDetails = async ( req, res ) => {
    commonManager.clinicDetails( req.query )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getOrganization = async ( req, res ) => {
    commonManager.getOrganization( req.query )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const waitingList = async ( req, res ) => {
    commonManager.waitingList( req.params, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const setUserType = async ( req, res ) => {
    commonManager.setUserType( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getAllHospitals = async ( req, res ) => {
    commonManager.getAllHospitals( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const hospitalDetails = async ( req, res ) => {
    commonManager.hospitalDetails( req.params )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const patientAppointments = async ( req, res ) => {
    commonManager.patientAppointments( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const search = async ( req, res ) => {
    commonManager.search( req.query )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const uploadFile = async ( req, res ) => {
    commonManager.uploadFile( req.file )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const createNotice = async ( req, res ) => {
    commonManager.createNotice( req.body, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const getNotice = async ( req, res ) => {
    commonManager.getNotice( req.params )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteNotice = async ( req, res ) => {
    commonManager.deleteNotice( req.params )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const websiteSetting = async ( req, res ) => {
    commonManager.websiteSetting( req.params )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const allCities = async ( req, res ) => {
    commonManager.allCities( req.params )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const phonepayStatus = async ( req, res ) => {
    commonManager.phonepayStatus( req.body, res )
}

module.exports = {
    logIn,
    signUp,
    createClinic,
    checkDuplicateEmail,
    appointmentDepartments,
    getPatientByNumber,
    getUserByEmail,
    allNotification,
    addNotification,
    deleteNotification,
    createTicket,
    allTickets,
    sessionInfo,
    organizationDetails,
    validateOtp,
    allSpecializations,
    getAllClinics,
    clinicDetails,
    getOrganization,
    waitingList,
    createHospital,
    setUserType,
    getAllHospitals,
    hospitalDetails,
    patientAppointments,
    search,
    oneSpecialization,
    uploadFile,
    createNotice,
    getNotice,
    deleteNotice,
    websiteSetting,
    allCities,
    phonepayStatus,
}