const { Schema, model} = require('mongoose');

const organizationSchema = new Schema({
    registration: { type: String },
    name: {  type: String },
    email: { type: String },

    phone: { type: String },
    address: { type: String },
    organizationType: { type: String, enum: [ 'Clinic', 'Department', 'Hospital', 'Ultrasound' ] },
    photo: { type: String, default: null },
    qrCode: { type: String, default: null },
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
    fee: { type: Number, default: '0' },
    room: {  type: String },
    timing: [
        { 
            day: { type: String },
            open: { type: String },
            close: { type: String },
            morning: {
                open: { type: String },
                close: { type: String },
            },
            evening: {
                open: { type: String },
                close: { type: String },
            },
        }
    ],
    
    billing: {
        isPaid: { type: Boolean, default: false },
        expire: { type: Date },
        trnsactionId: { type: Schema.Types.ObjectId, ref: 'transaction'},
        isNewPlan: { type: Boolean, default: true },
        plan: { type: String },
    },

    isActive: { type: String, default: false },
    tab: {
        step: { type: String },
        isComplete: { type: Boolean },
    },
    createdBy: { type: Schema.Types.ObjectId },
    bookingStatus: { type: Boolean }, 
    paymentOption: { type: Boolean, default: true }, 
    hospitalType: { type: String, enum: [ 'gov', 'pvt' ], default: "pvt" }
},{ timestamps:  true })

module.exports = model('organization', organizationSchema)