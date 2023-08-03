import { SERVER_URL } from "../configs/env"

var eventsource 
(() => {
    try{
        console.log('Event Source file work')
        // eventsource = new EventSource(`${ SERVER_URL }/api/stream`)     
        eventsource = new EventSource(`/api/stream`)     
        eventsource.addEventListener('open', ( data ) => console.log( 'connection open', data ) )
        eventsource.addEventListener('error', ( error ) => console.log( 'event error', error ) )
    } catch(error){ console.log(error) }
})()

export default eventsource;