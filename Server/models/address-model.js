const { Schema, model} = require('mongoose');

const addressSchema = new Schema({
    PostOfficeName: { type: String, },
    Pincode: { type: String },
    City: { type: String, },
    State: { type: String, },
    District:  { type: String, },
},{ timestamps: true })

module.exports = model( 'address', addressSchema)