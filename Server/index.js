require('dotenv/config');
const express = require('express')
const app = express();
const routes = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const { smsService } = require('./constants/utils');

// Database Connection 
require('./connection/db.connection')

// Backup System 
if( process.env.ENVIRONMENT === 'production' ) {
  require('./SMSService');
  require('./backup/backup');
}


process.setMaxListeners(0);




app.use(express.json());
// app.use(cors({ origin: ['http://localhost:3000'] }))
app.use(cors({ origin: '*' }))



// Configurations for "body-parser"
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);



// Static Routes
app.use('/images', express.static('./uploads'))
app.use('/api',(req, res, next) => {
    console.log('===>', req.method,  req.originalUrl,  res.statusCode)
    next();
}, routes);



// 404 Route
app.get('*', ( req, res ) => res.send('Sorry Api Not Found'))

app.listen(process.env.PORT || 4000 , () => console.log(`Run AcadTech Server http://localhost:${process.env.PORT || 4000} .....`))