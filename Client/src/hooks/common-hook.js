import { useEffect, useState } from "react"
import { SERVER_URL } from "../configs/env"

export const useEvent = () => {
    const [callbackData, setCallbackData] = useState(null)
    useEffect(() => {
        const Source = new EventSource(`${ SERVER_URL }/api/stream`)
        Source.addEventListener('new-appointment', function(event){
            console.log('>>>>>>>>>', event)
            setCallbackData(JSON.parse(event.data))
        });
        Source.addEventListener('status', function(event){
            setCallbackData(JSON.parse(event.data))
        });
        Source.addEventListener('re-appointment', function(event){
            setCallbackData(JSON.parse(event.data))
        });

        return(() =>  {
            Source.removeEventListener('new-appointment', (e) => {})
            Source.removeEventListener('re-appointment', (e) => {})
            Source.removeEventListener('status', (e) => {})
        })
    }, [])

    return(callbackData)
}