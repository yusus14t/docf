const mongoose = require('mongoose');
const UserSeed = require('../seeds/user-seed');
const AddressSchema = require('../models/address-model');
const fs = require('fs');
const path = require('path')


// Database Connection
mongoose.set('strictQuery', false)

mongoose.connect(process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/AcadTech');
const database = mongoose.connection
database.once('connected', () => console.log('Database Connected') )

const upload = async () => {
    try{
        await AddressSchema.deleteMany({})
        let jsonData = fs.readFileSync(path.join(__dirname, '/check.json'), 'utf-8')
        let data = JSON.parse(jsonData)
        console.log(data)
        // await AddressSchema.insertMany(data['Sheet1'])
    } catch( error ) { console.log(error) }
}

// Registered Seeds
const seeds = [
    { name: 'user', function: () => UserSeed.user.function() },
    { name: 'pincodes', function: () => upload() }
]

let args = process.argv.slice(2)

const Seeding = async () => {
    seeds.map( seed => {
        if( !args.length || args.includes(seed.name) ){
            console.log(`Seeding ${ seed.name } ....`)
            seed.function()
        }
    })
}

Seeding();

// node seeds



