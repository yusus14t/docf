const { Error, Success } = require('../constants/utils');
const UserModel = require('../models/user-model');
const NotificatioModel = require('../models/notification-model');
const ObjectId = require('mongoose').Types.ObjectId


const allNotification = async ( body, user ) => {
    try{
        console.log('notifications its work')

        let query = { senderId: user._id }
        let notifications = await NotificatioModel.find(query).populate('assigneeIds', 'firstName lastName')
        return Success({ notifications })
    } catch(error){ 
        console.log(error) 
    }
}


const addNotification = async ( body, user ) => {
    try{
        let notifications = null
        if( user.userType !== 'SA' ) return Error({ message: 'Not access to create notification.'}) 

        body.assigneeIds = body.assignedTo.map( assignee => assignee._id)
        body.isActive = Boolean(body.isActive)
        body.priority = body.priority.value
        
        notifications = await NotificatioModel({
            ...body, status: 'send',
            senderId: user._id,
            createdBy: user._id
        }).save()
        
        return Success({ message: 'Successfully created notification.' ,notifications })
    } catch(error){ 
        console.log(error) 
    }
}

const deleteNotification = async ( body, user ) => {
    try{
        console.log(body)
        if( user.userType !== 'SA' ) return Error({ message: 'Not access to delete'})
        await NotificatioModel.deleteOne({_id: body._id })
        return Success({ message: 'Successfully deleted notification.' })
    } catch(error){ 
        console.log(error) 
    }
}

module.exports = {
    allNotification,
    addNotification,
    deleteNotification,
}