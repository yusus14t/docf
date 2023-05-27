const { Schema, model} = require('mongoose');

const notificationSchema = new Schema({
    title: { type: String },
    senderId: { type: Schema.Types.ObjectId, ref:'user' },
    assigneeIds:  [{ type: Schema.Types.ObjectId, ref:'user' }],
    message:  { type: Schema.Types.ObjectId, ref:'user' },
    status: { type: String, enum: [ 'send', 'cancel', 'seen' ], default: 'send' },
    isActive: { type: Boolean, default: true },
    createdBy:  { type: Schema.Types.ObjectId, ref:'user' },
},{ timestamps: true })

module.exports = model( 'notification', notificationSchema)