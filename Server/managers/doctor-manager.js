const AppointmentModel = require('../models/appointment-model');
const { Success, Error } = require('../constants/utils');
const UserModel = require('../models/user-model');
const ObjectId = require('mongoose').Types.ObjectId

const { EventEmitter } = require('events');
const OrganizationModel = require('../models/organization-model');
const DealModel = require('../models/deal-model');
const eventEmitter = new EventEmitter()

const getAppointments = async (body, user) => {
    try {
        let status = body.status
        let today = new Date()
        today.setHours(0,0,0,0)
        let appointments = await AppointmentModel.aggregate([
            {
                $match: { [user.userType === 'PT' ? 'createdBy' : 'doctorId']: user._id, status, createdAt: { $gte: today }   }
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
                    user: { $first: '$user' },
                    status: 1
                }
            },
        ])
        return Success({ message: 'Appointment fetch successfully', appointments })
    } catch (error) {
        console.log(error)
        return Error();
    }
}

const editDoctor = async (body, user, file) => {
    try {
        body = JSON.parse(body?.data)

        console.log(body?.createdBy, user._id)
        if (body._id !== user._id && user.userType !== 'SA' && body?.createdBy?.toString() !== user._id?.toString()) return Error({ message: 'You have not permission to edit.' })

        let userObj = {
            fullName: body?.fullName,
            email: body?.email,
            phone: body?.phone,
            qualification: body?.qualification,
            specialization: body?.specialization?.id,
            experience: body?.experience,
            address: body?.address,
            aboutme: body?.aboutme,
            photo: body?.photo
        }
        if( file ) userObj['photo'] = file?.filename

        await UserModel.updateOne({ _id: ObjectId(body._id) }, userObj)

        userObj['_id'] = body?._id

        return Success({ message: 'Doctor update  Successfully', doctor: userObj })
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
                    pipeline: [
                        {
                            $project: {
                                name: '$name'
                            },
                        }
                    ],
                    as: 'clinic',
                }
            },
            {
                $project: {
                    fullName: 1,
                    clinic: { $first: '$clinic.name' },
                    specialization: 1,
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
        let today = new Date()
        today.setHours(0,0,0,0)

        let lastAppointment = await AppointmentModel.findOne({ doctorId: ObjectId(body.doctor._id), status: 'waiting', createdAt: { $gte: today } }, { token: 1 }).sort({ createdAt: -1 })
        let token = lastAppointment?.token ? Number(lastAppointment.token) + 1 : '1';
        let patient = await UserModel.findOne({ phone: body.phone, userType: 'PT' }, { fullName: 1, userType: 1, phone: 1, address: 1 });

        if (!patient) {  patient = await UserModel({ ...body, userType: 'PT' }).save() }

        let appointment = await AppointmentModel.findOne({ userId: patient._id, doctorId: body.doctor._id, status:'waiting', createdAt: { $gte: today }})
        if( !appointment ){
            appointment = await AppointmentModel({ token, userId: patient._id, doctorId: body.doctor._id, createdBy: user._id }).save()
        } else {
            return Error({ message: 'Already in your waiting list.' })
        }

        let Obj = {
            _id: appointment._id,
            doctorId: appointment.doctorId,
            token,
            user: {
                _id: patient._id,
                fullName: patient.fullName,
                phone: patient.phone,
                address: patient?.address
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

const reAppointment = async (body) => {
    try {
        let appointment = await AppointmentModel.findOneAndUpdate({ _id: ObjectId(body?._id) }, { status: 'waiting' })
            .populate('userId', 'fullName address phone')
        console.log('appointment', appointment)
        let Obj = {
            user: appointment.userId,
            token: appointment.token,
            _id: appointment._id,
         }
        eventEmitter.emit('new-appointment', { event: 'new-appointment', data: Obj });

        return Success({ ...body, message: 'Re-appointment successfully' })
    } catch (error) {
        console.log(error)
    }
}

const analytics = async (body, user) => {
    try {
        let today = new Date()
        today.setHours(0, 0, 0, 0)
        let analytics = await AppointmentModel.aggregate([
            {
                $match: {
                    doctorId: ObjectId(user?._id),
                }
            },
            {
                $facet: {
                    "total": [
                        {
                            $count: 'count'
                        },
                    ],
                    "today": [
                        {
                            $match: { createdAt: { $gte: today } }
                        },
                        {
                            $count: 'count'
                        },
                    ],
                    'currentToken': [
                        {
                            $match: { status: 'waiting', createdAt: { $gte: today } }
                        },
                        {
                            $limit: 1
                        },
                    ],
                }
            },
            {
                $project: {
                    total: { $first: '$total.count' },
                    today: { $first: '$today.count' },
                    token: { $first: '$currentToken.token' },
                }
            }
        ])
        return Success({ analytics: analytics[0] })
    } catch (error) {
        console.log(error)
    }
}

const createDoctor = async (body, user, image) => {
    try {
        body = JSON.parse(body?.data)

        let doctor = await UserModel.findOne({ phone: body?.phone }) 
        if( doctor ){
            if( doctor?.organizationId === body?.organizationId ) return Error({ message: 'Already added in your clinic/hospitals.', doctor })
            else return Error({ message: 'This phone already used try another phone.', doctor })
        } else {
            doctor = await UserModel({
                userType: 'DR',
                fullName: body?.fullName,
                email: body?.email,
                phone: body?.phone,
                qualification: body?.qualification,
                experience: body?.experience,
                address: body?.address,
                aboutme: body?.aboutme,
                organizationId: body?.organizationId,
                specialization: body?.specialization?.name,
                createdBy: user._id,
                photo: image?.filename,
                isActive: true,
            }).save()
            await OrganizationModel.updateOne({ _id: body?.organizationId }, { tab: { step: body?.tab, isComplete: true }})
            return Success({ message: 'Doctor successfully created.', doctor })
        }
    } catch(error) { console.error(error) }
}

const doctorsInOrganization = async (body) => {
    try {
        let doctors = await UserModel.find({ organizationId: body?.organizationId }, { 
            fullName: 1,
            email: 1,
            phone: 1,
            qualification: 1,
            specialization: 1,
            experience: 1,
            address: 1,
            aboutme: 1,
            photo: 1,
            createdBy: 1,
        })
        return Success({ doctors })
    } catch (error) {
        console.log(error)
    }
}

const deal = async (body, user) => {
    try {
        let deal = await DealModel.findOne({ organizationId: body?.organizationId })
        if( !deal ){
            deal = await DealModel({ 
                price: body?.price,
                detail: body?.details,
                organizationId: body?.organizationId,
                createdBy: user._id
            }).save()
        }
        await OrganizationModel.updateOne({ _id: body?.organizationId }, { tab: { step: body?.tab, isComplete: true }})
        return Success({ message: 'Successfull saved', deal })
    } catch (error) {
        console.log(error)
    }
}

const setAppointmentStatus = async (body) => {
    try {
        await AppointmentModel.updateOne({ _id: ObjectId(body?._id) }, { status: body.status === 'reached' ? 'complete' : 'unreached' })
        
        eventEmitter.emit('status', { event: 'status', data: { appointmentId: body._id } });

        return Success({ ...body, message: 'Status update successfully' })
    } catch (error) {
        console.log(error)
    }
}

const EventHandler = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    });

    const sendResponse = (data, event) => {
        res.write(`event: ${event}\n`);
        res.write(`data: ${JSON.stringify(data)}`);
        res.write("\n\n");
    }

    eventEmitter.on('new-appointment', (data) => sendResponse(data, 'new-appointment'))
    eventEmitter.on('status', (data) => sendResponse(data, 'status'))
}


module.exports = {
    getAppointments,
    editDoctor,
    getAllDoctors,
    deleteDoctor,
    addAppointment,
    appointmentById,
    reAppointment,
    analytics,
    createDoctor ,
    doctorsInOrganization,
    deal,
    setAppointmentStatus,
    EventHandler
}