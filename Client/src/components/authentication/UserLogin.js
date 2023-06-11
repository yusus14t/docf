import React, { useRef } from 'react'
import background from "../../assets.app/img/backgrounds/login.jpg"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'



const UserLogin = () => {
    const inputRef = useRef(null)
    const [phone, setPhone]  = useState("")
    const [otp, setOtp] =useState(false)
    

    const  handleSubmit = (value) => {
      setPhone(value)
      setOtp(true)
    }
    const handleEdit = () =>{
      setOtp(false)
    }
    

  return (
    <div style={{backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='loginContainer'>
        
        <div  className="loginform col-3 d-flex flex-column">
          <h1>Login</h1>
          { otp && <div className="mobie">
            <p className='mb-1 text-disabled'>Mobile Number</p>
            <h3>+91 {`${String(phone).slice(0,2)}-${String(phone).slice(2,4)}-${String(phone).slice(4,6)}-${String(phone).slice(6,10)}`} <span><FontAwesomeIcon onClick={handleEdit} className='cursor-pointer medit ml-1 text' icon={faEdit}/></span></h3> 
            
          </div>}
            { !otp && <> 
            <label className='mb-2' htmlFor="Phone">Mobile Number</label>
            <input id='Phone' className='form-control mb-2 letterSpcing' type="number" pattern='###-###-####' placeholder='822992255'ref={inputRef} />
            <span><button onClick={() => handleSubmit(inputRef.current.value)} className='btn btn-light btn1'>Submit</button></span></>
}
            {otp && <div className="otp mt-2">
              <label htmlFor="" className='text-disabled'>Enter the OTP</label>
                <input className='form-control mt-2 letterSpcing' type="number" name="OTP" id="" placeholder='X X X X' />
              <button className='btn btn-light btn1 mt-4'>Login</button>
            </div>}
             <span><a href="/"><p className='text-light mt-3'>Create New Account</p></a></span>
        </div>
        
    </div>
  )
}

export default UserLogin