const express = require('express');
const router = express();
const superAdminController = require('../controllers/superadmin-controller');

router.get('/profile', superAdminController.getProfile );

module.exports = router;
