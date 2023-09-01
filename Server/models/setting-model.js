const { Schema, model} = require('mongoose');

const settingSchema = new Schema({
    id: { type: String },
    data: {
        type: Schema.Types.Map,
        of: String
    }
},{ timestamps: true })

module.exports = model( 'setting', settingSchema)