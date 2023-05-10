import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {  axiosInstance, getAuthHeader } from '../../constants/utils'


const ClinicRegistartion = () => {
  const { register, handleSubmit, watch, reset,setError,control,   formState: { errors } } = useForm({ onChange: true })
  const [tab, setTab] = useState("STEP1")
  const [doctor, setDoctor] = useState(JSON.parse(localStorage.getItem('createDoctor')) || {});

  const password = watch('password')
  const doctors = watch('doctors')

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
                  <label >Specialization</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Ex: Neurologist"
                      {...register('specialization', {
                        required: 'Specialization is required'
                      })}
                    />
                  </div>
                  { errors?.specialization && <div className="text-danger ">{errors?.specialization.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label >Consultant Fee</label>
                  <div className="input-group">
                    <input type="text"
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
                  <label className=''>Timming</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="morning 10am to 12pm"
                      {...register('timing', {
                        required: 'Timing is required'
                      })}
                    />
                  </div>
                  { errors?.timing && <div className="text-danger ">{errors?.timing.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label >Off days</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Ex: Sunday"
                      {...register('offDay', {
                        required: 'Off Days is required'
                      })}
                    />
                  </div>
                  { errors?.offDay && <div className="text-danger ">{errors?.offDay.message}</div>}

                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className=''>Clinic Address</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Ex: Hamdard nagar 'A' jamalpur Aligarh "
                      {...register('address', {
                        required: 'Clinic address is required'
                      })}
                    />
                  </div>
                  { errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                </div>
                <div className="col-md-6 mb-3">
                  <label >Parking</label>
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Available/Unavailable"
                      {...register('parking', {
                        required: 'Parking is required'
                      })}
                    />
                  </div>
                  { errors?.parking && <div className="text-danger ">{errors?.parking.message}</div>}

                </div>
              </div>
            </div>}
            {tab === "STEP3" && <div>
              <div className="col-md-6 mb-3">
                <label >No. of Doctors</label>
                <div className="input-group">
                  <select className="form-control" {...register("doctors", { value: '1'})} >
                    {[1, 2, 3, 4, 5].map((no) => (
                      <option value={`${no}`}>{no}</option>
                    ))
                    }
                  </select>
                </div>
              </div>
              {Array(parseInt(doctors || '1')).fill(0).map((e, i) => 
              (i = i+1,<div key={i}>
                <div className="row">
                  <span className='' >Doctor {i}</span>
                  <div className="col-md-6 mb-3">
                    <label >First Name</label>
                    <div className="input-group">
                      <input type="text"
                      className="form-control"
                      placeholder="JOHN"
                      {...register(`doctor[${i}].firstName`, {
                        required: 'First name is required'
                      })}
                    />
                  </div>
                  { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.firstName.message}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>Last Name</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="DEE"
                        {...register(`doctor[${i}].lastName`, {
                          required: 'Last name is required'
                        })}
                      />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.lastName.message}</div>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label >Email ID</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Eg. example@gmail.com"
                        {...register(`doctor.${i}.email`, {
                          required: 'Email is required'
                        })}
                      />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.email.message}</div>}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>Phone Number</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="XXXX-XXX-XXX"
                        {...register(`doctor[${i}].phone`, {
                          required: 'Phone is required'
                        })}
                      />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.phone.message}</div>}

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label >Qualifications</label>
                    <div className="input-group">
                      <textarea type="text"
                        className="form-control"
                        placeholder="Eg.: MBBS from RUSSIA"
                        {...register(`doctor[${i}].qualification`, {
                          required: 'Qualification is required'
                        })}
                      />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.qualification.message}</div>}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label >Specialization</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Eg: Neurologist"
                        {...register(`doctor[${i}].specialization`, {
                          required: 'Specialization is required'
                        })}
                      />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.specialization.message}</div>}

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label >Experiance</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Eg: 10 Years"
                        {...register(`doctor[${i}].experience`, {
                          required: 'Experience is required'
                        })}
                      />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.experience.message}</div>}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label className=''>Address</label>
                    <div className="input-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Ex: Hamdard nagar 'A' jamalpur Aligarh "
                        {...register(`doctor[${i}].address`, {
                          required: 'Address is required'
                        })}
                      />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor[i]?.address.message || ""}</div>}

                  </div>
                </div>
              </div>))}
            </div>}
            {tab === "FINAL" && <div>FINAL</div>}
            <div className="actions btn-submit">
              <button type='submit' className='btn btn-primary btn-sm'>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClinicRegistartion