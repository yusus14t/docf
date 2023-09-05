const express = require('express');
const router = express();
const commonController = require(`../controllers/common-controller`);
const doctorContoller = require(`../controllers/doctor-controller`);
const superAdminController = require('../controllers/superadmin-controller')
const { EventHandler } = require('../managers/doctor-manager');
const { jwt_verify } = require('../middlewares/common-middleware');

// List Of Modules
const modules = [
    {'path' : 'super-admin', 'module': 'superadmin-route'},
    {'path' : 'common', 'module': 'common-route'},
    {'path' : 'doctor', 'module': 'doctor-route'},
    {'path' : 'patient', 'module': 'patient-route'},
    {'path' : 'mr', 'module': 'mr-route'},
    {'path' : 'hospital', 'module': 'hospital-route'},
]

// Return All Routes
modules.map( route => router.use(`/${route.path}`,jwt_verify, require(`./${ route.module }`) ) )

// Use Custom Route
router.get('/', (req, res) => res.send('Hello AcadTech'));

router.post('/session-info', jwt_verify, commonController.sessionInfo);
// Un verify routes

router.post('/signup', commonController.signUp)
router.post('/validate-otp', commonController.validateOtp)
router.post('/login', commonController.logIn);
router.get('/user-by-email', commonController.getUserByEmail);
router.get('/all-clinics', commonController.getAllClinics);
router.get('/clinic-detail', commonController.clinicDetails);
router.get('/waiting-list/:id', commonController.waitingList);
router.get("/all-doctors", doctorContoller.getAllDoctors);
router.get("/get-specializations", commonController.allSpecializations);
router.get("/specialization/:id", commonController.oneSpecialization);
router.get('/website-images', superAdminController.websiteImages );
router.get("/search", commonController.search);

//hospitals
router.get('/hospitals', commonController.getAllHospitals);
router.get('/hospital-details/:id', commonController.hospitalDetails);

// stream: Event Driven  
router.get('/stream', EventHandler )


router.get('/ping', (req, res) => {
    res.send('>>>>> Server Running....')
});


// Module Export 
module.exports = router;