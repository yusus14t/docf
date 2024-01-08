/******************* Backup System *************** */

// Dump Data 
// mongodump --db AcadTech --out  //for json export  
// mongodump --db AcadTech --gzip > db.gz  //for gzip export  

// Restore Gzip File in Mongo DB 
// mongorestore --gzip --archive=bckup_12_12_2023_13.gz

// Before starting you must be to installed mongodump  


const cron = require('node-cron');
const { exec } = require('child_process');
const { uploadToBucket, smsService } = require('../constants/utils');
const path = require('path');
const fs = require('fs')

console.log('start cron job')
const cronSchedule = cron.schedule('0 */2 * * *', function () {

    // 0 * * * * for every hour

    // Create Backup Name With Date Time
    // Name Format  db_{ day }_{ month }_{ year }_{ hour } db_12_11_2023_13
    
    let date = new Date()
    const backupName = `db_${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}_${ date.getHours()}.gz`
    
    exec( `mongodump --db AcadTech  --gzip --archive > ${__dirname}/${ backupName }`, async (error, stdout, stderr) => {
        if( error ){
            console.log('error', error)

            cronSchedule.stop()
            fs.unlinkSync( path.join( __dirname, backupName ) )
            await smsService(`Warning: Your data will not be backup `, '8474986168')
            return
        }
    
        if( stderr !== "" )   console.log('stderr: ', stderr )
    
        console.log(`Backup Complete ${ backupName }`)
        await uploadToBucket( backupName, path.join( __dirname, backupName ), process.env.BACKUP_DIRECTORY )
        console.log(`Backup Uploaded ${ backupName }`)
    })
});




