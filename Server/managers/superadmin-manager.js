
const UserModel  = require('../models/user-model'); 
const OrganizationModel  = require('../models/organization-model'); 
const { Success, Error, uploadToBucket } = require('../constants/utils');
const websiteImageModel = require('../models/website-image-model');


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
        let patients = await UserModel.find({ userType: 'PT', ...( !!body.istoday ? { createdAt: { $gte: today } } : {} )  }, { name: 1, email: 1, photo: 1, address: 1, phone: 1, gender: 1, bloodGroup: 1, gardianName: 1, age: 1 })
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
}