const { Schema, model} = require('mongoose');

const dealSchema = new Schema({
    organizationId: { type: Schema.Types.ObjectId, ref:'organizaion' },
    price: { type: String },
    details: { type: String, },
    createdBy:  { type: Schema.Types.ObjectId, ref:'user' },
},{ timestamps: true })

module.exports = model( 'deals', dealSchema)