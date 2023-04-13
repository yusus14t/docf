const { Schema, model} = require('mongoose');

const organizationSchema = new Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },

    email: { required: true, type: String },
    gst: { type: Number },

    phone: { type: Number, min: 10, max: 12 },
    workPhone: { type: Number, min: 10, max: 12 },
    address: { type: String },
    organizationType: { type: String, default: 'CL', enum: [ 'CL', 'HL' ] },
    photo: { type: String, default: null },
    additionalDoctors: [
        { type: Schema.Types.ObjectId }
    ],

    bank: {
        name: { type: String },
        account: { type: Number },
        isfc: { type: String },
    }
})

module.exports = model('organization', organizationSchema)