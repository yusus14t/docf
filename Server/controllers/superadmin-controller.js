const superAdminManager = require('../managers/superadmin-manager');


const getProfile = async ( req, res ) => 
    superAdminManager.getProfile( req.body )
        .then( req => res.status(200).send(req.data) )
        .catch( err => res.status(500).send(err.data) )

        
module.exports = {
    getProfile,
}