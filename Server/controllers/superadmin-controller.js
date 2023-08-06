const superAdminManager = require('../managers/superadmin-manager');


const getProfile = async (req, res) => {
    superAdminManager.getProfile(req.body)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err.data))
}

const analytics = async (req, res) => {
    superAdminManager.analytics(req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const hospitals = async (req, res) => {
    superAdminManager.hospitals(req.query)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const clinics = async (req, res) => {
    superAdminManager.clinics(req.query)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const patients = async (req, res) => {
    superAdminManager.patients(req.query)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const MRs = async (req, res) => {
    superAdminManager.MRs(req.query)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}


const createMR = async (req, res) => {
    superAdminManager.createMR(req.body, req.file)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const deleteMR = async (req, res) => {
    superAdminManager.deleteMR(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

        
module.exports = {
    getProfile,
    analytics,
    hospitals,
    clinics,
    patients,
    MRs,
    createMR,
    deleteMR,
}