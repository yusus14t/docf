const { Schema, model} = require('mongoose');

const ticketSchema = new Schema({
    title: { type: String },
    ticketNo: { type: String },
    senderId: { type: Schema.Types.ObjectId, ref:'user' },
    description:  { type: String },
    status: { type: String, enum: [ 'send', 'recieved', 'process', 'resolve' ], default: 'send' },
    createdBy:  { type: Schema.Types.ObjectId, ref:'user' },
},{ timestamps: true })

module.exports = model( 'ticket', ticketSchema)