
require('../connection/db.connection');
const OrganizationModel = require('../models/organization-model');
const ObjectId = require('mongoose').Types.ObjectId

( async () => {
    console.log('Start Script......')

    // Write Script Logic 

    await OrganizationModel.updateMany({ organizationType: 'Hospital' }, { $set: { hospitalType: 'pvt' } })
    await OrganizationModel.updateMany({ }, { $set: { paymentOption: true } })

    await OrganizationModel.updateOne({ _id: ObjectId('654bc57f7879a9d12e8d990b') }, { $set: { hospitalType: 'gov' } })

    console.log('End Script......')
    process.exit()
})()