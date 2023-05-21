import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {  axiosInstance, getAuthHeader } from '../../constants/utils'
import Drimg from "../../assets.app/img/doctors-list/182x280-1.jpg"
import Select from "react-select"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil} from '@fortawesome/free-solid-svg-icons'


const ClinicRegistartion = () => {
  const { register, handleSubmit, reset, getValues,  formState: { errors } } = useForm({ onChange: true })
  const [tab, setTab] = useState("STEP1")
  const [doctor, setDoctor] = useState(JSON.parse(localStorage.getItem('createDoctor')) || {});
  const [doctors, setDoctors] = useState([]);
   
  const [timingNo, setTimingNo] = useState(1);

  const DAYS = [
    { id:0, value: 'MON', day: 'Monday' },
    { id:1, value: 'TUE', day: 'Tuesday' },
    { id:2, value: 'WED', day: 'Wednesday' },
    { id:3, value: 'THU', day: 'Thursday' },
    { id:4, value: 'FRI', day: 'Friday' },
    { id:5, value: 'SAT', day: 'Saturday' },
    { id:6, value: 'SUN', day: 'Sunday' },
  ]

  useEffect(() => {
    setTimingNo(1)
  }, [tab])

  const handleDoctors = () => {
    setDoctors([...doctors, getValues()])
    reset({})
  }

  const submit = async (formData) => {
    try {

      formData['tab'] = tab
      if(doctor?.organizationId){
        formData['organizationId'] = doctor.organizationId
        formData['userId'] = doctor._id
      }

      let {data}  = await axiosInstance.post('/create-clinic', formData, getAuthHeader())

      if(data?.tab === 'STEP1'){ 
        localStorage.setItem('createDoctor', JSON.stringify(data.doctor))
        setDoctor(data.doctor)
      }

      if( tab === 'FINAL' ){ 
        localStorage.removeItem('createDoctor')
        setDoctor({})
      }
       
      if( tab === 'STEP1') setTab('STEP2')
      if( tab === 'STEP2') setTab('STEP3')
      if( tab === 'STEP3') setTab('FINAL')

    } catch (error) { console.log(error) }
  }

  const confirmPassword = async (value) => {
    // value === password && setError('confirmPassword', { message: ""})
  }

  return (
    <div>
      <div className="ms-panel-body">
        <form className="ms-form-wizard style1-wizard wizard form-content" onSubmit={handleSubmit(submit)} role="application">
          <div className="steps  ">
            <ul role="tablist">
              <li onClick={() => { setTab("STEP1"); reset({}) }} role="tab" className={`${tab === "STEP1" ? "current" : "disabled"} cursor-pointer`} aria-disabled="false" aria-selected="False"><span className="current-info audible tabName ">Step 1 </span></li>
              <li onClick={() => { setTab("STEP2"); reset({}) }} role="tab" className={`${tab === "STEP2" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"> <span className='tabName'>Step 2</span> </li>
              <li onClick={() => { setTab("STEP3"); reset({}) }} role="tab" className={`${tab === "STEP3" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 3</span></li>
              <li onClick={() => { setTab("FINAL"); reset({}) }} role="tab" className={`${tab === "FINAL" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 4</span></li>
            </ul>
          </div>
          <div className="content ">
            <h3 id="default-wizard-h-0" tabIndex={-1} className="title current">Step 1</h3>
            {tab === "STEP1" && <div className="ms-wizard-step body current" id="default-wizard-p-0" role="tabpanel" aria-labelledby="default-wizard-h-0" aria-hidden="false">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className=''>Clinic Name</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control "
                      placeholder="Ex: Madni Clinic"
                      {...register('name', {
                        required: 'Clinic name is required'
                      })}
                    />
                  </div>
                  { errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label className=''>Clinic Registration No.</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control "
                      placeholder="Ex: GAN200061"
                      {...register('registration', {
                        required: 'Registration number is required'
                      })}
                    />
                  </div>
                  { errors?.registration && <div className="text-danger ">{errors?.registration.message}</div>}

                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className=''>Phone Number</label>
                  <div className="input-group">
                    <input type="Number"
                      className="form-control "
                      placeholder="Phone Number"
                      {...register('phone', {
                        required: 'Phone number is required'
                      })}
                    />
                  </div>
                  { errors?.phone && <div className="text-danger ">{errors?.phone.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label className=''>Email</label>
                  <div className="input-group">
                    <input type="email"
                      className="form-control "
                      placeholder="example@gmail.com"
                      {...register('email', {
                        required: 'Email is required'
                      })}
                    />
                  </div>
                  { errors?.email && <div className="text-danger ">{errors?.email.message}</div>}

                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className=''>Password</label>
                  <div className="input-group">
                    <input type="password"
                      className="form-control "
                      placeholder="create password"
                      {...register('password', {
                        required: 'Password is required'
                      })}
                    />
                  </div>
                  { errors?.password && <div className="text-danger ">{errors?.password.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label className=''>Confirm Password</label>
                  <div className="input-group">
                    <input type="password"
                      className="form-control "
                      placeholder="confirm password"
                      {...register('confirmPassword', {
                        required: 'Confirm password is required'
                      })}
                      onChange={(event) => confirmPassword(event.target.value)}
                    />
                  </div>
                  { errors?.confirmPassword && <div className="text-danger ">{errors?.confirmPassword.message}</div>}

                </div>
              </div>
            </div>}
            {tab === "STEP2" && <div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Specialization of Clininc</label>
                  <div className="">
                    <Select
                        // defaultValue={[]}
                        isMulti
                        name="colors"
                        options={[{label: 'test1', value:1}, {label: 'test2', value:12}]}
                        className=" p-0"
                        classNamePrefix="select"
                      />
                  </div>
                  { errors?.specialization && <div className="text-danger ">{errors?.specialization.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label >Consultant Fee</label>
                  <div className="input-group">
                    <input type="number"
                      className="form-control"
                      placeholder="Ex: 200"
                      {...register('fee', {
                        required: 'Consultation fee is required'
                      })}
                    />
                  </div>
                  { errors?.fee && <div className="text-danger ">{errors?.fee.message}</div>}

                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className=''>Clinic Address</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Eg: Hamdard nagar 'A' jamalpur Aligarh "
                      {...register('address', {
                        required: 'Clinic address is required'
                      })}
                    />
                  </div>
                  { errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <div className="row input-group mt-4">
                    
                    <div className="col"><label >Parking</label></div>
                   
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                    
                  </div>
                  { errors?.parking && <div className="text-danger ">{errors?.parking.message}</div>}

                </div>
                {Array(timingNo).fill(0).map((v, i) => 
                (i = i + 1, <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className=''>Timming</label>
                    <div className='row' style={{paddingRight:0}}>
                      <div className="col">
                        <label htmlFor="">Days</label>
                        <select name="days" className='form-control' id="" >
                          {DAYS.map( (day) => <option value={day.value} >{day.day}</option>)}
                        </select>
                      </div>
                      <div className="col-1 text-end"><p style={{marginTop:"25px"}}>Morning</p></div>
                      <div className='col '>
                    
                        <label htmlFor="#open">Open</label>
                        <input type="time"
                        id='open'
                          onFocusCapture={(e) => console.log('>>>>>>>', e)}
                          className="form-control"
                          placeholder="morning 10am to 12pm"
                          {...register('timing', {
                            required: 'Timing is required'
                          })}
                        />
                      </div>
                      <div className='col '>
                        <label className=''>Close</label>
                        <input type="time"
                          className="form-control"
                          placeholder="morning 10am to 12pm"
                          {...register('timing', {
                            required: 'Timing is required'
                          })}
                        />
                      </div>

                      {/* evening */}
                      
                      <div className="col-1 text-end"><p style={{marginTop:"25px"}}>Evening</p></div>
                      <div className='col '>
                        <label htmlFor="#open">Open</label>
                        <input type="time"
                        id='open'
                          onFocusCapture={(e) => console.log('>>>>>>>', e)}
                          className="form-control"
                          placeholder="morning 10am to 12pm"
                          {...register('timing', {
                            required: 'Timing is required'
                          })}
                        />
                      </div>
                      <div className='col '>
                        <label className=''>Close</label>
                        <input type="time"
                          className="form-control"
                          placeholder="morning 10am to 12pm"
                          {...register('timing', {
                            required: 'Timing is required'
                          })}
                        />
                      </div>
                       <div className='col '>
                        { timingNo === i && i < 7 && <button type='button' style={{minWidth:"60px"}} className='btn btn-primary mt-4 p-1 px-1' 
                        onClick={() => setTimingNo((old) => { 
                          if( old < 7) old  = old + 1  
                          return old
                        })}> Add</button> }

                        <button type='button' style={{minWidth:"60px"}} className='btn btn-light mx-2 mt-4 p-1 px-1' 
                        onClick={() => setTimingNo((old) => { 
                          if( old < 7) old  = old - 1  
                          return old
                        })}>x</button>
                      </div>
                      
                      
                    </div>
                  
                    { errors?.timing && <div className="text-danger ">{errors?.timing.message}</div>}

                  </div>
                </div>))}
              </div>
            </div>}
            {tab === "STEP3" && <div className='row'>
              {doctors.map( doc => <div className="col-md-4 col-sm-6 mb-3">
                <div class="ms-card card-gradient-dark ms-infographics-widget ms-widget">
                  
            <div class="ms-card-body">
              <div class="media fs-14" style={{marginBottom:"0"}}>

                <div class="me-2 align-self-center">
                  <img src={Drimg} class="ms-img-curved" alt="people"/>
                </div>
                <div class="media-body">
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h6>{doc.firstName} {doc.lastName}</h6>
                    </div>
                    <div>
                      <FontAwesomeIcon className='ms-text-ligth mx-3 cursor-pointer' icon={faPencil}  />
                      <FontAwesomeIcon className='ms-text-ligth cursor-pointer' icon={faTrash} onClick={() => setDoctors(old => old.filter( d => d.phone !== doc.phone))} />
                    </div>
                  </div>
                  <p class="fs-12 my-1 text-disabled">{doc.specialization}</p>
                  <h6 class="mt-2">
                    <span class="fs-14">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                     { doctor.name || 'Jawahar Lal Nehru Hospital'}</h6>
                </div>
              </div>
            </div>
          </div>
                
              </div>)}
              <div >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label >First Name</label>
                    <div className="input-group">
                      <input type="text"
                      className="form-control"
                      placeholder="JOHN"
                      {...register(`firstName`, {
                        required: 'First name is required'
                      })}
                    />
                  </div>
                  { errors?.firstName && <div className="text-danger ">{errors?.firstName.message}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>Last Name</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="DEE"
                        {...register(`lastName`, {
                          required: 'Last name is required'
                        })}
                      />
                    </div>
                    { errors?.lastName && <div className="text-danger ">{errors?.lastName.message}</div>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label >Email ID</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Eg. example@gmail.com"
                        {...register(`email`, {
                          required: 'Email is required'
                        })}
                      />
                    </div>
                    { errors?.email && <div className="text-danger ">{errors?.email.message}</div>}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>Phone Number</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="XXXX-XXX-XXX"
                        {...register(`phone`, {
                          required: 'Phone is required'
                        })}
                      />
                    </div>
                    { errors?.phone && <div className="text-danger ">{errors?.phone.message}</div>}

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label >Qualifications</label>
                    <div className="input-group">
                      <textarea type="text"
                        className="form-control"
                        placeholder="Eg.: MBBS from RUSSIA"
                        {...register(`qualification`, {
                          required: 'Qualification is required'
                        })}
                      />
                    </div>
                    { errors?.qualification && <div className="text-danger ">{errors?.qualification.message}</div>}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label >Specialization</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Eg: Neurologist"
                        {...register(`specialization`, {
                          required: 'Specialization is required'
                        })}
                      />
                    </div>
                    { errors?.specialization && <div className="text-danger ">{errors?.specialization.message}</div>}

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label >Experiance</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Eg: 10 Years"
                        {...register(`experience`, {
                          required: 'Experience is required'
                        })}
                      />
                    </div>
                    { errors?.experience && <div className="text-danger ">{errors?.experience.message}</div>}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>Address</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Ex: Hamdard nagar 'A' jamalpur Aligarh "
                        {...register(`address`, {
                          required: 'Address is required'
                        })}
                      />
                    </div>
                    { errors?.address && <div className="text-danger ">{errors?.address.message || ""}</div>}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>About ME</label>
                    <div className="input-group">
                      <textarea type="text"
                        className="form-control"
                        placeholder="Eg: I am in practice since 1995 "
                        {...register(`aboutme`, {
                          required: 'Address is required'
                        })}
                      />
                    </div>
                    { errors?.aboutme && <div className="text-danger ">{errors?.aboutme.message || ""}</div>}

                  </div>
                  <div className="actions btn-submit mb-2">
                    <button type='button' className='btn btn-primary btn-sm' onClick={() => handleDoctors()} >Save</button>
                  </div>

                </div>{console.log('>>>>>>', doctors)}
              </div>
            </div>}
            {tab === "FINAL" && <div>
               <div className="row">
                <div className="col-md-6 mb-3">
                  <label className=''>Deal Price</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control "
                      placeholder="Eg: 900/m"
                      {...register('dealprice', {
                        required: 'Deal price is required'
                      })}
                    />
                  </div>
                  { errors?.dealprice && <div className="text-danger ">{errors?.dealprice.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label className=''>Details</label>
                  <div className="input-group">
                    <textarea type="text"
                      className="form-control "
                      placeholder="Eg: 1500/m"
                      {...register('details', {
                        required: 'Details are required'
                      })}
                    />
                  </div>
                  { errors?.details && <div className="text-danger ">{errors?.details.message}</div>}

                </div>
              </div>
              </div>}
            <div className="actions btn-submit">
              
              <button type='submit' className='btn btn-primary btn-sm ' >Next</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClinicRegistartion