const bcrypt = require('bcrypt');
const { Error } = require('../constants/utils')
const UserModel = require('../models/user-model')

// function pattern 
// const createOrganization = async () => {
//     try{ 

//     } catch(error){ 
//         console.log(error) 
//         return Error({ message: 'Something went wrong!' })
//     }
// }

const checkDuplicateEmail = async ( body ) => {
    try{ 
        //
    } catch(error){ 
        console.log(error) 
        return Error({ message: 'Something went wrong!' })
    }
}

const createOrganization = async ( body ) => {
    try{ 
        //
    } catch(error){ 
        console.log(error) 
        return Error({ message: 'Something went wrong!' })
    }
}

const signUp = async ( body ) => {
    try {
        // salt $2b$10$sXjk6shioL8PMiiqII09tO
        const salt = await bcrypt.genSalt(10)

        if( body.password === body.confirmPassword ) body.password = await bcrypt.hash( body.password, salt )
        else return Error({ message: 'Incorrect confirm password' })

        await UserModel({ ...body }).save()

        return { message: 'Account created successfully' } ;
    } catch ( error ) { 
        console.log(error) 
        let c = Error();
        return 
    }
}

const logIn = async ( body ) => {
    try{ 
        //
    } catch(error){ 
        console.log(error) 
        return Error({ message: 'Something went wrong!' })
    }
}

module.exports = {
    signUp,
    createOrganization,
    checkDuplicateEmail,
    logIn,
}