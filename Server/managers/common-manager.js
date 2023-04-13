const { Error, Success, encryptPassword, comparePassword, createToken } = require('../constants/utils');
const UserModel = require('../models/user-model')

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

const createOrganization = async ( body ) => {
    try{ 
        //
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

const getAllDoctors = async () => {
    try{ 
        let doctors = await UserModel.find({ userType: 'DR', isActive: true }) 
        return Success({ doctors })
    } catch(error){ 
        console.log(error) 
        return Error();
    }
}

module.exports = {
    logIn,
    signUp,
    createOrganization,
    checkDuplicateEmail,
    getAllDoctors,
}