const express = require('express');
const router = express();
const superAdminController = require('../controllers/superadmin-controller');

router.get('/profile', superAdminController.getProfile );
router.get('/analytics', superAdminController.analytics );

module.exports = router;
