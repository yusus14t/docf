import {  forwardRef, useEffect, useRef } from "react"

export default ({ callback = () => {}, children, ...props }) => {
    const wrapperRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleOutside)
        return() => document.removeEventListener('mousedown', handleOutside)
    }, [])

    const handleOutside = (event) => {
        const toggler = document.getElementById('navToggler')
        if(!wrapperRef.current.contains(event.target) && !toggler?.contains(event.target) ){
            callback()   
        }
    }

    return(
        <div ref={wrapperRef} style={{ display: 'inline-flex'}} { ...props } >
            {children}
        </div>
    )
}