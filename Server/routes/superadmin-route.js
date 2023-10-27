const express = require('express');
const router = express();
const { upload } = require('../constants/utils')
const superAdminController = require('../controllers/superadmin-controller');

router.get('/profile', superAdminController.getProfile );
router.get('/analytics', superAdminController.analytics );
router.get('/hospitals', superAdminController.hospitals );
router.get('/clinics', superAdminController.clinics );
router.get('/mrs', superAdminController.MRs );
router.delete('/mr/:id', superAdminController.deleteMR );
router.post('/mr', upload.single('image'), superAdminController.createMR );
router.get('/patients', superAdminController.patients );
router.get('/website-images', superAdminController.websiteImages );
router.post('/upload-image', upload.single('file'), superAdminController.uploadImage );
router.post('/website/:id', superAdminController.contactInfo );
router.get('/website/:id', superAdminController.getWebsiteInfo );
router.get('/appointment-users', superAdminController.appointmentUsers );
router.post('/patient-price', superAdminController.patientPrice );
router.post('/organization-price', superAdminController.organizationPrice );
router.post('/create-specialization', superAdminController.createCustomSpecialization)
router.delete('/specialization/:id', superAdminController.deleteCustomSpecialization)
router.post('/create-service', superAdminController.createCustomService)
router.delete('/service/:id', superAdminController.deleteCustomService)
router.post('/new-plan', superAdminController.addNewPlan)
router.delete('/plan/:id', superAdminController.deletePlan)

module.exports = router;
