const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()
const EventHandler = ( req, res ) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    });       

    const newAppointment = (data) => {
        res.write("event: new-appointment\n");
        res.write(`data: ${ JSON.stringify(data) }`);
        res.write("\n\n");
    } 

    eventEmitter.on('new-appointment', (data) => newAppointment(data))
}

module.exports = {
    EventHandler,
    eventEmitter,
}