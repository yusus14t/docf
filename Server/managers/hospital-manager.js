const UserModel = require("../models/user-model")
const { Success } = require("../constants/utils")
const organizationModel = require("../models/organization-model")
const ObjectId = require('mongoose').Types.ObjectId

const editProfile = async ( body, user, file ) => {
    try{
        let detail = JSON.parse(JSON.stringify(body))
        if( detail ) detail = JSON.parse(detail.data)
        
        if( user.userType === 'PT' ){
            if ( file ) detail['photo'] = file?.filename
            await UserModel.updateOne({ _id: ObjectId(user._id) }, { ...detail })
            return Success({ message: 'Profile Edit Successfully.'})
        }

        let hospital = await UserModel.findOne({ phone: detail?.phone, _id: { $ne: user._id } })

        if( hospital ) return({ message: 'Phone already used.'})
        
        let obj = {
            fee: detail?.fee,
            address: detail?.address, 
            name: detail?.name,
            phone: detail?.phone,
            email: detail?.email
        }

        if ( file ) obj['photo'] = file?.filename
        
        await organizationModel.updateOne({ _id: user.organizationId }, obj)
        if( obj.phone ) await UserModel.updateOne({ _id: user._id }, { phone: obj.phone })

        return Success({ message: 'Details saved successfully' })
    } catch(error){ console.log(error) }
}

module.exports = {
    editProfile,
}