import { SERVER_URL } from "../configs/env"

var eventsource 
(() => {
    try{
        console.log('Event Source file work')
        eventsource = new EventSource(`${ SERVER_URL }/api/stream`)     
        eventsource.addEventListener('open', ( ) => console.log( 'connection open' ) )
        eventsource.addEventListener('error', ( ) => console.log( 'event error' ) )
    } catch(error){ console.log(error) }
})()

export default eventsource;