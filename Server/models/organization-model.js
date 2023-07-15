const { Schema, model} = require('mongoose');

const organizationSchema = new Schema({
    registration: { type: String },
    name: { required: true, type: String },
    email: { required: true, type: String },

    phone: { type: String },
    address: { type: String },
    organizationType: { type: String, enum: [ 'Clinic', 'Department', 'Hospital' ] },
    photo: { type: String, default: null },
    specialization: [
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
    // parking: { type: String, enum: [ 'available', 'unAvailable' ] },

    isActive: { type: String, default: false },
    tab: {
        step: { type: String },
        isComplete: { type: Boolean },
    },

},{ timestamps:  true })

module.exports = model('organization', organizationSchema)