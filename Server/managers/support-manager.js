const { Error, Success } = require('../constants/utils');
const UserModel = require('../models/user-model');
const NotificatioModel = require('../models/notification-model');
const TicketModel = require('../models/ticket-model');
const organizationModel = require('../models/organization-model');
const ObjectId = require('mongoose').Types.ObjectId

const createTicket = async (body, user) => {
    try{
        body['title'] = body.related?.value
        if( body.related?.value === 'other' ) body['title'] = body.otherRelated

        let superAdmins = await UserModel.find({ userType: 'SA' }, {_id: 1})
        let superAdminIds = superAdmins.map( admin => admin._id )

        let ticket = await TicketModel({
            ticketNo: '',
            title: body.title,
            description: body.description,
            createdBy: user._id,
            senderId: user._id,
        }).save();
        
        await NotificatioModel({ 
            title: 'New Ticker Raised',
            message: `${user.name} will raised a ticket.`,
            priority: 'high',
            assigneeIds: superAdminIds,
            createdBy: user._id
        }).save()

        return Success({ message: 'Succesfully create create', ticket})
    } catch(error){ console.log(error) }
}

const allTickets = async (body, user) => {
    try{
        let query = {}
        if( !['SA', 'AD'].includes(user.userType) ){
            query = { senderId: user._id }
        }
        let tickets = await TicketModel.find(query).populate('senderId', 'userType phone organizationId name')
        
        for( let ticket of tickets ){
            if( [ 'CL', 'HL', 'DP' ].includes(ticket?.senderId?.userType) ){
                let organization = await organizationModel.findOne({ _id: ticket?.senderId?.organizationId }, { fullName: 1 })
                ticket.senderId.fullName = organization?.fullName
            }
        }
        return Success({ tickets })
    } catch(error){ console.log(error) }
}

module.exports = {
    createTicket,
    allTickets
}