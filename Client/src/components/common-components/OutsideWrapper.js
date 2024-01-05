import {  useEffect, useRef } from "react"

export default ({ callback = () => {}, children }) => {
    const wrapperRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleOutside)
        return() => document.removeEventListener('mousedown', handleOutside)
    }, [])

    const handleOutside = (event) => {
        if(!wrapperRef.current.contains(event.target)){
            callback()   
        }
    }

    return(
        <div ref={wrapperRef} style={{ display: 'inline-flex'}}>
            {children}
        </div>
    )
}