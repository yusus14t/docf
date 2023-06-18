const { Error, Success, encryptPassword, comparePassword, createToken, smsService } = require('../constants/utils');
const UserModel = require('../models/user-model');
const OrganizationModel = require('../models/organization-model');
const AppointmentModel = require('../models/appointment-model');
const { randomOtp } = require('../constants/utils')
const ObjectId = require('mongoose').Types.ObjectId

const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

const sessionInfo = async ( body, user ) => {
    try{ 
        delete(user.password)
        return Success({ user })
    } catch(error){ 
        console.log(error) 
        return Error({ message: 'Something went wrong'});
    }
}

const createClinic = async ( body, userInfo ) => {
    try{ 
        if( body?.tab === 'STEP1' ){
            let doctor  = await UserModel.findOne({ email: body.email }).lean();

            if( !doctor ){
                let clinic = await OrganizationModel({ 
                    ...body,
                    organzationtype: 'CL',
                    tab: { step: body.tab, isComplete: true }
                }).save()
                
                doctor = await UserModel({
                    ...body,
                    password: body.password === body.confirmPassword ? await encryptPassword(body.password) : "",
                    userType: 'DR',
                    organizationId: clinic?._id,
                    isActive: true,
                    isPortal: true,
                }).save()
            }
            
            delete(doctor.password)
            return Success({ messsage: 'Successfully created', doctor, tab: body.tab })

        } else if( body?.tab === 'STEP2' ){
            await OrganizationModel.updateOne({ _id: body?.organizationId }, {...body, tab: { step: body.tab, isComplete: true }})
            return Success({ messsage: 'Successfully updated', tab: body.tab })

        } else if( body?.tab === 'STEP3' ){
            for( let i=1 ; i <= parseInt(body.doctors); i++ ){
                console.log({...body, organizationId: body.organizationId })
                await UserModel({...body.doctor[i], organizationId: body.organizationId }).save()
            }
        }

    } catch(error){ 
        console.log(error) 
        return Error();
    }
}

const signUp = async ( body ) => {
    try {
        if( body.password === body.confirmPassword ) body.password = await encryptPassword(body.password)
        else return Error({ message: 'Incorrect confirm password' })

        if( body.registrationType === 'CLINIC' ) body['userType'] = 'DR'

        let user = await UserModel({ ...body }).save()
        let token = createToken(user._id)
        return Success({ message: 'Account created successfully', code: 201, user, token }) ;
    } catch ( error ) { 
        console.log(error) 
        return Error();
    }
}

const logIn = async ( body ) => {
    try{
        let user = await UserModel.findOne({ email: body.email })

        if(!user) return Error({message: 'User not found'})

        let isValid = await comparePassword(body.password, user.password)
        if(!isValid) return Error({message: 'Invalid Password'})

        let token = createToken(user._id)
        return Success({message: 'Successfull', token, user })
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}


const appointmentDoctors = async ( body, user ) => {
    try{
        let query = {}

        if(user.type === 'DR' ){
            query = { organizationId: user.organizationId }
        }

        let doctors = await UserModel.aggregate([
            {
                $match: { userType: 'DR', isActive: true, ...query },
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
                    organizationId: 1,
                }
            }
        ])
        return Success({ message: 'Successfull fetch doctor', doctors })
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}


const addAppointment = async ( body, user ) => {
    try{
        let lastAppointment = await  AppointmentModel.findOne({ doctorId: body.doctor }, { token: 1 }).sort({ createdAt: -1 })
        let token = lastAppointment?.token ? Number(lastAppointment.token) + 1 : '1';
        let patient = await UserModel.findOne({ phone: body.phone, userType: 'PT' },{ fullName: 1, userType: 1 });

        if(!patient){
            patient = await UserModel({  ...body,  userType: 'PT' }).save();
        }

        let appointment = await AppointmentModel({ token, userId: patient._id, doctorId: body.doctor,  createdBy: user._id }).save()

        eventEmitter.emit('new-appointment', { event: 'new-appointment', appointment });
        return Success({ message: 'Appointment successfully created', appointment})
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}

const getPatientByNumber = async ( body, user ) => {
    try{
        let patient = await UserModel.find({ phone: body.phone, userType: 'PT' },{ fullName: 1, phone: 1, gender: 1, bloodGroup: 1, address: 1 })
        return Success({ patient })
    } catch(error){ console.log(error) }
}

const getUserByEmail = async ( body ) => {
    try{
        let user = await UserModel.findOne({ email: body.email },{ firstName: 1, lastName: 1, email: 1 })
        return Success({ user })
    } catch(error){ console.log(error) }
}

const organizationDetails = async ( body, user ) => {
    try{
        // let user = await UserModel.findOne({ email: body.email },{ firstName: 1, lastName: 1, email: 1 })
        console.log(body)
        return Success({ user: '' })
    } catch(error){ console.log(error) }
}


const savePatientDatails = async ( body ) => {
    try{
        await UserModel.updateOne({ _id: ObjectId(body._id) },{ ...body, 'twoFactor.isVerified': true })
        let user = await UserModel.findOne({ _id: ObjectId(body?._id)})
        return Success({ user, message: 'Update details successfull' })
    } catch(error){ console.log(error) }
}

const patientSignUp = async ( body, user ) => {
    try{
        const otp = randomOtp()
        let user = await UserModel.findOne({ phone: body?.phone })
        if(user){
            await UserModel.updateOne({ phone: body?.phone }, { 'twoFactor.otp': otp })
        } else {
            user = await UserModel({ phone: body.phone, twoFactor: { otp } }).save()
        }
        
        await smsService(`your otp is ${ otp } `, body.phone)

        return Success({ message: 'OTP Sent to your phone.', user })
    } catch(error){ console.log(error) }
}

const validateOtp = async ( body ) => {
    try{
        let user = await UserModel.findOne({_id: body?.patientId })
        if( user?.twoFactor?.otp === body?.otp ){
            await UserModel.updateOne({_id: user._id}, { 'twoFactor.otp':  0000 })
            // user.twoFactor = { otp: null, isVerified: true }
            let token = createToken(user._id)
            return Success({ user, message: 'Your mobile number is verified.', token})
        } else {  return Error({ message: 'Invalid OTP!' }) }
    } catch(error){ console.log(error) }
}


const EventHandler = ( req, res ) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const newAppointment = ( data ) => {
        console.log('its work', data)
        res.write(`event: ${data.event}\n`)
        res.write(`data: ${JSON.stringify(data)}\n`)
    }

    eventEmitter.on('new-appointment', (data) => newAppointment(data))
}

module.exports = {
    logIn,
    signUp,
    sessionInfo,
    createClinic,
    appointmentDoctors,
    addAppointment,
    getPatientByNumber,
    getUserByEmail,
    organizationDetails,
    savePatientDatails,
    EventHandler,
    patientSignUp,
    validateOtp,
}