const { Error, Success } = require('../constants/utils');
const UserModel = require('../models/user-model');
const NotificatioModel = require('../models/notification-model');


const allNotification = async ( body, user ) => {
    try{
        console.log('notifications its work')

        let query = { userId: user._id }

        // if( user.userType === 'SA' ) {
        //     //
        // } 

        let notifications = await NotificatioModel.find(query)
        console.log(notifications)
        return Success({ notifications })
    } catch(error){ 
        console.log(error) 
    }
}

module.exports = {
    allNotification,
}