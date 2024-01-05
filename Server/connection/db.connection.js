// require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/AcadTech');
mongoose.set('strictQuery', false)

const database = mongoose.connection
database.on('error', (error) => console.log(error) )
database.once('connected', () => console.log('Database Connected') )
