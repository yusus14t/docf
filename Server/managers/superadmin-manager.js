
const UserModel  = require('../models/user-model'); 
const OrganizationModel  = require('../models/organization-model'); 
const { Success, Error } = require('../constants/utils')


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
                    today_users: [
                        {
                            $match: { createdAt: { $lte: today } }
                        },
                        {
                            $group: {
                                _id: '$userType',
                                count: { $sum: 1 }
                            }
                        },
                    ],
                },
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

module.exports = {
    getProfile,
    analytics,
    hospitals,
    clinics,
    patients,
    MRs,
    createMR,
    deleteMR
}