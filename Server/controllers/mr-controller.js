const mrManager = require('../managers/mr-manager')


const clinics = async ( req, res ) => {
    mrManager.clinics( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}


const organizations = async ( req, res ) => {
    mrManager.organizations( req.query, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

const deleteOrganization = async ( req, res ) => {
    mrManager.deleteOrganization( req.params, req.user )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}


module.exports = {
    clinics,
    organizations,
    deleteOrganization,
}