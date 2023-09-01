const express = require('express');
const router = express();
const hospitalController = require('../controllers/hospital-controller');
const { upload } = require('../constants/utils');


router.post('/edit-profile', upload.single("image"), hospitalController.editProfile)
router.get('/clinic-specialization/:id', hospitalController.clinicSpecialization)
router.get('/services', hospitalController.getServices)
router.post('/services', hospitalController.addServices)
router.delete('/service/:id', hospitalController.deleteService )
router.delete('/specialization/:id', hospitalController.deleteSpecialization )

module.exports = router;
