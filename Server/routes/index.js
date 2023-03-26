const express = require('express');
const router = express();

// List Of Modules
const modules = [
    {'path' : 'super-admin', 'module': 'superadmin-route'},
]

// Return All Routes
modules.map( route => router.use(`/${route.path}`, require(`./${ route.module }`) ) )

// Use Custom Route


// Module Export 
module.exports = router;