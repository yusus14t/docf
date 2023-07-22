import { useEffect, useState } from "react"

export const useEvent = () => {
    const [callbackData, setCallbackData] = useState(null)
    useEffect(() => {
        const Source = new EventSource(`http://${window.location.hostname}:5000/api/stream`)
        Source.addEventListener('new-appointment', function(event){
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