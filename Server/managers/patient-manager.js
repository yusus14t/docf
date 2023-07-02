const UserModel = require("../models/user-model")
const AppointmentModel = require("../models/appointment-model")
const { Success } = require("../constants/utils")
const ObjectId = require('mongoose').Types.ObjectId

const savePatientDetails = async (body) => {
    try {
        await UserModel.updateOne({ _id: ObjectId(body._id) }, { ...body, 'twoFactor.isVerified': true })
        let user = await UserModel.findOne({ _id: ObjectId(body?._id) })
        return Success({ user, message: 'Update details successfull' })
    } catch (error) { console.log(error) }
}

const getPatientDetails = async (body) => {
    try {
        let user = await UserModel.findOne({ _id: ObjectId(body?._id) })
        delete (user.password)
        return Success({ user })
    } catch (error) { console.log(error) }
}

const setAppointmentStatus = async (body) => {
    try {
        await AppointmentModel.updateOne({ _id: ObjectId(body?._id) }, { status: body.status === 'reached' ? 'complete' : 'unreached' })
        return Success({ ...body, message: 'Status update successfully' })
    } catch (error) {
        console.log(error)
    }
}

const appointments = async (body, user) => {
    try {
        let appointments = await AppointmentModel.find({ _id: user._id })
        .populate('doctorId', 'fullName organizationId')
        .populate('dcotorId.organizaationId', 'name')
        .sort({ createdAt: -1 })

        console.log('appointments', appointments)
        return Success({ appointments, message: 'Status update successfully' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    savePatientDetails,
    getPatientDetails,
    setAppointmentStatus,
    appointments,
}
