const express = require('express');
const router = express();
const hospitalController = require('../controllers/hospital-controller');
const { upload } = require('../constants/utils');


router.post('/edit-profile', upload.single("image"), hospitalController.editProfile)

module.exports = router;
