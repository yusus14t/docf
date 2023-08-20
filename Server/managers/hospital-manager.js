const UserModel = require("../models/user-model")
const { Success, uploadToBucket } = require("../constants/utils")
const organizationModel = require("../models/organization-model")
const { isAxiosError } = require("axios")
const ObjectId = require('mongoose').Types.ObjectId

const editProfile = async ( body, user, file ) => {
    try{
        let detail = JSON.parse(JSON.stringify(body))
        if( detail ) detail = JSON.parse(detail.data)

        if( file ) await uploadToBucket( file.filename );
        
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

        if ( file ) {
            obj['photo'] = file?.filename
        }
        
        await organizationModel.updateOne({ _id: user.organizationId }, obj)

        if( ['SA', 'MR'].includes(user.userType)) await UserModel.updateOne({ _id: user._id }, obj)
        else if( obj.phone ) await UserModel.updateOne({ _id: user._id }, { phone: obj.phone })


        return Success({ message: 'Details saved successfully' })
    } catch(error){ console.log(error) }
}

module.exports = {
    editProfile,
}