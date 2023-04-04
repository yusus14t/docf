const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, type: String },
    age: {  type: Number },
    phone: { type: Number },
    address: { type: String },
    gender: { type: String },
    Nationalty: { type: String },
    phone: { type: Number, min: 10, max: 12 },
    photo: { type: String, default: null },
    password: { type: String, default: null },
    organizationId: { type: Schema.Types.ObjectId,  ref: 'organization' },
    relation:[
        {
            relationType: { type: String },
            name: { type: String },
            phone: { type: Number, min: 10, max: 12 },
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
        account: { type: Number },
        isfc: { type: String },
    }
})

module.exports = model('user', userSchema)