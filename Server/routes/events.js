// const { EventEmitter } = require('events')

// const eventEmitter = new EventEmitter()
// const EventHandler = ( req, res ) => {
//     res.setHeader('Content-Type', 'text/event-stream');
//     res.setHeader('Cache-Control', 'no-cache');
//     res.setHeader('Connection', 'keep-alive');
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const addAppointment = ( data ) => {
//         console.log('its work', data)
//         res.send({
//             event: data.event,
//             data: JSON.stringify(data)
//         })
//     }

//     eventEmitter.on('addAppointment', (data) => console.log('<><><><><><><><>', data))
//     req.on('close', () => {
//         eventEmitter.off('addAppointment', addAppointment)
//     })
// }

// module.exports = {
//     EventHandler,
//     eventEmitter,
// }