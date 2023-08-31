const { Schema, model} = require('mongoose');

const noticeSchema = new Schema({
    organizationId: { type: Schema.Types.ObjectId, ref:'organizaion' },
    title: { type: String },
    description: { type: String, },
    createdBy:  { type: Schema.Types.ObjectId, ref:'user' },
},{ timestamps: true })

module.exports = model( 'notice', noticeSchema)