import { useState } from "react"
import OutsideWrapper from "./OutsideWrapper";
import { Link } from "react-router-dom";

export const Item = ({ children, isActive, onClick = () => {}, to = null,  ...props }) => {
    return (
        !to ? <div className={`custom-dropdown-item cursor-pointer text-start ${isActive && 'custom-dropdown-item-active'}`}  {...props}  onClick={() => { onClick();
            document.getElementById('dropdown-toogle').click()
        }} >
            {children}
        </div>

        :
        <Link to={to} className={`custom-dropdown-item cursor-pointer text-start d-flex ${isActive && 'custom-dropdown-item-active'}`}  {...props}  onClick={() => { onClick();
            document.getElementById('dropdown-toogle').click()
        }} >
            {children}
        </Link>
    )
}

export const Dropdown = ({ toggle, children, text = "Dropdown" }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <OutsideWrapper callback={() => setIsOpen(false)}>
            <div className="position-relative">
                <div id="dropdown-toogle" onClick={() => setIsOpen(!isOpen)}>
                    {toggle}
                </div>
                <div className={`custom-dropdown ${!isOpen && 'd-none'}`} style={{ width: 'max-content'}}>
                    <p className="m-2 text-muted">{text}</p>
                    {children}
                </div>
            </div>
        </OutsideWrapper>
    )
}
