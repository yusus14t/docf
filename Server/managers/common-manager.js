const { Error, Success, encryptPassword, comparePassword, createToken, smsService } = require('../constants/utils');
const UserModel = require('../models/user-model');
const OrganizationModel = require('../models/organization-model');
const AppointmentModel = require('../models/appointment-model');
const { randomOtp } = require('../constants/utils')
const ObjectId = require('mongoose').Types.ObjectId
const { specialization } = require('../seeds/specialization-seed')



const sessionInfo = async ( body, user ) => {
    try{
        let info = await UserModel.findOne({ _id: user._id }).populate('organizationId')
        return Success({ user: info })
    }catch(error){ console.log(error) }    
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
                phone: body?.phone,
                createdBy: userInfo?._id
            }).save()

            let user = await UserModel({
                phone: body?.phone,
                organizationId: organization._id,
                primary: true,
                isActive: true,
                userType: body?.source === 'Hospital' ? "DP" : "CL",
                createdBy: userInfo?._id,
                twoFactor: {
                    isVerified: true,
                    otp: 0
                }
            }).save()

            let returnObj = {
                _id: organization._id,
                userId: user._id,
                tab: organization.tab
            }
            
            return Success({ message: 'Successfully created', organization: returnObj })
        } else {
            return Error({ message: 'Already created' })
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
                createdBy: userInfo?._id,
            }).save()

            let user = await UserModel({
                phone: body?.phone,
                organizationId: organization._id,
                primary: true,
                userType: "HL",
                isActive: true,
                createdBy: userInfo?._id,
                twoFactor: {
                    isVerified: true,
                    otp: 0
                }
            }).save()

            let returnObj = {
                _id: organization._id,
                userId: user._id,
                tab: organization.tab
            }
            
            return Success({ message: 'Successfully created', organization: returnObj })
        } else if( body.isLogin ) {
            await OrganizationModel.updateOne({ _id: organization.organizationId }, { 
                registrationNo: body?.registrationNo, 
                email: body?.email,
                name: body?.name,
            })
            await UserModel.updateOne({ _id: organization._id }, { isActive: true })

            organization =  await UserModel.findOne({ _id: organization._id }).populate('organizationId')
            return Error({ message: 'Already created', isActive: true, organization })
        } else {
            return Error({ message: 'Already created' })
        }
        
    } catch(error){ 
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


const appointmentDepartments = async ( body, user ) => {
    try{
        let departments = await UserModel.aggregate([
            {
                $match: {
                    primary: true,
                    $or: [
                        {
                            hospitalId: user.organizationId,
                            userType: 'DP'
                        },
                        { 
                            organizationId: user?.organizationId,
                            userType: 'CL' 
                        }
                    ]
                }
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
                    name: 1,
                    clinic: { $first: '$clinic.name' },
                    specialization: '$specialization',
                    phone: 1,
                    organizationId: 1,
                }
            }
        ])
        return Success({ message: 'Successfull fetch doctor', departments })
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}


const getPatientByNumber = async ( body, user ) => {
    try{
        if( user.userType !== 'DR') return Error({ message: 'You are not access' })
        let patient = await UserModel.find({ phone: body.phone, userType: 'PT' },{ name: 1, phone: 1, gender: 1, bloodGroup: 1, address: 1 })
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
            photo: file?.filename,
            services: detail?.services ,
            timing: detail?.timing
        })

        return Success({ message: 'Details saved successfully' })
    } catch(error){ console.log(error) }
}

const signUp = async ( body, user ) => {
    try{
        const otp = randomOtp()
    
        let user = await UserModel.findOne({ phone: body?.phone, $or: [{ primary: true }, {  userType: { $in: ['SA', 'MR', 'PT'] }, primary: false}]})
        if(user){
            await UserModel.updateOne({ phone: body?.phone }, { 'twoFactor.otp': otp })
        } else {
            user = await UserModel({ phone: body.phone, twoFactor: { otp },  primary: true }).save()
        }

        console.log('----------> OTP ', otp)
        
        let response = { message: 'otp Sent'}
        if( process.env.ENVIRONMENT !== 'development' ){
            response = await smsService(`your otp is ${ otp } `, body.phone)
            if(!response?.message) return Error({ message: `Network Connection Refuse`, user })
            if( response?.status_code === 411 ) return Error({ message: `${response?.message} - ${otp}`, user })
        }

        return Success({ message: `${response?.message} - ${ otp }`, user })
    } catch(error){ console.log(error) }
}

const validateOtp = async ( body ) => {
    try{
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
const oneSpecialization = async (body) => {
  try {
    let specializations = specialization.data.find( spe => spe.id === body.id);
    return Success({ specializations });
  } catch (error) {
    console.log(error);
  }
};

const getAllClinics = async (body) => {
    try {
        console.log('body', body)
        let clinics = await OrganizationModel.find({
        
                organizationType: {$in : ['Clinic', 'Department']},
                ...(body?.filter?.specialization ? { 'specialization.name': body?.filter?.specialization } : {})
            
        })
        return Success({ clinics })
    } catch (error) { console.log(error) }
}

const clinicDetails = async ( body ) => {
    try {
        let today = new Date
        today.setHours(0,0,0,0)

        let detail = await OrganizationModel.aggregate([
            {
                $match: {
                    _id: ObjectId(body?._id),
                }
            },
            {
                $lookup: {
                    from: 'appointments',
                    let: { 'department': '$_id' },
                    pipeline:[
                        {
                            $match: {
                                $expr: {
                                    $eq: ['$departmentId', '$$department'],
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
                    name: 1,
                    phone: 1,
                    photo: 1,
                    email: 1,
                    specialization: 1,
                    token: {$first: '$appointment.token'},
                    address: 1,
                    fee: 1,
                    services: 1,
                    timing: 1,
                }
            }
        ])

        

       return Success({ detail: detail[0] })
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
                    departmentId: ObjectId(body.id),
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
                    name: '$user.name',
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

const setUserType = async ( body ) => {
    try {
        let userTypes = {
            'hospital': 'HL',
            'clinic': 'CL',
            'patient': 'PT',
        }
        let userType = null
        let organization = null
        if (body.type === 'hospital') {
            userType = 'HL'
            if( !body?.organizationId ){
                organization = await OrganizationModel({ organizationType: 'Hospital' }).save()
            }
        }
        else if ([ 'clinic' ].includes(body.type)) {
            userType = userTypes[body.type]
            if( !body?.organizationId ){
                organization = await OrganizationModel({ organizationType: body.type === 'clinic' ? 'Clinic' : 'Ultrasound' }).save()
            }
        }
        else userType = 'PT'

        let user = await UserModel.findOneAndUpdate({ _id: body?.userId }, { userType, 'twoFactor.isVerified': true, organizationId: organization?._id  })
        user = JSON.parse(JSON.stringify(user))
        user.userType = userType

        return Success({ user })
    } catch (error) { console.log(error) }
}

const getAllHospitals = async ( body ) => {
    try{
       let organization = await OrganizationModel.find({ organizationType: 'Hospital'}, { name: 1, specialization: 1, email: 1, address: 1, photo: 1 })

       return Success({ organization })
    } catch(error){ console.log(error) }
}

const hospitalDetails = async ( body ) => {
    try{
       let details = await OrganizationModel.findOne({ _id: body.id })
       let user = await UserModel.findOne({ organizationId: body.id }, { phone: 1 })
       details['phone'] = user?.phone

       let departments = await UserModel.find({ hospitalId: body.id }, { organizationId: 1 })
       .populate('organizationId', 'name room specialization photo')
       return Success({ details, departments })
    } catch(error){ console.log(error) }
}

const patientAppointments = async ( body, user ) => {
    try{
        let today = new Date()
        today.setHours(0,0,0,0)
       let appointments = await AppointmentModel.find({ userId: ObjectId(user._id), ...( body?.isToday ? { createdAt: { $gte: today }} : {}) })
       .populate('departmentId', 'name address')
       return Success({ appointments })
    } catch(error){ console.log(error) }
}

const search = async ( body, user ) => {
    try{
        if( !body?.search ) return Success({ searchData: [] })

        let aggregateQuery = [
            {
                $match: {
                    organizationType: {
                        $in: [ 'Hospital', 'Clinic' ]
                    },
                    $and: [
                        body?.fee > 0 ? { fee: { $lte: parseInt(body?.fee) }} : {},
                        body?.city ? { address: { $regex: body?.city, $options: 'i' } } : {},
                        body?.specialization ? { 'specialization.name': body?.specialization } : {},
                        body?.type ? { organizationType: body?.type } : {},
                    ]
                }
            },
           
        ]

        if(body?.search) aggregateQuery.push({
            $match: {
                name: {
                    $regex:  body.search,
                    $options: 'i'
                }
            }
        })
        
        let searchData = await OrganizationModel.aggregate(aggregateQuery)        
       return Success({ searchData })
    } catch(error){ console.log(error) }
}

module.exports = {
  logIn,
  signUp,
  sessionInfo,
  createClinic,
  appointmentDepartments,
  getPatientByNumber,
  getUserByEmail,
  organizationDetails,
  validateOtp,
  allSpecializations,
  getAllClinics,
  clinicDetails,
  getOrganization,
  waitingList,
  createHospital,
  setUserType,
  getAllHospitals,
  hospitalDetails,
  patientAppointments,
  search,
  oneSpecialization,
};