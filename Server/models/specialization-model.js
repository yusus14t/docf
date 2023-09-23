const { Schema, model} = require('mongoose');

const specializationSchema = new Schema({
    id: { type: String },
    name: { type: String },
    icon: { type: String },
    description:  { type: String },
    image: { type: String },
    isDefault: { type: Boolean, default: false }
},{ timestamps: true })

module.exports = model( 'specialization', specializationSchema)