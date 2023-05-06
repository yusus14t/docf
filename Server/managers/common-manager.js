const { Error, Success, encryptPassword, comparePassword, createToken } = require('../constants/utils');
const UserModel = require('../models/user-model');
const OrganizationModel = require('../models/organization-model');
const { Mongoose } = require('mongoose');


// function pattern 
// const createOrganization = async () => {
//     try{ 

//     } catch(error){ 
//         console.log(error) 
//         return Error();
//     }
// }

const checkDuplicateEmail = async ( body ) => {
    try{ 
        //
    } catch(error){ 
        console.log(error) 
        return Error();
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

        await UserModel({ ...body }).save()

        return Success({ message: 'Account created successfully', code: 201 }) ;
    } catch ( error ) { 
        console.log(error) 
        return Error();
    }
}

const logIn = async ( body, user1, userId ) => {
    try{
        let user = await UserModel.findOne({ email: body.email })

        if(!user) return Error(message = ' User not found')

        let isValid = await comparePassword(body.password, user.password)
        if(!isValid) return Error({message: 'Invalid Password'})

        let token = createToken(user._id)
        return Success({message: 'Successfull', token, user })
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}

const getAllDoctors = async (body, user) => {
    try{ 
        let query = {}

        // if( body?.source === 'dashboard' && user ){
        //     query['createdBy'] = user._id
        // }

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
                    fullName: {
                        $concat: ['$firstName', ' ', '$lastName']
                    },
                    clinic: { $first: '$clinic.name' },
                    specialization: '$specialization',
                    phone: 1,
                    photo: 1,
                    organizationId: 1,
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
    logIn,
    signUp,
    createClinic,
    checkDuplicateEmail,
    getAllDoctors,
    deleteDoctor
}