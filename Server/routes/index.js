const express = require('express');
const router = express();
const commonController = require(`../controllers/common-controller`);

// List Of Modules
const modules = [
    {'path' : 'super-admin', 'module': 'superadmin-route'},
]

// Return All Routes
modules.map( route => router.use(`/${route.path}`, require(`./${ route.module }`) ) )

// Use Custom Route
router.get('/', (req, res) => res.send('Hello AcadTech'));
router.post('/signup', commonController.signUp);
router.post('/login', commonController.logIn);
router.post('/checkDuplicateEmail', commonController.checkDuplicateEmail);
router.post('/createOrganization', commonController.createOrganization);


// Module Export 
module.exports = router;