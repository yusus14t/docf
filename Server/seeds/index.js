const mongoose = require('mongoose');
const UserSeed = require('../seeds/user-seed');

// Database Connection
mongoose.set('strictQuery', false)

mongoose.connect(process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/AcadTech');
const database = mongoose.connection
database.once('connected', () => console.log('Database Connected') )

// Registered Seeds
const seeds = [
    { name: 'user', function: () => UserSeed.user.function() }
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



