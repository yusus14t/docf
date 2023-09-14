const { Schema, model} = require('mongoose');

const transactionSchema = new Schema({
    status: { type: String },
    merchantId: { type: String },
    transactionId: { type: String },
    amoount: { type: String },
    refrenceId: { type: String },
    appointmentId: { type: Schema.Types.ObjectId, ref: 'appointment' },

},{ timestamps: true })

module.exports = model( 'transaction', transactionSchema)