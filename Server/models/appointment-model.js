const { Schema, model} = require('mongoose');

const appointmentSchemna = new Schema({
    token: { type: String },
    userId: { type: Schema.Types.ObjectId, ref:'user' },
    doctorId:  { type: Schema.Types.ObjectId, ref:'user' },
    createdBy:  { type: Schema.Types.ObjectId, ref:'user' },
    status: { type: String, enum: ['waiting', 'cancel', 'complete', 'unreached'], default: 'waiting' }
},{ timestamps: true })

module.exports = model( 'appointment', appointmentSchemna)