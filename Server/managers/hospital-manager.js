const UserModel = require("../models/user-model")
const AppointmentModel = require("../models/appointment-model")
const { Success } = require("../constants/utils")
const ObjectId = require('mongoose').Types.ObjectId

const editProfile = async ( body, user, file ) => {
    try{
        let detail = JSON.parse(JSON.stringify(body))
        if( detail ) detail = JSON.parse(detail.data)


        let hospital = await UserModel.find({ phone: detail?.phone, _id: { $ne: user._id } })
        if( hospital ) return({ message: 'Phone already used.'})
        
        let obj = {
            fee: detail?.fee,
            address: detail?.address, 
            name: detail?.name,
            phone: detail?.phone,
            email: detail?.email
        }

        if ( file ) obj['photo'] = file?.filename
        await OrganizationModel.updateOne({ _id: user.organizationId }, obj)

        return Success({ message: 'Details saved successfully' })
    } catch(error){ console.log(error) }
}

module.exports = {
    editProfile,
}