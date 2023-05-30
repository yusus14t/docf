const AppointmentModel = require('../models/appointment-model');
const { Success, Error } = require('../constants/utils');
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
                            firstName: 1,
                            lastName: 1,
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

module.exports = {
    getAppointments,
}