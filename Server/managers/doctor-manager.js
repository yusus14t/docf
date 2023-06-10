const AppointmentModel = require('../models/appointment-model');
const { Success, Error } = require('../constants/utils');
const UserModel = require('../models/user-model');
const ObjectId = require('mongoose').Types.ObjectId

const getAppointments = async (body, user) => {
    try{ 
        let appointments = await AppointmentModel.aggregate([
            {
                $match: { doctorId: ObjectId(user._id), status: 'waiting' }
            },
            {
                $lookup:{
                    from:'users',
                    localField:'userId',
                    foreignField: '_id',
                    as: 'user',
                    pipeline:[{
                        $project:{
                            fullName: 1,
                            gender: 1,
                            bloodGroup: 1,
                            phone: 1,
                        }
                    }]
                }
            },
            {
                $project:{
                    token: 1,
                    doctorId: 1,
                    user: { $first: '$user' }
                }
            }
        ])
        return Success({ message: 'Appointment fetch successfully', appointments})
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}

const editDoctor = async (body, user) => {
    try{
        if( body._id !== user._id  && user.userType !== 'SA' ) return Error({ message: 'You have not permission to edit.'})
        await UserModel.updateOne({ _id: ObjectId(body._id) }, {
            ...body,
        })
        return Success({ message: 'Doctor update  Successfully', doctor: body })
    } catch(error){ console.error(error) }
}

const getAllDoctors = async (body, user) => {
    try{ 
        let query = {}
        if( user?.userType === 'MR') query['createdBy'] = user?._id

        let doctors = await UserModel.aggregate([
            {
                $match: { 
                    userType: 'DR', 
                    isActive: true, 
                    ...query 
                },
            },
            {
                $lookup: {
                    from: 'organizations',
                    localField: 'organizationId',
                    foreignField: '_id',
                    as: 'clinic',
                    pipeline: [
                        {
                            $project: {
                                name:  '$name'
                            },
                        }
                    ]
                }
            },
            {
                $project: {
                    fullName: 1,
                    clinic: { $first: '$clinic.name' },
                    specialization: '$specialization',
                    phone: 1,
                    photo: 1,
                    organizationId: 1,
                    isActive: 1,
                    email: 1, 
                    address: 1,
                }
            }
        ])

        return Success({ doctors })
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}


const deleteDoctor = async ( body, user ) => {
    try{
        let doctor = await UserModel.findOne({ _id: body._id })
        if(user.userType === 'SA' || doctor.createdBy.toString() === user._id.toString() ){
            await UserModel.deleteOne({ _id: body._id })
            return Success({ message: 'Successfull delete doctor' })
        }

    } catch(error){ 
        console.log(error) 
        return Error();
    }
}


module.exports = {
    getAppointments,
    editDoctor,
    getAllDoctors,
    deleteDoctor,
}