import { useEffect, useState } from "react"

export const useEvent = (event_name) => {
    const [callbackData, setCallbackData] = useState({})
    useEffect(() => {
        const Source = new EventSource(`http://${window.location.hostname}:5000/api/stream`)
        Source.addEventListener(event_name, function(event){
            setCallbackData(JSON.parse(event.data))
        });

        return(() => Source.removeEventListener(event_name, (e) => console.log('event', e)))
    }, [])

    return(callbackData)
}