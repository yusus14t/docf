import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import profile from '../../assets.app/img/dashboard/doctor-1.jpg'
import { axiosInstance, getAuthHeader, getFullPath } from "../../constants/utils";
import Modal from "../common-components/Modal";
import { useForm } from "react-hook-form";
import useToasty from '../../hooks/toasty';

const DoctorsList = () => {
    const [editModal, setEditModal] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [editData, setEditData] = useState({})
    const [searchInput, setSearchInput] = useState('');
    const toasty = useToasty();
    const { register, handleSubmit, reset, formState:{ errors }} = useForm({ onChange: true })

    useEffect(() => {
        getDoctors()
    }, [searchInput,])

    const getDoctors = async () => {
        try {
            let { data } = await axiosInstance.get('/doctor/allDoctors', {params: { source: 'dashboard', searchInput }, ...getAuthHeader()})
            setDoctors(data.doctors)
        } catch (error) { console.log(error) }
    }

    const handleDelete = async (doctor) => {
        try {
            let { data } = await axiosInstance.post('/doctor/delete-doctor', { _id: doctor._id }, getAuthHeader());
            setDoctors((old) => old.filter(d => d._id !== doctor._id))
            toasty.success()
        } catch (error) { console.log(error) }
    }

    const Submit = async (formData) => {
        try{
            let { data } = await axiosInstance.post('/doctor/edit-doctor', formData, getAuthHeader())
            setDoctors(( prev ) => prev.map( doctor => {
                if( doctor._id === data?.doctor?._id ) doctor = data?.doctor
                return doctor
            }))
            reset({})
            setEditModal(false)
            toasty.success(data?.message)
        } catch(error){ 
            console.error(error) 
            toasty.error(error?.message)
        }
    }

    return (
        <>
            <div className="ms-content-wrapper mx-2">
                <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                    <div><h6>Doctors List</h6></div>
                    <div class="ms-form-group my-0 mb-0 has-icon fs-14">
                        <input type="search" class="ms-form-input" name="search" placeholder="Search for doctors" onInput={(e) => { setSearchInput(e.target.value); console.log(e.target.value) }} />
                        <i class="flaticon-search text-disabled"></i>
                    </div>

                </div>
                <div className="row">
                    {doctors.length > 0 && doctors.map((doctor, index) => (
                        <div key={index} className="col-lg-4 col-md-3  col-sm-6">
                            <div className="ms-card">
                                <div className="ms-card-body">
                                    <div className="media mb-0 fs-14">
                                        <div className="me-2 align-self-center">
                                            <img src={getFullPath(doctor.photo)} className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body">
                                            <h6>{doctor?.fullName}</h6>
                                            <div className="float-end d-flex-colum justify-content-between">
                                                <div className="div">
                                                    <span style={{ marginBottom: "50%" }} class="badge badge-outline-danger">{doctor.isActive ? 'Active' : 'Inactive'}</span>
                                                </div>
                                                <div style={{ marginLeft: "15px" }} className="float-last">
                                                    <FontAwesomeIcon className="cursor-pointer" onClick={() => {setEditData(doctor); reset(doctor); setEditModal(true);}} icon={faEdit}></FontAwesomeIcon>
                                                    <FontAwesomeIcon style={{ marginLeft: "8px" }} className="cursor-pointer" onClick={() => handleDelete(doctor)} icon={faTrash}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                            <p className="fs-12 my-1 text-disabled">{doctor?.specialization?.name || 'Neurologist'}</p>
                                            <h6 className="mt-0">
                                                <span className="fs-14">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                                {doctor?.clinic || 'Madani Clinic'}</h6>
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
                    title={` Edit ${ editData.fullName }`}
                    closeButton={false}
                    submitButton={false}
                >
                    <form onSubmit={handleSubmit(Submit)} id="test">
                        <div className='row'>
                            <div className="col-12 mb-3">
                                <label className=''>Full Name</label>
                                <div className="input-group">
                                    <input type="text"
                                        className={`form-control ${errors?.fullName ? 'border-danger' : ''}`}
                                        placeholder="Andy America"
                                        {...register('fullName', {
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
                                        if(Number(e.target.value) && String(e.target.value).length < 10) e.target.value = e.target.value
                                        else if(Number(e.target.value)) e.target.value = e.target.value.slice(0,10)
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
                        <div className="input-group mb-3">
                            <div className="col">
                                <label >Active</label>
                            </div>
                            <label class="ms-switch">
                                <input type="checkbox"
                                    {...register('isActive')}
                                />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" onClick={() => setEditModal(false)}>Cancel</button>
                            <button type="submit" className="btn btn-primary shadow-none">Save</button>
                        </div>
                    </form>
                </Modal>
            }
        </>
    )
}
export default DoctorsList;