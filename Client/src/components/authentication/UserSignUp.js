import React, { useRef } from 'react'
import background from "../../assets.app/img/backgrounds/login.jpg"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { axiosInstance, getAuthHeader } from '../../constants/utils';
import useToasty from '../../hooks/toasty';

const UserSignUp = () => {

  const inputRef = useRef(null)
  const otpRef = useRef(null)
  const toasty = useToasty()
  const [otp, setOtp] = useState(false)
  const [isUserForm, setIsUserForm] = useState(false)
  const [patient, setPatient] = useState({})
  const [details, setDetails] = useState({
    fullName: "",
    phone: "",
    age: "",
    gender: "",
    address: ""
  })

  const patientSignup = async (value) => {
    try {
      let { data } = await axiosInstance.post('/patient-signup', { ...details, phone: value })
      setPatient(data?.user)
      setDetails({ ...details, phone: value })
      setOtp(true)
      toasty.success(data?.message)
    } catch (error) {
      toasty.error(error?.message)
      console.error(error)
    }
  }
  const handleEdit = () => {
    setOtp(false)
  }
  const ValidateOTP = async () => {
    try {
      let { data } = await axiosInstance.post('/validate-otp', { otp: otpRef.current.value, patientId: patient?._id })
      localStorage.setItem('user', JSON.stringify(data?.user))
      localStorage.setItem('token', JSON.stringify(data?.token))
      if (data?.user?.twoFactor?.isVerified) {
        window.location.replace('/patient')
      } else {
        setIsUserForm(true)
      }
      toasty.success(data?.message)
    } catch (error) {
      toasty.error(error?.message)
      console.error(error)
    }
  }

  const saveDetails = async () => {
    try {
      let formData = details
      formData['_id'] = patient?._id
      let { data } = await axiosInstance.post('/patient/patient-details', details, getAuthHeader())
      localStorage.setItem('user', JSON.stringify(data?.user))
      window.location.replace('/patient')
    } catch (error) {
      toasty.error(error?.message)
      console.error(error)
    }
  }
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='loginContainer'>

      {!isUserForm && <div className="loginform col-3 d-flex flex-column">
        <span className='h2 text-light mb-3'>LogIn / Sign Up</span>

        {otp && <div className="mobile">
          <p className='mb-1 text-disabled'>Mobile Number</p>
          <h3>+91 {`${String(details?.phone || "").slice(0, 2)}-${String(details?.phone || "").slice(2, 4)}-${String(details?.phone || "").slice(4, 6)}-${String(details?.phone || "").slice(6, 10)}`} <span><FontAwesomeIcon onClick={handleEdit} className='cursor-pointer medit ml-1 text' icon={faEdit} /></span></h3>
        </div>}
        {!otp && <>
          <label className='mb-2' htmlFor="Phone">Mobile Number</label>
          <input id='Phone' className='form-control mb-2 letterSpcing' type="number" pattern='###-###-####' placeholder='822992255' ref={inputRef} />
          <span><button onClick={() => patientSignup(inputRef.current.value)} className='btn btn-light btn1'>Submit</button></span></>
        }
        {otp && <div className="otp mt-2">
          <label htmlFor="" className='text-disabled'>Enter the OTP</label>
          <input className='form-control mt-2 letterSpcing' type="number" name="OTP" id="" placeholder='X X X X' ref={otpRef} />
          <button onClick={ValidateOTP} className='btn btn-light btn1 mt-4'>Log In</button>
        </div>}
        <span><a href="/"><p className='text-light mt-3'>If you have already an accont <span className='text-info'>Login</span></p></a></span>
      </div>}
      {isUserForm && !patient?.isVerified && <div className="loginform mt-0 user-details col-3 d-flex flex-column">
        <h3 className='mb-3'>Fill your Details</h3>
        <div className='mb-2'>
          <label htmlFor="">Mobile Number</label>
          <h4 className='mb-2 text-disabled'>{details?.phone}</h4>
        </div>
        <div className='col-12'>
          <div>
            <label htmlFor="" className='mb-2'  >Full Name</label>
            <input type="text" className='form-control mb-2' placeholder='Full name' onBlur={(e) => { if (e.target.value) setDetails({ ...details, fullName: e.target.value }) }} />
          </div>
        </div>
        <div className='col-2 d-flex flex-row'>
          <div style={{ marginRight: "50px" }} className=''>
            <label htmlFor="" className='mb-2'>Age</label>
            <input style={{ width: "166px" }} type="number" placeholder='enter age' onBlur={(e) => { if (e.target.value) setDetails({ ...details, age: e.target.value }) }} className='form-control mb-2 col-2' />
          </div>
          <div>
            <label htmlFor="" className='mb-2'>Gender</label>
            <input style={{ width: "166px" }} placeholder='enter gender' type="text" onBlur={(e) => { if (e.target.value) setDetails({ ...details, gender: e.target.value }) }} className='form-control mb-2 col-2' />
          </div>
        </div>
        <div className="mb-3">
          <label className='mb-2' htmlFor="">Father name</label>
          <input type="text" placeholder='Enter father name' onBlur={(e) => { if (e.target.value) setDetails({ ...details, father: e.target.value }) }} className="form-control" />
        </div>
        <div className=" mb-3">
          <label className='mb-2' htmlFor="">Address</label>
          <input type="text" placeholder='Etert name' onBlur={(e) => { if (e.target.value) setDetails({ ...details, address: e.target.value }) }} className="form-control" />
        </div>
        <button className='btn btn1 btn-info' onClick={() => saveDetails()}>Save</button>

      </div>}
    </div>
  )
}

export default UserSignUp