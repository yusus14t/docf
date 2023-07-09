const { Schema, model} = require('mongoose');

const departmentSchema = new Schema({
    organizationId: { type: Schema.Types.ObjectId, ref:'organization' },
    room: { type: String },
    name: { type: String },
    createdBy:  { type: Schema.Types.ObjectId, ref:'user' },
    timing: [
        { 
            day: { type: String },
            open: { type: String },
            close: { type: String },
        }
    ]
},{ timestamps: true })

module.exports = model( 'department', departmentSchema)