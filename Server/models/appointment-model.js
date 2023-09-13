const { Schema, model} = require('mongoose');

const appointmentSchemna = new Schema({
    token: { type: String },
    userId: { type: Schema.Types.ObjectId, ref:'user' },
    departmentId:  { type: Schema.Types.ObjectId, ref:'organization' },
    createdBy:  { type: Schema.Types.ObjectId, ref:'user' },
    status: { type: String, enum: ['waiting', 'cancel', 'complete', 'unreached'], default: 'waiting' },
    payment: {
            isPaid: { type: Boolean, default: false },
            amount: { type: Number, defaut: 0 },
            transactionId: { type: String },
            date: { type: Date }, 
        },
},{ timestamps: true })

module.exports = model( 'appointment', appointmentSchemna)