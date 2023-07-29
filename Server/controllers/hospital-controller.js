const hospitalManager = require('../managers/hospital-manager')


const editProfile = async ( req, res ) => {
    hospitalManager.editProfile( req.body, req.user, req.file )
    .then( result => res.status(result.code).send(result) )
    .catch( err => res.status(500).send(err.data) )
}

module.exports = {
    editProfile,
}