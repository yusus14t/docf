const { Schema, model} = require('mongoose');

const organizationSchema = new Schema({
    registration: { type: String , required: true },
    name: { required: true, type: String },
    email: { required: true, type: String },
    gst: { type: String },

    phone: { type: String },
    workPhone: { type: String },
    address: { type: String },
    organizationType: { type: String, default: 'CL', enum: [ 'CL', 'HL' ] },
    photo: { type: String, default: null },
    specialization: [
        {
            name: { type: String }
        }
    ],
    fee: { type: String, default: '0' },
    timing: { type: String },
    offDay: { type: String },
    parking: { type: String, enum: [ 'available', 'unAvailable' ] },

    isActive: { type: String, default: false },
    additionalDoctors: [
        { type: Schema.Types.ObjectId }
    ],

    tab: {
        step: { type: String },
        isComplete: { type: Boolean },
    },

    bank: {
        name: { type: String },
        account: { type: String },
        isfc: { type: String },
    }
})

module.exports = model('organization', organizationSchema)