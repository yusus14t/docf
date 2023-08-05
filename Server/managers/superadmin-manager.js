
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
        console.log({ userType: 'PT', ...( !!body.istoday ? { createdAt: { $gte: today } } : {} )  })
        let patients = await UserModel.find({ userType: 'PT', ...( !!body.istoday ? { createdAt: { $gte: today } } : {} )  }, { name: 1, email: 1, photo: 1, address: 1, phone: 1, gender: 1, bloodGroup: 1, gardianName: 1 })
        return Success({ patients });
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
}