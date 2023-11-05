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

const websiteImages = async (req, res) => {
    superAdminManager.websiteImages(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const uploadImage = async (req, res) => {
    superAdminManager.uploadImage(req.body, req.file, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const contactInfo = async (req, res) => {
    superAdminManager.contactInfo(req.params, req.body, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const getWebsiteInfo = async (req, res) => {
    superAdminManager.getWebsiteInfo(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const appointmentUsers = async (req, res) => {
    superAdminManager.appointmentUsers(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const plans = async (req, res) => {
    superAdminManager.plans(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const patientPrice = async (req, res) => {
    superAdminManager.patientPrice(req.body, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const organizationPrice = async (req, res) => {
    superAdminManager.organizationPrice(req.body, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const createCustomSpecialization = async (req, res) => {
    superAdminManager.createCustomSpecialization(req.body, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const deleteCustomSpecialization = async (req, res) => {
    superAdminManager.deleteCustomSpecialization(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const createCustomService = async (req, res) => {
    superAdminManager.createCustomService(req.body, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))
}

const deleteCustomService = async (req, res) => {
    superAdminManager.deleteCustomService(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))

}

const addNewPlan = async (req, res) => {
    superAdminManager.addNewPlan(req.body, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))

}

const deletePlan = async (req, res) => {
    superAdminManager.deletePlan(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))

}

const getExpireOrganizations = async (req, res) => {
    superAdminManager.getExpireOrganizations(req.params, req.user)
        .then( result  => res.status(200).send(result) )
        .catch(err => res.status(500).send(err.data))

}

const sendPLanMessage = async (req, res) => {
    superAdminManager.sendPLanMessage(req.body, req.user)
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
  websiteImages,
  uploadImage,
  contactInfo,
  getWebsiteInfo,
  appointmentUsers,
  plans,
  patientPrice,
  organizationPrice,
  createCustomSpecialization,
  deleteCustomSpecialization,
  createCustomService,
  deleteCustomService,
  addNewPlan,
  deletePlan,
  getExpireOrganizations,
  sendPLanMessage,
};