const UserModel = require("../models/user-model")
const AppointmentModel = require("../models/appointment-model")
const { Success } = require("../constants/utils")
const ObjectId = require('mongoose').Types.ObjectId

const clinics = async ( body, user ) => {
    try {
        console.log('dfg')
        let clinics = await UserModel.find({ createdBy: user._id, userType: { $in: [ 'HL', 'CL' ]} }, { organizationId: 1, phone: 1 })
        .populate('organizationId')

        return Success({ clinics })
    } catch(error){ console.error(error) }
}

module.exports = {
    clinics,
}