const { Schema, model } = require('mongoose');

const websiteImageSchema = new Schema({
    id: { type: String },
    image: { type: String },
    name: { type: String },
}, { timestamps: true })

module.exports = model('websiteImage', websiteImageSchema)