const DoctorManager = require('../managers/doctor-manager');

const getAppointments = async ( req, res ) => 
    DoctorManager.getAppointments( req.body, req.user )
        .then( req => res.status(200).send(req) )
        .catch( err => res.status(500).send(err.data) )
    
module.exports = {
    getAppointments,
}
