import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import Drimg from "../../../assets.app/img/doctors-list/182x280-1.jpg"
import { axiosInstance, getAuthHeader } from '../../../constants/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import ImgUpload from '../Imgupload';

const DoctorRegistration = ({ tab }) => {
  const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({ onChange: true })

  const [doctor, setDoctor] = useState(JSON.parse(localStorage.getItem('createDoctor')) || {});
  const [doctors, setDoctors] = useState([]);
  const handleDoctors = () => {
    setDoctors([...doctors, getValues()])
    reset({})
  }

  const submit = async (formData) => {
    try {
      formData['tab'] = tab
      if (doctor?.organizationId) {
        formData['organizationId'] = doctor.organizationId
        formData['userId'] = doctor._id
      }

      let { data } = await axiosInstance.post('/common/create-clinic', formData, getAuthHeader())

      if (data) {
        localStorage.setItem('createDoctor', JSON.stringify(data.doctor))
        setDoctor(data.doctor)
      }

    } catch (error) { console.log(error) }
  }

  return (
    <div className='row'>
      {doctors.map(doc => <div className="col-md-4 col-sm-6 mb-3">
        <div class="ms-card card-gradient-dark ms-infographics-widget ms-widget">
          <div class="ms-card-body">
            <div class="media fs-14" style={{ marginBottom: "0" }}>

              <div class="me-2 align-self-center">
                <img src={Drimg} class="ms-img-curved" alt="people" />
              </div>
              <div class="media-body">
                <div className='d-flex justify-content-between'>
                  <div>
                    <h6>{doc.firstName} {doc.lastName}</h6>
                  </div>
                  <div>
                    <FontAwesomeIcon className='ms-text-ligth mx-3 cursor-pointer' icon={faPencil} />
                    <FontAwesomeIcon className='ms-text-ligth cursor-pointer' icon={faTrash} onClick={() => setDoctors(old => old.filter(d => d.phone !== doc.phone))} />
                  </div>
                </div>
                <p class="fs-12 my-1 text-disabled">{doc.specialization}</p>
                <h6 class="mt-2">
                  <span class="fs-14">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  {doctor.name || 'Jawahar Lal Nehru Hospital'}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      <form className="ms-form-wizard style1-wizard wizard form-content" onSubmit={handleSubmit((data) => console.log(data))} role="application">
        <div >
          <div className="row d-flex justify-content-center">
            <div><ImgUpload source={"doctor"} /></div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label >First Name</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.firstName ? 'border-danger' : ''}`}
                  placeholder="JOHN"
                  {...register(`firstName`, {
                    required: 'First name is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className=''>Last Name</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.lastName ? 'border-danger' : ''}`}
                  placeholder="DEE"
                  {...register(`lastName`, {
                    required: 'Last name is required'
                  })}
                />
              </div>
            </div>
          </div>
          <div className="row">
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
                  {...register(`phone`, {
                    required: 'Phone is required'
                  })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label >Qualifications</label>
              <div className="input-group">
                <textarea type="text"
                  className={`form-control ${errors.qualification ? 'border-danger' : ''}`}
                  placeholder="Eg.: MBBS from RUSSIA"
                  {...register(`qualification`, {
                    required: 'Qualification is required'
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label >Specialization</label>
              <div className="input-group">
                <input type="text"
                  className={`form-control ${errors.specialization ? 'border-danger' : ''}`}
                  placeholder="Eg: Neurologist"
                  {...register(`specialization`, {
                    required: 'Specialization is required'
                  })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label >Experiance</label>
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
            <div className="col-md-6 mb-3">
              <label className=''>About ME</label>
              <div className="input-group">
                <textarea type="text"
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
            </div>
          </div>
        </div>
      </form>
    </div>

  )
}

export default DoctorRegistration;