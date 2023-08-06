const UserModel = require("../models/user-model")
const OrganizationModel = require("../models/organization-model")
const AppointmentModel = require("../models/appointment-model")
const { Success, Error } = require("../constants/utils")
const ObjectId = require('mongoose').Types.ObjectId

const clinics = async ( body, user ) => {
    try {
        let clinics = await UserModel.find({ createdBy: user._id, userType: { $in: [ 'HL', 'CL' ]} }, { organizationId: 1, phone: 1 })
        .populate('organizationId')

        return Success({ clinics })
    } catch( error ){ console.error(error) }
}

const organizations = async ( body ) => {
    try{
        if( !body.organizationType ) return Error()

        let today = new Date()
        today.setHours(0, 0, 0, 0)

        let organizations = await OrganizationModel.find({ organizationType: body.organizationType, ...(body.istoday == 'true' ? {createdAt: { $gte: today }} : {} ) })
        return Success({ organizations })
    } catch( error ){ console.log(error) }
}

const deleteOrganization = async ( body ) => {
    try{
       
        await OrganizationModel.deleteOne({ _id: body.id })
        return Success({ message: 'Delete succesfully'})
    } catch( error ){ console.log(error) }
}


module.exports = {
    clinics,
    organizations,
    deleteOrganization,
}