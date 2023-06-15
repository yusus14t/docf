const express = require('express');
const router = express();
const commonController = require(`../controllers/common-controller`);
// const Events = require(`./events`);
const { EventHandler } = require('../managers/common-manager')
const { jwt_verify } = require('../middlewares/common-middleware');
const {  PINCODES } = require('../seeds/pincode-seed'); 

// List Of Modules
const modules = [
    {'path' : 'super-admin', 'module': 'superadmin-route'},
    {'path' : 'common', 'module': 'common-route'},
    {'path' : 'doctor', 'module': 'doctor-route'},
    {'path' : 'patient', 'module': 'patient-route'},
]

// Return All Routes
modules.map( route => router.use(`/${route.path}`,jwt_verify, require(`./${ route.module }`) ) )

// Use Custom Route
router.get('/', (req, res) => res.send('Hello AcadTech'));

router.post('/session-info', jwt_verify, commonController.sessionInfo);
// Un verify routes
router.post('/signup', commonController.signUp);
router.post('/patient-signup', commonController.patientSignUp)
router.post('/validate-otp', commonController.validateOtp)
router.post('/login', commonController.logIn);
router.get('/user-by-email', commonController.getUserByEmail);
router.get('/stream', EventHandler )


router.get('/ping', (req, res) => {
    res.send('>>>>> Server Running....')
});


// Module Export 
module.exports = router;