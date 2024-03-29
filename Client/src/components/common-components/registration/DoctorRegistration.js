import React, {  useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NumberFormat, axiosInstance, getAuthHeader, getFullPath, userInfo } from '../../../constants/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import ImgUpload from '../Imgupload';
import Select from "react-select";
import useToasty from '../../../hooks/toasty';
import { DAYS } from '../../../constants/constant';


const DoctorRegistration = ({ tab, setTab, organization = {}, source='', setModal = () => {}, refresh = () => {} }) => {
  const { register, handleSubmit, reset, formState: { errors }, control, watch, setError, getValues, setValue } = useForm({ onChange: true })

  const [doctors, setDoctors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null)
  const [editImage, setEditImage] = useState(null)
  const [specialization, setSpecialization] = useState([])
  const [departments, setDepartments] = useState([]);
  const RID = JSON.parse(localStorage.getItem('RID'))
  const [ days, setDays ] = useState(DAYS)
  const [ timing, setTiming ] = useState([]);

  const toasty = useToasty()

  useEffect(() => {

    getDoctorsInOrganization()
    getDepartments()

    if( ['modal'].includes(source) ){
      getAllSpecialization()
    } else {
      getClinicSpecialization()
    }
  }, [])

  const getClinicSpecialization = async () => {
    try{
      let { data } = await axiosInstance.get(`/hospital/clinic-specialization/${RID}`)
      setSpecialization(data?.specializations)
    } catch(error){ console.error(error) }
  }

  const getAllSpecialization = async () => {
    try{
        let {data} = await axiosInstance.get('/doctor/hospital-specialization')
        setSpecialization(data?.specialization)
    } catch(error){
        console.error(error)
    }
  }

  
  const getDepartments = async () => {
    try {
        let { data } = await axiosInstance.get('/doctor/departments', { params: { organizationId: RID }, ...getAuthHeader() })
        let dep = data?.organizations?.map( de => ({ name: de?.organizationId?.name, _id: de?.organizationId?._id, id: de?.organizationId?.specialization[0]?.id || null }))
        setDepartments(dep)

    } catch(error) { console.error(error) }
}


  const getDoctorsInOrganization = async () => {
    try {
      let { data } = await axiosInstance.get('/doctor/doctorsInOrganization', { params: { organizationId: RID }, ...getAuthHeader()})
      setDoctors(data?.doctors)
    } catch(error){ 
      console.error(error)
      toasty.error(error)
    }
  }

  const submit = async (values) => {
    try {      

      if(!values?._id){
        values['organizationId'] = source === 'Hospital' || userInfo.userType === 'HL'? values.department?._id : (RID || userInfo.organizationId)
        values['tab'] = tab
      }
      
      values['timing'] = timing

      let formData = new FormData()
      formData.append('data', JSON.stringify(values))
      formData.append('image', selectedImage)
      
      let response = null
      if(values?._id){
        formData['source'] = 'organization'
        response = await axiosInstance.post('/doctor/edit-doctor', formData)

        setDoctors( prev => prev.map( old => {
          if( old._id.toString() === response?.data?.doctor?._id ) old = response?.data?.doctor
          return old
        }))

      } else {
        response = await axiosInstance.post('/doctor/create-doctor', formData )
        
        let data = response?.data
        let doctorObj = {
          name: data?.doctor?.name,
          email: data?.doctor?.email,
          phone: data?.doctor?.phone,
          qualification: data?.doctor?.qualification,
          experience: data?.doctor?.experience,
          specialization: data?.doctor?.specialization,
          address: data?.doctor?.address,
          photo: data?.doctor?.photo,
        }
        
        setDoctors([...doctors, doctorObj ])
        setModal(false)
        refresh()
      }

      setTiming([])
      setDays(DAYS)

      setEditImage(null)
      reset({ name: null, email: null, qualification: null, experience: null, specialization: null, address: null, phone: null })
      toasty.success(response?.data?.message)
    } catch (error) { 
      console.log(error)
      toasty.error(error?.message)
    }

  }

  const handleDelete = async (_id) => {
    try {
      let { data } = await axiosInstance.post('/doctor/delete-doctor', {_id})
      setDoctors(old => old.filter(d => d._id !== _id))
      toasty.success(data?.message)
    } catch(error){
      console.error(error)
      toasty.error(error?.message)
    }
  }

  const Finish = () => {
    localStorage.removeItem("RID");
    window.location.reload();
  };

  const handleEdit = (doctor) => {
    setEditImage(getFullPath(doctor?.photo))
    reset(doctor)
  }

  const handleTime = () => {
    let time = getValues('timing')

    if( !time?.day ) setError('timing.day', { message: 'Day is required'})
    if( !time?.open ) setError('timing.open', { message: 'Open time is required'})
    if( !time?.close ) setError('timing.close', { message: 'Close time is required'})

    let day = timing.find( t => t.day === time.day )
    if( !day && time?.day && time?.open && time?.close ){
        setTiming([ ...timing, JSON.parse(JSON.stringify(time)) ])
        setDays( old => old.filter( d => d.value !== time.day ))
        setValue('timing', { day: '', open: '', close: ''})
    }
  }

  const handleDeleteTime = (time) => {
    setTiming( old => old.filter( t => t.day !== time.day ))
    setDays( old => ([ DAYS.find( d => d.value === time.day ), ...old].sort((a, b) => a.value - b.value )))
  }   

  return (
    <div className='row'>
      { !['modal'].includes(source)  && doctors.map(doc => <div className="col-md-4 col-sm-6 mb-3">
        <div class="ms-card card-gradient-dark ms-infographics-widget ms-widget">
          <div class="ms-card-body">
            <div class="media fs-14" style={{ marginBottom: "0" }}>

              <div class="me-2 align-self-center">
                <img src={getFullPath(doc.photo)} class="ms-img-curved" alt="people" />
              </div>
              <div class="media-body">
                <div className='d-flex justify-content-between'>
                  <div>
                    <h6>{doc.name}</h6>
                  </div>
                  <div>
                    <FontAwesomeIcon className='ms-text-ligth mx-3 cursor-pointer' icon={faPencil} onClick={() => handleEdit(doc)} />
                    <FontAwesomeIcon className='ms-text-ligth cursor-pointer' icon={faTrash} onClick={() => handleDelete(doc._id)} />
                  </div>
                </div>
                <span className='text-light' style={{ fontSize: 'x-small'}}>{doc?.specialization?.name || 'Specialization'}</span>
                <br />
                <span className='text-light' style={{ fontSize: 'x-small'}}>{doc?.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      <form className="ms-form-wizard style1-wizard wizard form-content" onSubmit={handleSubmit(submit)} role="application">
        <div >
          <ImgUpload source={"doctor"} file={(image) => setSelectedImage(image)} editImage={editImage} />
          <div className="row mt-2">
            <div className="col-6 mb-3">
              <label >Doctor Name</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.name ? 'border-danger' : ''}`}
                  placeholder="Enter Full Name"
                  {...register(`name`, {
                    required: 'First name is required'
                  })}
                />
              </div>
            </div>
            <div className="col-6 mb-3">
              <label className=''>Phone Number</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.phone ? 'border-danger' : ''}`}
                  placeholder="Enter Phone"
                  maxLength={10}
                  onInput={(e) => NumberFormat(e)}
                  {...register(`phone`, {
                    required: 'Phone is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label >Email ID</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.email ? 'border-danger' : ''}`}
                  placeholder="Enter Email Address"
                  {...register(`email`, {
                    required: 'Email is required'
                  })}
                />
              </div>
            </div>
            
            <div className="col-6 mb-3">
              <label >Qualifications</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.qualification ? 'border-danger' : ''}`}
                  placeholder="Enter Qualifications"
                  {...register(`qualification`, {
                    required: 'Qualification is required'
                  })}
                />
              </div>
            </div>
            <div className="col-6 mb-3">
              <label >Experience</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.experience ? 'border-danger' : ''}`}
                  placeholder="Enter Experience"
                  {...register(`experience`, {
                    required: 'Experience is required'
                  })}
                />
              </div>
            </div>
            {(source === 'Hospital' || userInfo.userType === 'HL') &&
              <div className="col-6 mb-3">
                <label >Select Department</label>
                <div className="">
                  <Controller
                    control={control}
                    name="department"
                    rules={{ required: 'Query must be select' }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti={false}
                        options={departments}
                        getOptionLabel={({ name }) => name}
                        getOptionValue={({ _id }) => _id}
                        className={`form-control p-0 ${errors.specialization ? 'border-danger' : ''}`}
                        classNamePrefix="select"
                      />
                    )}
                  />
                </div>
              </div>}
            <div className="col-md-6 mb-3">
              <label >Select Specialization</label>
              <div className="">
                <Controller
                  control={control}
                  name="specialization"
                  rules={{ required: 'Query must be select' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti={false}
                      options={source === 'Hospital' || userInfo.userType === 'HL' ? specialization.filter( a => a.id === watch('department')?.id ) : specialization}
                      getOptionLabel={({ name }) => name}
                      getOptionValue={({ id }) => id}
                      className={`form-control p-0 ${errors.specialization ? 'border-danger' : ''}`}
                      classNamePrefix="select"
                    />
                  )}
                />
              </div>
            </div>

        
            <div className="col-md-6 mb-3">
              <label className=''>Address</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.address ? 'border-danger' : ''}`}
                  placeholder="Enter Address"
                  {...register(`address`, {
                    required: 'Address is required'
                  })}
                />
              </div>
            </div>
            
            <div className="px-2">
              <div className="alert alert-danger border-0  p-2 mb-2 mt-4">
                <div className="d-flex justify-content-around">
                  <div>Day</div>
                  <div>Open</div>
                  <div>Close</div>
                  <div>Action</div>
                </div>
              </div>

              {timing?.length > 0 &&
                timing.map(time => <div className="alert alert-secondary border-0 p-2">
                  <div className="d-flex justify-content-around">
                    <div>{time.day}</div>
                    <div>{time.open}</div>
                    <div>{time.close}</div>
                    <div>
                      <FontAwesomeIcon className=' mx-3 cursor-pointer' icon={faTrash} onClick={() => handleDeleteTime(time)} />
                    </div>
                  </div>
                </div>)}
            </div>

            {days?.length > 0 && <div className="row px-2">
              <div className="col-md-12 mb-3">
                <label className=''>Timming</label>
                <div className='row' style={{ paddingRight: 0 }}>
                  <div className="col">
                    <label htmlFor="">Days</label>
                    <select name="days"
                      className={`form-control ${errors?.timing?.day ? 'border-danger' : ''}`}
                      {...register('timing.day')} >
                      {days.map((day) => <option value={day.value} >{day.day}</option>)}
                    </select>
                  </div>
                  <div className='col '>
                    <label htmlFor="#open">Open</label>
                    <input type="time"
                      id='open'
                      className={`form-control ${errors?.timing?.open ? 'border-danger' : ''}`}
                      placeholder="morning 10am to 12pm"
                      {...register('timing.open')}
                    />
                  </div>
                  <div className='col '>
                    <label className=''>Close</label>
                    <input type="time"
                      className={`form-control ${errors?.timing?.close ? 'border-danger' : ''}`}
                      placeholder="morning 10am to 12pm"
                      {...register('timing.close')}
                    />
                  </div>
                  <div className=''>
                    <button type='button' style={{ minWidth: "60px" }} className='btn btn-1 btn-primary mt-4 p-1 px-1 shadow-none' onClick={() => handleTime()}> Add</button>
                  </div>
                </div>
              </div>
            </div>}
            


            
            <div className="actions btn-submit mb-2">
              <button type="submit" className="btn btn-primary shadow-none mx-2" >Save Doctor</button>
              { source !== "modal" && <button onClick={Finish} className="btn btn-primary btn-md">Finish</button>}

            </div>
          </div>
        </div>
      </form>
    </div>

  )
}

export default DoctorRegistration;