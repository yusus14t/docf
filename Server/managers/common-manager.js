const { Error, Success, encryptPassword, comparePassword, createToken, smsService } = require('../constants/utils');
const UserModel = require('../models/user-model');
const OrganizationModel = require('../models/organization-model');
const AppointmentModel = require('../models/appointment-model');
const { randomOtp } = require('../constants/utils')
const ObjectId = require('mongoose').Types.ObjectId
const { specialization } = require('../seeds/specialization-seed')



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
        let organization  = await UserModel.findOne({ phone: body.phone }).lean();
        if( !organization ){
            organization = await OrganizationModel({ 
                registration: body?.registration,
                organizationType: body?.source === 'Hospital' ? 'Department' : 'Clinic',
                tab: {
                    step: body?.tab,
                    isComplete: true
                },
                name: body?.name,
                email: body?.email,
            }).save()

            let user = await UserModel({
                phone: body?.phone,
                organizationId: organization._id,
                primary: true,
                userType: body?.source === 'Hospital' ? "DP" : "CL",
            }).save()

            let returnObj = {
                _id: organization._id,
                userId: user._id,
                tab: organization.tab
            }
            
            return Success({ message: 'Successfully created', organization: returnObj })
        } else {
            return Error({ message: 'Already created', organization: returnObj })
        }
        
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}

const createHospital = async ( body, userInfo ) => {
    try{ 
        let organization  = await UserModel.findOne({ phone: body.phone }).lean();
        if( !organization ){
            organization = await OrganizationModel({ 
                registration: body?.registration,
                organizationType: 'Hospital',
                tab: {
                    step: body?.tab,
                    isComplete: true
                },
                name: body?.name,
                email: body?.email,
            }).save()

            let user = await UserModel({
                phone: body?.phone,
                organizationId: organization._id,
                primary: true,
                userType: "HL",
            }).save()

            let returnObj = {
                _id: organization._id,
                userId: user._id,
                tab: organization.tab
            }
            
            return Success({ message: 'Successfully created', organization: returnObj })
        } else {
            return Error({ message: 'Already created', organization: returnObj })
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

        if( ['DR', 'PT'].includes(user.userType) ){
            query = { organizationId: ObjectId(body?.organizationId || user?.organizationId)   }
        }

        let doctors = await UserModel.aggregate([
            {
                $match: { userType: 'DR', isActive: true, ...query, primary: false },
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


const getPatientByNumber = async ( body, user ) => {
    try{
        if( user.userType !== 'DR') return Error({ message: 'You are not access' })
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

const organizationDetails = async ( body, user, file ) => {
    try{
        let detail = JSON.parse(JSON.stringify(body))
        if( detail ) detail = JSON.parse(detail.data)

        if( detail?.specialization?.length ) detail.specialization = detail?.specialization?.map( s => ({ name: s.name, id: s.value }) )


        await OrganizationModel.updateOne({ _id: detail._id}, {
            fee: detail?.fee,
            specialization: detail?.specialization,
            tab: { step: detail?.tab, isComplete: true },
            address: detail?.address, 
            photo: file?.filename
        })

        return Success({ message: 'Details saved successfully' })
    } catch(error){ console.log(error) }
}

const patientSignUp = async ( body, user ) => {
    try{
        const otp = randomOtp()
    
        let user = await UserModel.findOne({ phone: body?.phone, $or: [{ primary: true }, {  userType: { $in: ['SA', 'MR', 'PT'] }, primary: false}]})
        if(user){
            await UserModel.updateOne({ phone: body?.phone }, { 'twoFactor.otp': otp })
        } else {
            user = await UserModel({ phone: body.phone, twoFactor: { otp }, userType: body?.source === 'department' ? 'DR' : 'PT' }).save()
        }
        
        let response = await smsService(`your otp is ${ otp } `, body.phone)

        let message = 'OTP Sent to your phone.'
        if( response.status_code === 411 ) message = response?.message

        return Success({ message , user })
    } catch(error){ console.log(error) }
}

const validateOtp = async ( body ) => {
    try{
        console.log('>>>>>', body)
        let user = await UserModel.findOne({_id: body?.userId }).populate('organizationId')
        if( user?.twoFactor?.otp === body?.otp ){
            await UserModel.updateOne({_id: user._id}, { 'twoFactor.otp':  0 })
            let token = createToken(user._id)
            return Success({ user, message: 'Your mobile number is verified.', token})
        } else {  return Error({ message: 'Invalid OTP!' }) }
    } catch(error){ console.log(error) }
}

const allSpecializations = async ( body ) => {
    try{
       let specializations = specialization.data 
       return Success({ specializations })
    } catch(error){ console.log(error) }
}

const getAllClinics = async ( body ) => {
    try{
       let clinics = await OrganizationModel.find({ organizationType: 'CL',  })
       return Success({ clinics })
    } catch(error){ console.log(error) }
}

const clinicDetails = async ( body ) => {
    try {
        let today = new Date
        today.setHours(0,0,0,0)

        let doctors = await UserModel.aggregate([
            {
                $match: {
                    organizationId: ObjectId(body?._id),
                }
            },
            {
                $lookup: {
                    from: 'appointments',
                    let: { 'doctor': '$_id' },
                    pipeline:[
                        {
                            $match: {
                                $expr: {
                                    $eq: ['$doctorId', '$$doctor'],
                                },
                                createdAt: { $gte: today },
                                status: 'waiting',
                            }
                        },
                    ],
                    as: 'appointment'
                }
            },
            {
                $project: {
                    fullName: 1,
                    phone: 1,
                    photo: 1,
                    token: {$first: '$appointment.token'},
                }
            }
        ])

        let detail = await OrganizationModel.findOne({ _id: ObjectId(body?._id)})
        
        let clinicDetail = { detail , doctors}

       return Success({ clinicDetail })
    } catch(error){ console.log(error) }
}

const getOrganization = async ( body ) => {
    try{
       let organization = await OrganizationModel.findOne({ _id: body?.RID })

       return Success({ organization })
    } catch(error){ console.log(error) }
}

const waitingList = async ( body, user ) => {
    try{
        let today = new Date()
        today.setHours(0,0,0,0)

       let appointment = await AppointmentModel.aggregate([
            {
                $match: {
                    doctorId: ObjectId(body._id),
                    createdAt: {
                        $gte:  today
                    },
                    status: 'waiting',
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            { $unwind: '$user' },
            {
                $project: {
                    token: 1,
                    fullName: '$user.fullName',
                    phone: '$user.phone',
                    address: '$user.address'
                }
            },
            { 
                $sort: { 
                    createdAt: -1
                }
            }
       ])

       return Success({ appointment })
    } catch(error){ console.log(error) }
}

module.exports = {
    logIn,
    signUp,
    sessionInfo,
    createClinic,
    appointmentDoctors,
    getPatientByNumber,
    getUserByEmail,
    organizationDetails,
    patientSignUp,
    validateOtp,
    allSpecializations,
    getAllClinics, 
    clinicDetails,
    getOrganization,
    waitingList,
    createHospital,
}