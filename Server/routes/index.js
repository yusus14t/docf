const express = require('express');
const router = express();
const commonController = require(`../controllers/common-controller`);
const { jwt_verify } = require('../middlewares/common-middleware');

// List Of Modules
const modules = [
    {'path' : 'super-admin', 'module': 'superadmin-route'},
]

// Return All Routes
modules.map( route => router.use(`/${route.path}`,jwt_verify, require(`./${ route.module }`) ) )

// Use Custom Route
router.get('/', (req, res) => res.send('Hello AcadTech'));
router.post('/checkDuplicateEmail', jwt_verify, commonController.checkDuplicateEmail);
router.post('/create-clinic', jwt_verify, commonController.createClinic);


// Un verify routes
router.post('/signup', commonController.signUp);
router.post('/login', commonController.logIn);
router.get('/allDoctors', commonController.getAllDoctors);

// Module Export 
module.exports = router;