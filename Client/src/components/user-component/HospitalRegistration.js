import React, { useState, useEffect } from 'react';
import {  useForm } from 'react-hook-form';
import Select from "react-select"
import {  axiosInstance, getAuthHeader } from '../../constants/utils'
import AddDoctors from '../common-components/AddDoctors';
import ImgUpload from '../common-components/Imgupload';




const HospitalRegistartion = () => {
  const { register, handleSubmit, watch, getValues, reset,setError,control,   formState: { errors } } = useForm({ onChange: true })
  const [tab, setTab] = useState("STEP1")
  const [timingNo, setTimingNo] = useState(1);
  const [doctor, setDoctor] = useState(JSON.parse(localStorage.getItem('createDoctor')) || {});
  const [doctors, setDoctors] = useState([]);

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


  const password = watch('password')

  const submit = async (formData) => {
    try {
      formData['tab'] = tab
      if(doctor?.organizationId){
        formData['organizationId'] = doctor.organizationId
        formData['userId'] = doctor._id
      }

      let {data}  = await axiosInstance.post('/common/create-clinic', formData, getAuthHeader())

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
          <div className="steps  " >
            <ul role="tablist" >
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP1"); reset({}) }} role="tab" className={`${tab === "STEP1" ? "current" : "disabled"} cursor-pointer`} aria-disabled="false" aria-selected="False"><span className="current-info audible tabName ">Step 1 </span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP2"); reset({}) }} role="tab" className={`${tab === "STEP2" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"> <span className='tabName'>Step 2</span> </li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP3"); reset({}) }} role="tab" className={`${tab === "STEP3" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 3</span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP4"); reset({}) }} role="tab" className={`${tab === "STEP4" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 4</span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("FINAL"); reset({}) }} role="tab" className={`${tab === "FINAL" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 5</span></li>
            </ul>
          </div>
          <div className="content ">
            <h3 id="default-wizard-h-0" tabIndex={-1} className="title current">Step 1</h3>
            {tab === "STEP1" && <div className="ms-wizard-step body current" id="default-wizard-p-0" role="tabpanel" aria-labelledby="default-wizard-h-0" aria-hidden="false">
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className=''>Hospital Name</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control "
                      placeholder="Eg: Shad Hospital"
                      {...register('name', {
                        required: 'Hospital name is required'
                      })}
                    />
                  </div>
                  { errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label className=''>Hospital Registration No.</label>
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

              <div className="row d-flex justify-content-center">
                <div className="col-md-12 mb-3">< ImgUpload source={'clinic'} /></div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Specialization of Hospital</label>
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
                <div className="col-md-3 mb-3">
                  <label className=''>Landmark & Street</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Eg: Medical road"
                      {...register('address', {
                        required: 'Hospital address is required'
                      })}
                    />
                  </div>
                  { errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                </div>
                <div className="col-md-3 mb-3">
                  <label className=''>Pincode</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Eg: 202001"
                      {...register('address', {
                        required: 'Hospital address is required'
                      })}
                    />
                  </div>
                  { errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                </div>
                <div className="col-md-3 mb-3">
                  <label className=''>City</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Eg: Aligarh"
                      {...register('address', {
                        required: 'Hospital address is required'
                      })}
                    />
                  </div>
                  { errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                </div>
                <div className="col-md-3 mb-3">
                  <label className=''>State</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Eg: Uttar Pradesh"
                      {...register('address', {
                        required: 'Hospital address is required'
                      })}
                    />
                  </div>
                  { errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                </div>
                <div className="col-md-12 mb-3">
                  <div className="row input-group mt-4">
                   
                      <div className="col"><label >Parking</label></div>                
                      <label class="ms-switch">
                        <input type="checkbox"/>
                        <span class="ms-switch-slider round"></span>
                      </label>
                    

                    <div className="col"><label >Ambulance</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >Waiting</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>


                     <div className="col"><label >Fooding for Patients</label></div>
                   
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                  </div>
                  <div className="row input-group mt-4">
                    <div className="col"><label >ECHO</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >Care Taker</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                    <div className="col"><label >ENDOSCOPY</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >NICU</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>


                  </div>
                  
                  <div className="row input-group mt-4">
                   
                      <div className="col"><label >CATHLAB</label></div>                
                      <label class="ms-switch">
                        <input type="checkbox"/>
                        <span class="ms-switch-slider round"></span>
                      </label>
                    

                    <div className="col"><label >Operation Theatre</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >Veltilator</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>


                     <div className="col"><label >Ultrasound</label></div>
                   
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                  </div>
                  <div className="row input-group mt-4">
                    <div className="col"><label >ECG Services</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >Pharmacy</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                    <div className="col"><label >Room Facility</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >MRI</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                    


                  </div>
                  

                  <div className="row input-group mt-4">
                    <div className="col"><label >CT Scan</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >Blood Bank</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                    <div className="col"><label >ICU</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>

                    <div className="col"><label >Oxygen</label></div>
                    <label class="ms-switch">
                      <input type="checkbox"/>
                      <span class="ms-switch-slider round"></span>
                    </label>
                    


                  </div>
                  
                  
                  
                  <div className="row input-group mt-4">
                    
                    
                    
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
                        { timingNo === i && i < 7 && <button type='button' style={{minWidth:"60px"}} className='btn btn-1 btn-primary mt-4 p-1 px-1' 
                        onClick={() => setTimingNo((old) => { 
                          if( old < 7) old  = old + 1  
                          return old
                        })}> Add</button> }

                        <button type='button' style={{minWidth:"60px"}} className='btn btn-1 btn-light mx-2 mt-4 p-1 px-1' 
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
              
              <div >
                <div className="row">
                  <span className='mb-3 ' >Departments </span>
                  <div className="col-md-6 mb-3">
                    <label >Name of Department</label>
                    <div className="input-group">
                      <input type="text"
                      className="form-control"
                      placeholder="Cardio"
                      
                    />
                  </div>
                  { errors?.doctor && <div className="text-danger ">{errors?.doctor?.firstName.message}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>Room No.</label>
                    <div className="input-group">
                      <input type="number"
                      
                        className="form-control"
                        placeholder="Eg: 45"
                        
                      />
                    </div>
                  </div>
                </div>
                
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
                        { timingNo === i && i < 7 && <button type='button' style={{minWidth:"60px"}} className='btn btn-1 btn-primary mt-4 p-1 px-1' 
                        onClick={() => setTimingNo((old) => { 
                          if( old < 7) old  = old + 1  
                          return old
                        })}> Add</button> }

                        <button type='button' style={{minWidth:"60px"}} className='btn btn-1 btn-light mx-2 mt-4 p-1 px-1' 
                        onClick={() => setTimingNo((old) => { 
                          if( old < 7) old  = old - 1  
                          return old
                        })}>x</button>
                      </div>
                      
                      
                    </div>
                  
                    { errors?.timing && <div className="text-danger ">{errors?.timing.message}</div>}

                  </div>
              </div>))}
            </div>}
            {tab === "STEP4" && <div className='row'>
              <AddDoctors tab={tab}/>
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
              <button type='submit' className='btn btn-1 btn-primary btn-sm'>Next</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HospitalRegistartion;