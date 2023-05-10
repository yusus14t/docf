const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { required: true, type: String },
    age: {  type: String },
    address: { type: String },
    gender: { type: String },
    Nationalty: { type: String },
    phone: { type: String,  },
    photo: { type: String, default: null },
    password: { type: String, default: null },
    userType: { type: String, default: 'PT', enum: ['PT', 'MR', 'AN', 'DR'] },
    organizationId: { type: Schema.Types.ObjectId,  ref: 'organization' },
    isActive: { type: Boolean, default: false },
    qualification:{ type: String },
    experience: { type: String },
    specialization: { type: String },
    isPortal: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    relation: [
        {
            relationType: { type: String },
            name: { type: String },
            phone: { type: String  },
        }
    ],

    identity: [
        {
            type: { type: String },
            number: { type: String }, 
        }
    ],

    bank: {
        name: { type: String },
        account: { type: String },
        isfc: { type: String },
    }
})

module.exports = model('user', userSchema)