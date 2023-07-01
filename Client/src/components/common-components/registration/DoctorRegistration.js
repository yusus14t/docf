import React, {  useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Drimg from "../../../assets.app/img/doctors-list/182x280-1.jpg"
import { NumberFormat, axiosInstance, getAuthHeader, getFullPath } from '../../../constants/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import ImgUpload from '../Imgupload';
import Select from "react-select"
import useToasty from '../../../hooks/toasty';


const DoctorRegistration = ({ tab, setTab, organization = {} }) => {
  const { register, handleSubmit, reset, formState: { errors }, control } = useForm({ onChange: true })

  const [doctors, setDoctors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null)
  const [editImage, setEditImage] = useState(null)
  const toasty = useToasty()

  useEffect(() => {
    if( organization?._id ) getDoctorsInOrganization()
  }, [])

  const getDoctorsInOrganization = async () => {
    try {
      let { data } = await axiosInstance.get('/doctor/doctorsInOrganization', { params: { organizationId: organization._id }, ...getAuthHeader()})
      setDoctors(data?.doctors)
      console.log(data?.doctors)
    } catch(error){ 
      console.error(error)
      toasty.error(error)
    }
  }

  const submit = async (values) => {
    try {
      console.log(values)
      

      if(!values?._id){
        values['organizationId'] = organization._id
        values['tab'] = tab
      }
      
      let formData = new FormData()
      formData.append('data', JSON.stringify(values))
      formData.append('image', selectedImage)
      
      let response = null
      if(values?._id){
        response = await axiosInstance.post('/doctor/edit-doctor', formData)
  
        setDoctors( prev => prev.map( old => {
          if( old._id.toString() === response?.data?.doctor?._id ) old = response?.data?.doctor
          return old
        }))

      } else {
        response = await axiosInstance.post('/doctor/create-doctor', formData )
        
        let data = response?.data
        let doctorObj = {
          fullName: data?.doctor?.fullName,
          email: data?.doctor?.email,
          phone: data?.doctor?.phone,
          qualification: data?.doctor?.qualification,
          experience: data?.doctor?.experience,
          aboutme: data?.doctor?.aboutme,
          specialization: data?.doctor?.specialization,
          address: data?.doctor?.address,
          photo: data?.doctor?.photo,
        }
        
        setDoctors([...doctors, doctorObj ])
      }

      setEditImage(null)
      reset({ fullName: null, email: null, qualification: null, experience: null, aboutme: null, specialization: null, address: null, phone: null })
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
      console.log(data)
      toasty.success(data?.message)
    } catch(error){
      console.error(error)
      toasty.error(error?.message)
    }
  }

  const handleNext = () => {
    if( !doctors.length ) {
      toasty.error('Atleast one doctor created')
      return
    }

    setTab('FINAL')
  }

  const handleEdit = (doctor) => {
    setEditImage(getFullPath(doctor?.photo))
    reset(doctor)
  }

  return (
    <div className='row'>
      {doctors.map(doc => <div className="col-md-4 col-sm-6 mb-3">
        <div class="ms-card card-gradient-dark ms-infographics-widget ms-widget">
          <div class="ms-card-body">
            <div class="media fs-14" style={{ marginBottom: "0" }}>

              <div class="me-2 align-self-center">
                <img src={getFullPath(doc.photo)} class="ms-img-curved" alt="people" />
              </div>
              <div class="media-body">
                <div className='d-flex justify-content-between'>
                  <div>
                    <h6>{doc.fullName}</h6>
                  </div>
                  <div>
                    <FontAwesomeIcon className='ms-text-ligth mx-3 cursor-pointer' icon={faPencil} onClick={() => handleEdit(doc)} />
                    <FontAwesomeIcon className='ms-text-ligth cursor-pointer' icon={faTrash} onClick={() => handleDelete(doc._id)} />
                  </div>
                </div>
                <span className='text-light' style={{ fontSize: 'x-small'}}>{doc?.specialization || 'Specialization'}</span>
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
            <div className="col-md-6 mb-3">
              <label >Full Name</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.firstName ? 'border-danger' : ''}`}
                  placeholder="JOHN"
                  {...register(`fullName`, {
                    required: 'First name is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label >Email ID</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.email ? 'border-danger' : ''}`}
                  placeholder="Eg. example@gmail.com"
                  {...register(`email`, {
                    required: 'Email is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className=''>Phone Number</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.phone ? 'border-danger' : ''}`}
                  placeholder="XXXX-XXX-XXX"
                  onInput={(e) => NumberFormat(e)}
                  {...register(`phone`, {
                    required: 'Phone is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label >Qualifications</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.qualification ? 'border-danger' : ''}`}
                  placeholder="Eg.: MBBS from RUSSIA"
                  {...register(`qualification`, {
                    required: 'Qualification is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label >Specialization of Clininc</label>
              <div className="">
                <Controller
                  control={control}
                  name="specialization"
                  // rules={{ required: 'Query must be select' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti={false}
                      options={[{ id: 'test', name: 'test',}]}
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
              <label >Experience</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.experience ? 'border-danger' : ''}`}
                  placeholder="Eg: 10 Years"
                  {...register(`experience`, {
                    required: 'Experience is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className=''>Address</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.address ? 'border-danger' : ''}`}
                  placeholder="Ex: Hamdard nagar 'A' jamalpur Aligarh "
                  {...register(`address`, {
                    required: 'Address is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <label className=''>About ME</label>
              <div className="input-group">
                <textarea type="text" rows={7}
                  className={`form-control ${errors.aboutme ? 'border-danger' : ''}`}
                  placeholder="Eg: I am in practice since 1995 "
                  {...register(`aboutme`, {
                    required: 'Address is required'
                  })}
                />
              </div>
            </div>
            <div className="actions btn-submit mb-2">
              <button type="submit" className="btn btn-primary shadow-none mx-2" >Save</button>
              <button className="btn btn-primary shadow-none mx-2" onClick={() => { handleNext() }}>Next</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  )
}

export default DoctorRegistration;