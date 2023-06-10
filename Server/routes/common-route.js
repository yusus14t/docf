const express = require('express');
const router = express();
const commonController = require(`../controllers/common-controller`);
// const { jwt_verify } = require('../middlewares/common-middleware');

router.post('/checkDuplicateEmail',  commonController.checkDuplicateEmail);
router.post('/create-clinic',  commonController.createClinic);
router.post('/organization-details', commonController.organizationDetails)

//Appointment
router.get('/appointment-doctors',  commonController.appointmentDoctors);
router.post('/add-appointment', commonController.addAppointment)
router.get('/get-patient-by-number', commonController.getPatientByNumber)

//Notifications
router.get('/notification', commonController.allNotification)
router.post('/notification', commonController.addNotification)
router.post('/delete-notification', commonController.deleteNotification)


// support
router.get('/tickets', commonController.allTickets)
router.post('/create-ticket', commonController.createTicket)

module.exports = router;
