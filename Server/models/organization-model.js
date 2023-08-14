const { Schema, model} = require('mongoose');

const organizationSchema = new Schema({
    registration: { type: String },
    name: {  type: String },
    email: { type: String },

    phone: { type: String },
    address: { type: String },
    organizationType: { type: String, enum: [ 'Clinic', 'Department', 'Hospital', 'Ultrasound' ] },
    photo: { type: String, default: null },
    specialization: [
        {
            name: { type: String },
            id: { type: String }
        }
    ],
    services: [
        {
            name: { type: String },
            id: { type: String }
        }
    ],
    fee: { type: String, default: '0' },
    room: {  type: String },
    timing: [
        { 
            day: { type: String },
            open: { type: String },
            close: { type: String },
        }
    ],

    isActive: { type: String, default: false },
    tab: {
        step: { type: String },
        isComplete: { type: Boolean },
    },
    createdBy: { type: Schema.Types.ObjectId },

},{ timestamps:  true })

module.exports = model('organization', organizationSchema)