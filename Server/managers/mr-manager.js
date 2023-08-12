const UserModel = require("../models/user-model")
const OrganizationModel = require("../models/organization-model")
const AppointmentModel = require("../models/appointment-model")
const { Success, Error } = require("../constants/utils")
const ObjectId = require('mongoose').Types.ObjectId

const clinics = async ( body, user ) => {
    try {
        let clinics = await UserModel.find({ createdBy: user._id, userType: { $in: [ 'HL', 'CL' ]} }, { organizationId: 1, phone: 1 })
        .populate('organizationId')

        return Success({ clinics })
    } catch( error ){ console.error(error) }
}

const organizations = async ( body, user ) => {
    try{
        if( !body.organizationType ) return Error()

        let today = new Date()
        today.setHours(0, 0, 0, 0)

        let organizations = await OrganizationModel.find({ organizationType: body.organizationType, ...(body.istoday == 'true' ? {createdAt: { $gte: today }} : {} ), createdBy: user._id })
        return Success({ organizations })
    } catch( error ){ console.log(error) }
}

const deleteOrganization = async ( body ) => {
    try{
       
        await OrganizationModel.deleteOne({ _id: body.id })
        await UserModel.deleteOne({$or: [{ organizationId: body.id }, { hospitalId: body.id }]})
        return Success({ message: 'Delete succesfully'})
    } catch( error ){ console.log(error) }
}


const organizationChart = async ( body, user ) => {
    try{
        let organizationChartData = await UserModel.aggregate([
            {
                $match: {
                    createdBy: user._id
                }
            },
            {
                $group: {
                    _id: '$userType',
                    count: {
                        $sum: 1
                    }
                }
            }
        ])

        return Success({ message: 'Delete succesfully', organizationChartData })
    } catch( error ){ console.log(error) }
}


const analytics = async ( body, user ) => {
    try{
        let today = new Date()
        today.setHours(0, 0, 0, 0)

        let analytics = await UserModel.aggregate([
            {
                $match: {
                    createdBy: user._id,
                }
            },
            {
                $facet: {
                    totalClinics: [
                        {
                            $match: {
                                userType: 'CL',
                            }
                        },
                        {
                            $group: {
                                _id: '$userType',
                                count: {
                                    $sum: 1
                                },
                            }
                        }
                    ],
                    todayClinics: [
                        {
                            $match: {
                                userType: 'CL',
                                createdAt: {
                                    $gte: today
                                }
                            }
                        },
                        {
                            $group: {
                                _id: '$userType',
                                count: {
                                    $sum: 1
                                },
                            }
                        }
                    ],
                    totalHospitals: [
                        {
                            $match: {
                                userType: 'HL',
                            }
                        },
                        {
                            $group: {
                                _id: '$userType',
                                count: {
                                    $sum: 1
                                },
                            }
                        }
                    ],
                    todayHospitals: [
                        {
                            $match: {
                                userType: 'HL',
                                createdAt: {
                                    $gte: today
                                }
                            }
                        },
                        {
                            $group: {
                                _id: '$userType',
                                count: {
                                    $sum: 1
                                },
                            }
                        }
                    ],
                    totalDoctors: [
                        {
                            $match: {
                                userType: 'DR',
                            }
                        },
                        {
                            $group: {
                                _id: '$userType',
                                count: {
                                    $sum: 1
                                },
                            }
                        },
                    ],
                    todayDoctors: [
                        {
                            $match: {
                                userType: 'DR',
                                createdAt: {
                                    $gte: today
                                }
                            }
                        },
                        {
                            $group: {
                                _id: '$userType',
                                count: {
                                    $sum: 1
                                },
                            }
                        }
                    ],
                }
            },
            {
                $project: {
                    todayDoctors: { $first: '$todayDoctors' },
                    totalDoctors: { $first: '$totalDoctors' },
                    todayClinics: { $first: '$todayClinics' },
                    totalClinics: { $first: '$totalClinics' },
                    todayHospitals: { $first: '$todayHospitals' },
                    totalHospitals: { $first: '$totalHospitals' },
                }
            }
        ])
        
        return Success({ message: 'Delete succesfully', analytics: analytics[0]})
    } catch( error ){ console.log(error) }
}


module.exports = {
    clinics,
    organizations,
    deleteOrganization,
    organizationChart,
    analytics,
}