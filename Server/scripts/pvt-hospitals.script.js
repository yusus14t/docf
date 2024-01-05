
require('../connection/db.connection');
const OrganizationModel = require('../models/organization-model');


( async () => {
    console.log('Start Script......')

    // Write Script Logic 

    await OrganizationModel.updateMany({ organizationType: 'Hospital' }, { $set: { hospitalType: 'pvt' } })
    await OrganizationModel.updateMany({ }, { $set: { paymentOption: true } })

    console.log('End Script......')
    process.exit()
})()