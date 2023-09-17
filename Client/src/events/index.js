import { SERVER_URL } from "../configs/env"

let events 
(() => {
    try{
        events = new EventSource(`${ SERVER_URL }/api/stream`)     
    } catch(error){ console.log(error) }
})()

export default events;