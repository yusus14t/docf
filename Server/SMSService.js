
const cron = require('node-cron');
const organizationModel = require('./models/organization-model');
const { smsService } = require('./constants/utils');


console.log('Start sms service')
const cronSchedule = cron.schedule('0 8 * * *', async function () {

    try{
        const next5Day = new Date()
        next5Day.getHours(0, 0, 0, 0)
        next5Day.setDate( next5Day.getDate() + 3 )
        
        const prev3Day = new Date()
        prev3Day.setHours(0, 0, 0, 0)
        prev3Day.setDate( prev3Day.getDate() - 3 )
    
        let organizations = await organizationModel.find({
            organizationType: {
                $in: [ 'Clinic', 'Hospital' ]
            },
            "billing.expire": {
                $gte: prev3Day,
                $lte: next5Day
            }
        }, { name: 1, phone: 1, billing: 1 })

        const pre_message = 'Your Doctortime subscription is expiring soon. Renew now to continue uninterrupted access to our valuable healthcare services and appointments'
        const post_message = 'Your Doctortime subscription is expired. Renew now to continue uninterrupted access to our valuable healthcare services and appointments'
        
        for( let organization of organizations ){
            let check = new Date(organization.billing.expire) < new Date()
            let response = await smsService( check ? post_message : pre_message , '8273237781')
            
            console.log('organizations', check ? "post": "pre", response?.message)
        }

        cronSchedule.stop()

    } catch(error){ console.log(error) }
})
