const UserModel = require("../models/user-model")
const { Success, uploadToBucket, Errors } = require("../constants/utils")
const organizationModel = require("../models/organization-model")
const { Error } = require("../constants/utils")
const ObjectId = require('mongoose').Types.ObjectId

const editProfile = async ( body, user, file ) => {
    try{
      console.log('file', file)
        let detail = JSON.parse(JSON.stringify(body))
        if( detail ) detail = JSON.parse(detail.data)

        if( file ) await uploadToBucket( file.filename );
        
        
        if( user.userType === 'PT' ){
            if ( file ) detail['photo'] = file?.filename
            await UserModel.updateOne({ _id: ObjectId(user._id) }, { ...detail })
            return Success({ message: 'Profile Edit Successfully.'})
        }
        console.log("11111111111");
        let hospital = await UserModel.findOne({ phone: detail?.phone, _id: { $ne: user._id } })

        console.log("edit profile hospital", hospital);
        if( hospital ) return Error({ message: 'Phone already used.'})
        
        let obj = {
            fee: detail?.fee ? parseInt(detail?.fee) : 0,
            address: detail?.address, 
            name: detail?.name,
            phone: detail?.phone,
            email: detail?.email,
            timing: detail?.timing,
        }
        console.log("3333333");


        if ( file ) {
            obj['photo'] = file?.filename
        }
        await organizationModel.updateOne({ _id: user.organizationId }, obj)

        if( ['SA', 'MR' ,'AD'].includes(user.userType)) await UserModel.updateOne({ _id: user._id }, obj)
        else if( obj.phone ) await UserModel.updateOne({ _id: user._id }, { phone: obj.phone })


        return Success({ message: 'Details saved successfully' })
    } catch(error){ console.log(error) }
}

const clinicSpecialization = async (body, user) => {
    try{
        let specializations = await organizationModel.findOne({_id: body.id }, { specialization: 1 })
        specializations = specializations?.specialization?.map( spe => ({ id: spe.id, name: spe?.name  }))
        return Success({ specializations })
    } catch(error){ console.error(error) }
}

const addServices = async ({ services }, user) => {
    try {

        let updatedService = []
    
        if (services?.length) {
          for (let service of services) {
    
            let organization = await organizationModel.findOne({
              _id: user?.organizationId,
              "services.id": service.id,
            });
    
            if (!organization) {
              await organizationModel.updateOne(
                { _id: user?.organizationId },
                {
                  $push: {
                    services: { id: service?.id || service?.label?.toUpperCase() , name: service.name || service?.label },
                  },
                }
              );
              updatedService.push({ id: service?.id || service?.label?.toUpperCase() , name: service.name || service?.label })
            }
          }
        }
        return Success({ message: 'Specialization created succesfully.', services: updatedService });
    
      } catch (error) {
        console.log(error);
      }
}

const getServices = async (body, user) => {
    try{
        let organization = await organizationModel.findOne({_id: user.organizationId }, { services: 1 })
        return Success({ services: organization.services })
    } catch(error){ console.error(error) }
}

const deleteService = async ({ id }, user) => {
    try{
        await organizationModel.updateOne({ _id: user.organizationId }, { $pull: { services: { id } } })
        return Success({ message: 'Successfully deleted service' })
    } catch(error){ console.error(error) }
}

const deleteSpecialization = async ({ id }, user) => {
    try{
        await organizationModel.updateOne({ _id: user.organizationId }, { $pull: { specialization: { id } } })
        return Success({ message: 'Successfully deleted service' })
    } catch(error){ console.error(error) }
}

const getHospitalNameByDepartment = async ({ id }, user) => {
  try{
      let hospital = await UserModel.findOne({ _id: user._id }, { hospitalId: 1 }).populate('hospitalId', 'name')
      console.log(hospital, user.hospitalId)
      return Success({ hospitalName: hospital?.hospitalId?.name })
  } catch(error){ console.error(error) }
}


module.exports = {
    editProfile,
    clinicSpecialization,
    addServices,
    getServices,
    deleteService,
    deleteSpecialization,
    getHospitalNameByDepartment,
}