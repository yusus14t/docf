const { Schema, model} = require('mongoose');

const transactionSchema = new Schema(
  {
    status: { type: String },
    id: { type: String },

    merchantId: { type: String },
    transactionId: { type: String },
    amount: { type: String },
    refrenceId: { type: String },
    type: { type: String },
    appointmentId: { type: Schema.Types.ObjectId, ref: "appointment" },
  },
  { timestamps: true }
);

module.exports = model( 'transaction', transactionSchema)