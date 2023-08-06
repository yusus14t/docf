const { Error, Success } = require('../constants/utils');
const UserModel = require('../models/user-model');
const NotificatioModel = require('../models/notification-model');
const ObjectId = require('mongoose').Types.ObjectId


const allNotification = async ( body, user ) => {
    try{
        let query = {
           $or : [ { senderId: user?._id }, { assigneeIds: user?._id }]  
        }

        let notifications = await NotificatioModel.find(query).populate('assigneeIds', 'firstName lastName')
        let unseenNotificationCount = notifications.filter( notification => notification.status === 'unseen' )?.length
        return Success({ notifications, unseenNotificationCount })
    } catch(error){ 
        console.log(error) 
    }
}


const addNotification = async ( body, user ) => {
    try{
        let notifications = null
        if( user.userType !== 'SA' ) return Error({ message: 'Not access to create notification.'}) 

        body.assigneeIds = body.assignedTo.map( assignee => ObjectId(assignee._id))
        body.isActive = Boolean(body.isActive)
        body.priority = body.priority?.value || 'low'
        
        notifications = await NotificatioModel({
            ...body, status: 'unseen',
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
        if( user.userType !== 'SA' ) return Error({ message: 'Not access to delete'})
        await NotificatioModel.deleteOne({_id: ObjectId(body._id) })
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