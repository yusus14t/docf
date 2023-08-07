import { SERVER_URL } from "../configs/env"

let events 
(() => {
    try{
        events = new EventSource(`${ SERVER_URL }/api/stream`)     
        events.addEventListener('open', ( data ) => console.log( 'connection open', data ) )
        events.addEventListener('error', ( error ) => console.log( 'event error', error ) )
    } catch(error){ console.log(error) }
})()

export default events;