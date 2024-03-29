import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { axiosInstance, getAuthHeader, getFullPath } from "../../constants/utils";
import Modal from "../common-components/Modal";
import { Controller, useForm } from "react-hook-form";
import useToasty from '../../hooks/toasty';
import DoctorRegistration from "../common-components/registration/DoctorRegistration";
import ImgUpload from "../common-components/Imgupload";
import Select from "react-select";
import { DAYS } from "../../constants/constant";


const DoctorsList = () => {
    const [editModal, setEditModal] = useState(false);
    const [doctorModal, setDoctorModal] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [editData, setEditData] = useState({})
    const toasty = useToasty();
    const { register, handleSubmit, reset, formState:{ errors }, control, setError, getValues, setValue } = useForm({ onChange: true })
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const [ selectedImage, setSelectedImage ] = useState(null)
    const [specialization, setSpecialization] = useState([])
    const [ days, setDays ] = useState(DAYS)
    const [ timing, setTiming ] = useState([]);
    const [ isTiming, setIsTiming ] = useState(false)
    
    useEffect(() => {
        getDoctors()
        getClinicSpecialization()
    }, [])

    useEffect(() => {
        setTiming(editData.timing)
    }, [ editModal ])

    const getDoctors = async () => {
        try {
            let { data } = await axiosInstance.get('/doctor/allDoctors', {params: { source: 'dashboard' }, ...getAuthHeader()})
            setDoctors(data.doctors)
        } catch (error) { console.log(error) }
    }

    const getClinicSpecialization = async () => {
        try{
          let { data } = await axiosInstance.get(`/hospital/clinic-specialization/${userInfo.organizationId._id}`)
          setSpecialization(data?.specializations)
        } catch(error){ console.error(error) }
      }

    const handleDelete = async (doctor) => {
        try {
            await axiosInstance.post('/doctor/delete-doctor', { _id: doctor._id }, getAuthHeader());
            setDoctors((old) => old.filter(d => d._id !== doctor._id))
        } catch (error) { console.log(error) }
    }

    const Submit = async ( values ) => {
        try{
            values['timing'] = timing

            let formData = new FormData()
            formData.append('data', JSON.stringify(values))
            formData.append('image', selectedImage)

            let { data } = await axiosInstance.post('/doctor/edit-doctor', formData, getAuthHeader())
            setDoctors(( prev ) => prev.map( doctor => {
                if( doctor._id === data?.doctor?._id ) doctor = data?.doctor
                return doctor
            }))

            setTiming([])
            setDays(DAYS)

            reset({})
            setEditModal(false)
            toasty.success(data?.message)
        } catch(error){ 
            console.error(error) 
            toasty.error(error?.message)
        }
    }

    const handleTime = () => {
        let time = getValues('timing')
    
        if( !time?.day ) setError('timing.day', { message: 'Day is required'})
        if( !time?.open ) setError('timing.open', { message: 'Open time is required'})
        if( !time?.close ) setError('timing.close', { message: 'Close time is required'})
    

        let day = timing.find( t => t.day === time.day )
        if( !day ){
            setTiming([ ...timing, JSON.parse(JSON.stringify(time)) ])
            setDays( old => old.filter( d => d.value !== time.day ))
            setValue('timing', { day: '', open: '', close: ''})
        }
    }
    
      const handleEditOrDelete = ( time ) => {
        setTiming( old => old.filter( t => t.day !== time.day ))
        setDays( old => ([ DAYS.find( d => d.value === time.day ), ...old].sort((a, b) => a.value - b.value )))
      }   

    return (
        <>
            <div className="ms-content-wrapper mx-2">
                <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                    <div><h6>Doctors</h6></div>
                    <div class="ms-form-group my-0 mb-0 has-icon fs-14">
                        <i class="flaticon-search text-disabled"></i>
                        { ['CL', 'HL'].includes(userInfo.userType) && <button className="btn btn-light shadow-none mx-2" onClick={() => setDoctorModal(true) }>+ Doctor</button>}
                    </div>

                </div>
                <div className="row">
                    {doctors.length > 0 && doctors.map((doctor, index) => (
                        <div key={index} className="col-lg-4 col-md-6  col-sm-6">
                            <div className="ms-card">
                                <div className="ms-card-body">
                                    <div className="media mb-0 fs-14">
                                        <div className="me-2 align-self-center">
                                            <img src={getFullPath(doctor.photo  )} className="ms-img-round" alt="Img" />
                                        </div>
                                        <div className="media-body">
                                            <h6>{doctor?.name}</h6>
                                            <div className="float-end d-flex-colum justify-content-start">
                                                <div className="div">
                                                    <span style={{ marginBottom: "50%" }} class="badge badge-outline-danger">{doctor.isActive ? 'Active' : 'Inactive'}</span>
                                                </div>
                                                <div style={{ marginLeft: "15px" }} className="float-last">
                                                    <FontAwesomeIcon className="cursor-pointer" onClick={() => {setEditData(doctor); reset({ ...doctor, timing: {} }); setEditModal(true);}} icon={faEdit}></FontAwesomeIcon>
                                                    { userInfo.userType !== "DP" && <FontAwesomeIcon style={{ marginLeft: "8px" }} className="cursor-pointer" onClick={() => handleDelete(doctor)} icon={faTrash}></FontAwesomeIcon>}
                                                </div>
                                            </div>
                                            <p className="fs-12 my-1 text-disabled ">{doctor?.specialization?.name || '-'}</p>
                                            <h6 className="mt-0">
                                                <span className="fs-14">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                                {doctor?.clinic || ''}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </div>

            </div>
            {editModal && 
                <Modal
                    isOpen={editModal}
                    setIsOpen={setEditModal}
                    title={` Edit ${editData.name}`}
                    closeButton={false}
                    submitButton={false}
                >
                    <div>
                        <ImgUpload source={"doctor"} file={(image) => setSelectedImage(image)} editImage={getFullPath(editData.photo)} />
                    </div>
                    <form onSubmit={handleSubmit(Submit)} id="test">

                        <div className='row'>
                            <div className="col-12 mb-3">
                                <label className=''>Full Name</label>
                                <div className="input-group">
                                    <input type="text"
                                        className={`form-control ${errors?.name ? 'border-danger' : ''}`}
                                        placeholder="Andy America"
                                        {...register('name', {
                                            required: 'Full name is required'
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label className=''>Email &nbsp; <span className="text-disable">(optional)</span></label>
                            <div className="input-group">
                                <input type="email"
                                    className={`form-control`}
                                    placeholder="cutomer@doctortime.com"
                                    {...register('email')}
                                />
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label className=''>Phone</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors?.phone ? 'border-danger' : ''}`}
                                    placeholder="xxxx-xxx-xxx"
                                    onInput={(e) => {
                                        if (Number(e.target.value) && String(e.target.value).length < 10) e.target.value = e.target.value
                                        else if (Number(e.target.value)) e.target.value = e.target.value.slice(0, 10)
                                        else e.target.value = ''
                                    }}
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label className=''>address</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors?.address ? 'border-danger' : ''}`}
                                    placeholder="Address"
                                    {...register('address', {
                                        required: 'Email name is required'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="row">
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
                        </div>
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
                                            options={specialization}
                                            getOptionLabel={({ name }) => name}
                                            getOptionValue={({ id }) => id}
                                            className={`form-control p-0 ${errors.specialization ? 'border-danger' : ''}`}
                                            classNamePrefix="select"
                                        />
                                    )}
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
                                            {/* <FontAwesomeIcon className=' mx-3 cursor-pointer' icon={faTrash} onClick={() => handleDeleteTime(time)} /> */}

                                            <FontAwesomeIcon
                                                className="cursor-pointer"
                                                icon={faTrash}
                                                onClick={() =>
                                                    handleEditOrDelete(time)
                                                }
                                            ></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>)}
                        </div>

                        {days?.length > 0  && <div className="row px-2">
                            <div className="col-md-12 mb-3">
                                <label className=''>Timming</label>
                                <div className='row' style={{ paddingRight: 0 }}>
                                    <div className="col">
                                        <label htmlFor="">Days</label>
                                        <select name="days"
                                            className={`form-control ${errors?.timing?.day ? 'border-danger' : ''}`}
                                            {...register('timing.day')} >
                                            {days?.map((day) => <option value={day.value} >{day.day}</option>)}
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
                        

                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" onClick={() => setEditModal(false)}>Cancel</button>
                            <button type="submit" className="btn btn-primary shadow-none">Save</button>
                        </div>
                    </form>
                </Modal>
            }
            {
                <Modal
                    isOpen={doctorModal}
                    setIsOpen={setDoctorModal}
                    title="Add Doctor"
                    closeButton={false}
                    submitButton={false}
                >
                    <DoctorRegistration 
                        source={'modal'} 
                        setModal={setDoctorModal} 
                        refresh={() => getDoctors() } 
                        organization={userInfo?.organizationId}
                    />
                </Modal>
            }
        </>
    )
}
export default DoctorsList;