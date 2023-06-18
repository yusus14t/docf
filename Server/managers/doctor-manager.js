const AppointmentModel = require('../models/appointment-model');
const { Success, Error } = require('../constants/utils');
const UserModel = require('../models/user-model');
const ObjectId = require('mongoose').Types.ObjectId

const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

const getAppointments = async (body, user) => {
    try {
        console.log(user._id)
        let appointments = await AppointmentModel.aggregate([
            {
                $match: { [user.userType === 'PT' ? 'createdBy' : 'doctorId']: user._id }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user',
                    pipeline: [{
                        $project: {
                            fullName: 1,
                            gender: 1,
                            bloodGroup: 1,
                            phone: 1,
                        }
                    }]
                }
            },
            {
                $project: {
                    token: 1,
                    doctorId: 1,
                    user: { $first: '$user' }
                }
            }
        ])


        return Success({ message: 'Appointment fetch successfully', appointments })
    } catch (error) {
        console.log(error)
        return Error();
    }
}

const editDoctor = async (body, user) => {
    try {
        if (body._id !== user._id && user.userType !== 'SA') return Error({ message: 'You have not permission to edit.' })
        await UserModel.updateOne({ _id: ObjectId(body._id) }, {
            ...body,
        })
        return Success({ message: 'Doctor update  Successfully', doctor: body })
    } catch (error) { console.error(error) }
}

const getAllDoctors = async (body, user) => {
    try {
        let query = {}
        if (user?.userType === 'MR') query['createdBy'] = user?._id

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
                                name: '$name'
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
    } catch (error) {
        console.log(error)
        return Error();
    }
}


const deleteDoctor = async (body, user) => {
    try {
        let doctor = await UserModel.findOne({ _id: body._id })
        if (user.userType === 'SA' || doctor.createdBy.toString() === user._id.toString()) {
            await UserModel.deleteOne({ _id: body._id })
            return Success({ message: 'Successfull delete doctor' })
        }

    } catch (error) {
        console.log(error)
        return Error();
    }
}

const addAppointment = async (body, user) => {
    try {
        let lastAppointment = await AppointmentModel.findOne({ doctorId: body.doctor }, { token: 1 }).sort({ createdAt: -1 })
        let token = lastAppointment?.token ? Number(lastAppointment.token) + 1 : '1';
        let patient = await UserModel.findOne({ phone: body.phone, userType: 'PT' }, { fullName: 1, userType: 1 });

        if (!patient) {
            patient = await UserModel({ ...body, userType: 'PT' }).save();
        }

        let appointment = await AppointmentModel({ token, userId: patient._id, doctorId: body.doctor, createdBy: user._id }).save()

        let Obj = {
            _id: appointment._id,
            doctorId: body.doctor._id,
            token,
            user: {
                _id: patient._id,
                fullName: patient.fullName,
                phone: patient.phone,
            }
        }
        eventEmitter.emit('new-appointment', { event: 'new-appointment', data: Obj });

        return Success({ message: 'Appointment successfully created', appointment: Obj })

    } catch (error) {
        console.log(error)
        return Error();
    }
}

const appointmentById = async (body, user) => {
    try {
        let appointment = await AppointmentModel.findOne({ _id: ObjectId(body.appointmentId) })
            .populate('userId', 'fullName age gender fatherName phone address')
            .populate({
                path: 'doctorId',
                select: 'fullName organizationId',
                populate: {
                    path: 'organizationId',
                    select: 'name'
                }
            })
        if (!appointment) return Error({ messsage: 'Oops! appointment not find.' })
        return Success({ appointment })
    } catch (error) {
        console.log(error)
        return Error();
    }
}

const EventHandler = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    });

    const newAppointment = (data) => {
        res.write("event: new-appointment\n");
        res.write(`data: ${JSON.stringify(data)}`);
        res.write("\n\n");
    }

    eventEmitter.on('new-appointment', (data) => newAppointment(data))
}


module.exports = {
    getAppointments,
    editDoctor,
    getAllDoctors,
    deleteDoctor,
    addAppointment,
    appointmentById,
    EventHandler
}