
const UserModel  = require('../models/user-model'); 
const OrganizationModel  = require('../models/organization-model'); 
const { Success, Error, uploadToBucket } = require('../constants/utils');
const websiteImageModel = require('../models/website-image-model');
const settingModel = require('../models/setting-model');
const specializationModel = require('../models/specialization-model');
const serviceModel = require('../models/service-model');


const getProfile = async ( body ) => {
    try {
        console.log('Manager Call');
        let data = 'Profile Detail'
        return { data } ;
    } catch ( error ) { console.log(error) }
}

const analytics = async () => {
    try {
        let today = new Date()
        today.setHours(0,0,0,0)

        const getQuery = (isToday, userType) => {
            return [{
                $match: {
                    userType,
                    ...( isToday ? { createdAt: { $gte: today }} : {} )
                },
            },
            {
                $group: {
                    _id: '$userType',
                    count: {
                        $sum: 1
                    }
                }
            }]
        }

        let analyticsData = await UserModel.aggregate([
            {
                $facet: {
                    total_users: [
                        {
                            $group: {
                                _id: '$userType',
                                count: { $sum: 1 }
                            }
                        },
                    ],
                    total_patients:  getQuery( false,  'PT'),
                    today_patients:  getQuery( true,   'PT'),
                    total_doctors:   getQuery( false,  'DR'),
                    today_doctors:   getQuery( true,   'DR'),
                    total_clinics:   getQuery( false,  'CL'), 
                    today_clinics:   getQuery( true,   'CL'),
                    total_hospitals: getQuery( false,  'HL'),
                    today_hospitals: getQuery( true,   'HL'),
                },
            },
            {
                $project: {
                    total_users:     1,
                    total_patients:  { $first: '$total_patients' },
                    today_patients:  { $first: '$today_patients' },
                    total_doctors:   { $first: '$total_doctors' },
                    today_doctors:   { $first: '$today_doctors' },
                    total_clinics:   { $first: '$total_clinics' },
                    today_clinics:   { $first: '$today_clinics' },
                    total_hospitals: { $first: '$total_hospitals' },
                    today_hospitals: { $first: '$today_hospitals' },
                }
            }
        ])

        return Success({ analyticsData: analyticsData[0] });
    } catch (error) { console.log(error) }
}

const hospitals = async ( body ) => {
    try {
        let today = new Date()
        today.setHours(0, 0, 0, 0)

        let hospitals = await OrganizationModel.find({ organizationType: 'Hospital', ...( !!body.istoday ? { createdAt: { $gte: today } } : {} ) }, { name: 1, email: 1, photo: 1, phone: 1, registration: 1, fee: 1, adderss: 1, specialization: 1 })
        return Success({ hospitals });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const clinics = async ( body ) => {
    try {
        let today = new Date()
        today.setHours(0, 0, 0, 0)

        let clinics = await OrganizationModel.find({ organizationType: 'Clinic', ...( !!body.istoday ? { createdAt: { $gte: today } } : {} ) }, { name: 1, email: 1, photo: 1, phone: 1, registration: 1, fee: 1, adderss: 1, specialization: 1 })
        return Success({ clinics });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const patients = async ( body ) => {
    try {
        let today = new Date()
        today.setHours(0, 0, 0, 0)
        let patients = await UserModel.find({ userType: 'PT', ...( !!body.istoday ? { createdAt: { $gte: today } } : {} )  })
        return Success({ patients });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const MRs = async ( body ) => {
    try {
        let MRs = await UserModel.find({ userType: 'MR'  }, { name: 1, email: 1, photo: 1, address: 1, phone: 1, gender: 1, bloodGroup: 1, gardianName: 1, age: 1, isActive: 1 })
        return Success({ MRs });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const createMR = async ( body, file ) => {
    try {
        body = JSON.parse(body.data)

        if( file ) await uploadToBucket( file.filename );

        
        let MRs = await UserModel({
            ...body,
            photo: file?.filename,
            isActive: true,
            primary: true,
            userType: 'MR',
            twoFactor: {
                isVerified: true,
                otp: 0
            }
        }).save()
        return Success({ MRs });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const deleteMR = async ( body ) => {
    try {
        await UserModel.deleteOne({ _id: body.id })
        return Success({ message: 'Successfully deleted.' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const websiteImages = async ( body ) => {
    try {
        let images = await websiteImageModel.find();
        return Success({ images });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}


const uploadImage = async ( body, file ) => {
    try {
        let image = await websiteImageModel.findOne({ id: body.id })
        await uploadToBucket(file.filename)

        if( image ){
            await websiteImageModel.updateOne({ id: body.id }, { image: file.filename })
            image.image = file.filename 

        } else {
            image = await websiteImageModel({
                id: body.id,
                image: file.filename
            }).save()
        }

        return Success({ image });

    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const contactInfo = async (params, body, user ) => {
    try {
        
        let contact
        if( params.id === 'CONTACT_QUERY'){
            await settingModel({
                id: params.id,
                data: {
                    ...body
                }
            }).save()

        } else if( params.id === 'CONTACT_INFO' ){
            contact = await settingModel.updateOne({ id: params.id },
                {
                    [`data.${body.type}`]: body.value 
                }
            )
        }
        console.log(contact)
        return Success({ contact });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const getWebsiteInfo = async ( params, body ) => {
    try {
        let contacts = await settingModel.find({ id: params.id });
        return Success({ contacts });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const appointmentUsers = async ( params, body ) => {
    try {
        let users = await UserModel.aggregate([
            {
                $match: {
                    userType: {
                        $nin: ['SA']
                    }
                }
            },
            {
                $lookup: {
                    from: 'organizations',
                    localField: 'organizationId',
                    foreignField: '_id',
                    as: 'organization',
                    pipeline: [
                        {
                            $project: {
                                name: 1
                            }
                        }
                    ]
                }
            },
            {
                $unwind: {
                    path: '$organization',
                    preserveNullAndEmptyArrays: true
                },
                
            },
            {
                $project: {
                    label: '$name',
                    label_two: '$organization.name',
                    value: '$_id'
                }
            }
        ]);
        console.log(users)
        return Success({ users });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const plans = async ( params, body ) => {
    try {
        let paymentSetting = await settingModel.find({ id: 'PAYMENT' });
        return Success({ paymentSetting });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const patientPrice = async ( body ) => {
    try {
        await settingModel.updateOne({ id: 'PAYMENT', 'data.organization': 'patient' }, { 'data.price': body.price });
        return Success({ message: 'Price update successfully' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const organizationPrice = async ( body ) => {
    try {

        for(let [ key, value ] of Object.entries(body.clinic)) {
            await settingModel.updateOne({ id: 'PAYMENT', 'data.organization': 'clinic', 'data.type': key }, {  'data.price': value.price, 'data.discount': value.discount });
        } 
        for(let [ key, value ] of Object.entries(body.hospital)) {
            await settingModel.updateOne({ id: 'PAYMENT', 'data.organization': 'hospital', 'data.type': key }, {  'data.price': value.price, 'data.discount': value.discount });
        } 
        return Success({ message: 'Price update successfully' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}


const createCustomSpecialization = async ( body ) => {
    try {
        body.customSpecialization  = body.customSpecialization.trim()
        await specializationModel({ id: body.customSpecialization.toUpperCase(), name: body.customSpecialization, isDefault: false }).save() 
        return Success({ message: 'Price update successfully' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const deleteCustomSpecialization = async ( body ) => {
    try {
        console.log(body)
        await specializationModel.deleteOne({ id: body.id }) 
        return Success({ message: 'Specialization successfully deleted' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const createCustomService = async ( body ) => {
    try {
        body.customServices  = body.customServices.trim()
        await serviceModel({ id: body.customServices.toUpperCase(), name: body.customServices, isDefault: false }).save() 
        return Success({ message: 'Service update successfully' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const deleteCustomService = async ( body ) => {
    try {
        console.log(body)
        await serviceModel.deleteOne({ id: body.id }); 
        return Success({ message: 'Service successfully deleted' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const addNewPlan = async ( body ) => {
    try {
        let type = `DAY_${body.days}`
        await settingModel.create({ 
            id: 'PAYMENT', 
            data: { 
                organization: body.organization, 
                type,
                price: body.price,
                discount: '0',
                days: body.days,
                isDefault: false 
            }
        })

        return Success({ message: 'Plan successfully created' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
}

const deletePlan = async ( params ) => {
    try {
        console.log(params._id)
        await settingModel.deleteOne({ _id: ObjectId(params._id) })

        return Success({ message: 'plan successfully deleted' });
    } catch ( error ) { 
        console.log(error)
        return Error()
    }
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
  deletePlan
};