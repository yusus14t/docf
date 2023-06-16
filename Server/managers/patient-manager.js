const UserModel = require("../models/user-model")

const savePatientDetails = async ( body ) => {
    try{
        await UserModel.updateOne({ _id: ObjectId(body._id) },{ ...body, 'twoFactor.isVerified': true })
        let user = await UserModel.findOne({ _id: ObjectId(body?._id)})
        return Success({ user, message: 'Update details successfull' })
    } catch(error){ console.log(error) }
}

const getPatientDetails = async ( body ) => {
    try{
        let user = await UserModel.findOne({ _id: ObjectId(body?._id)})
        delete(user.password)
        return Success({ user })
    } catch(error){ console.log(error) }
}

module.exports = {
    savePatientDetails,
    getPatientDetails,
}
