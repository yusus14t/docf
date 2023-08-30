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


module.exports = router;
