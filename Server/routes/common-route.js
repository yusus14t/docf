const express = require('express');
const router = express();
const commonController = require(`../controllers/common-controller`);
// const { jwt_verify } = require('../middlewares/common-middleware');
const { upload } = require('../constants/utils')

router.post('/checkDuplicateEmail',  commonController.checkDuplicateEmail);
router.post('/create-clinic', commonController.createClinic);
router.post('/create-hospital', commonController.createHospital);
router.get('/organization', commonController.getOrganization);
router.post('/organization-details', upload.single("image"), commonController.organizationDetails)
router.get('/specializations', commonController.allSpecializations)
router.post('/set-usertype', commonController.setUserType);

//Appointment
router.get('/appointment-departments',  commonController.appointmentDepartments);
router.get('/get-patient-by-number', commonController.getPatientByNumber)

//Notifications
router.get('/notification', commonController.allNotification)
router.post('/notification', commonController.addNotification)
router.post('/delete-notification', commonController.deleteNotification)


// support
router.get('/tickets', commonController.allTickets)
router.post('/create-ticket', commonController.createTicket)

//notice
router.post('/notice', commonController.createNotice)
router.get('/notice/:id', commonController.getNotice)
router.delete('/notice/:id', commonController.deleteNotice)

//patient
router.get('/patient-appointments', commonController.patientAppointments)
router.post('/upload-file', upload.single('file'), commonController.uploadFile )

// website
router.get('/website/:id', commonController.websiteSetting)



module.exports = router;
