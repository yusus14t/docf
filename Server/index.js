const express = require('express')
const app = express();
const routes = require('./routes/index');
const cors = require('cors');
const env = require('dotenv/config');
const mongoose = require('mongoose');
const {logIn, signUp} = require('./controllers/common-controller')

//  Data Base Connection
mongoose.set('strictQuery', false)

mongoose.connect(process.env.DATABASE_URL);

const database = mongoose.connection
database.on('error', (error) => console.log(error) )
database.once('connected', () => console.log('Database Connected') )

app.use(express.json());
app.use(cors({ origin: '*' }))

// All Routes
app.use('/api', routes);

// 404 Route
app.get('*', ( req, res ) => res.send('Sorry Api Not Found'))

app.listen(process.env.PORT || 4000 , () => console.log(`Run AcadTech Server http://localhost:${process.env.PORT || 4000} .....`))