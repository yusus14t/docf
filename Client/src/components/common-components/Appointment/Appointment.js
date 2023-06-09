import React, {  useEffect, useState } from 'react';
import Modal from '../Modal';
import { Controller, useForm} from 'react-hook-form';
import Select from "react-select"
import useToasty from '../../../hooks/toasty';
import { axiosInstance, getAuthHeader, NumberFormat } from '../../../constants/utils';
import { useParams } from 'react-router-dom';

const Appointment = ({isOpen, setIsOpen,  refresh = () => {} }) => {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const toasty = useToasty()
    const params = useParams()
    const [isAnotherAppointment, setIsAnotherAppointment] = useState(false)
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const { register, handleSubmit ,formState:{ errors }, control, clearErrors } = useForm({ onChange: true });
    const [selected, setSelected] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [cardError, setCardError] = useState('');

    useEffect(() => {
        fetchDoctors();
        if(userInfo.userType === "DR") setIsAnotherAppointment(true)
    },[appointments,])

    useEffect(() => {
        setSelected(null)
    }, [isOpen] )

    const fetchDoctors = async () => {
        try {
            let { data } = await axiosInstance.get('/common/appointment-doctors', { params: { organizationId: params?.id }, ...getAuthHeader()});
            setDoctors(data?.doctors || [])
        } catch(error){ 
            toasty.error(error?.messgae)
            console.log(error) 
        }
    }

    const saveAppointment = async ( formData ) => {
        try {
            if( !formData?.phone && !selected) {
                setCardError('Card Must be select')
                return;
            }
            if(selected){
                let selectedData = { doctor: {_id: formData.doctor?._id} }
                formData = { ...selectedData, ...selected }
            }

            let { data } = await axiosInstance.post('/doctor/add-appointment', formData,  );
            setAppointments(data?.appointment)
            
            setIsOpen(false)
            refresh()
            toasty.success(data?.message)
        } catch(error){ 
            setIsOpen(false)
            toasty.error(error?.message)
            console.log(error) 
        }
    }

    //No neend to remove it gives to next update

    // const getPatientByNumber = async (phone) => {
    //     try{
    //         if(phone){
    //             let { data } = await axiosInstance.get('/common/get-patient-by-number', { params: {phone} })
    //             setPatients(data?.patient)
    //         }
    //     } catch(error){ console.log(error) }
    // }

    return(
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeButton={false}
                submitButton={false}
                title='Appointment'
            >
                <form className="ms-form-wizard style1-wizard wizard form-content" onSubmit={handleSubmit(saveAppointment)} role="application">
                {isAnotherAppointment ?
                    <div className='row'>
                        { userInfo.userType === 'PT' && <span className='text-info mb-3 cursor-pointer' onClick={() => setIsAnotherAppointment(false) }>Saved Cards Lists</span>}

                        <div className="col-6 mb-3">
                            <label className=''>Full Name</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors?.fullName ? 'border-danger' : ''}`}
                                    placeholder="Andy"
                                    {...register('fullName', {
                                        required: !selected && 'Full name is required'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Phone</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors?.phone ? 'border-danger' : ''}`}
                                    placeholder="xxxx-xxx-xxx"
                                    // onBlurCapture={(e) => getPatientByNumber(e.target.value)}
                                    onInput={(e) => NumberFormat(e)}
                                    {...register('phone', {
                                        required: !selected && 'Phone number is required',
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Gender</label>
                            <div className="input-group">
                                <select className='form-control'>
                                    <option value={'M'} >Male</option>
                                    <option value={'F'} >Female</option>
                                    <option value={'O'} >Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Blood Group</label>
                            <div className="input-group">
                                <select className='form-control'>
                                    {['A', 'B', 'AB', 'O'].map( e => 
                                        <>
                                            <option value={`${e}+`} >{e}+</option>
                                            <option value={`${e}+`} >{e}-</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label className=''>Address</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors?.address ? 'border-danger' : ''}`}
                                    placeholder="Ex: Ramghat Road Aligarh"
                                    {...register('address', {
                                        required: !selected && 'Address is required'
                                    })}
                                />
                            </div>
                        </div>

                        <div className="col-md-12 mb-3">
                            <label >Doctor</label>
                            <div className="">
                                <Controller
                                    control={control}
                                    name="doctor"
                                    rules={{
                                        required: 'Doctor must be required'
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isMulti={false}
                                            options={doctors}
                                            className={`form-control p-0 ${errors?.doctor ? 'border-danger' : ''}`}
                                            classNamePrefix="select"
                                            formatOptionLabel={(option) => 
                                                <div className='d-flex justify-content-between'>
                                                    <div><span>{option.fullName}</span></div>
                                                    <div><span style={{fontWeight:'bold', letterSpacing:'1.2px', color:'#4e81ff'}}>{option.clinic}</span></div>
                                                    <div></div>
                                                </div>
                                            }
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        {patients.length > 0 && <label>Please Select </label>}
                        <div className='overflow-auto mb-2' style={{maxHeight:'12rem'}}>
                            {patients.length > 0 && 
                                patients.map(( patient, index ) => 
                                <div class="col-12" key={index}>
                                    <div class={`ms-card card-gradient-dark ms-widget ms-infographics-widget ${ selected?._id === patient._id ? 'appointment-selected' : '' }`} style={{ marginBottom:'0.5rem'}} onClick={() => {setSelected( selected ? null : patient ); } }>
                                        <div class="ms-card-body media">
                                            <div class="media-body">
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <h6>{patient?.fullName}</h6>
                                                        <p class="fs-12">XXXX-XXX-{patient?.phone?.slice(5,10)}</p>
                                                    </div>
                                                    <div className='col-6 dflex'>
                                                        <p>Male</p>
                                                        <p className='mx-2'>B+</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <i class="flaticon-reuse"></i>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    :
                    <>
                        {userInfo.userType === 'PT' && 
                        <div className='row'>
                            <div class="col-12 mb-4">
                                <button type='submit' className='btn btn-primary shadow-none mb-2' onClick={() => setIsAnotherAppointment(true)}>Add Another</button>
                                <br />
                                <span className='text-disable'>Select Card</span>
                                <div class={`ms-card card-gradient-dark ms-widget ms-infographics-widget mb-0 ${  selected && 'appointment-selected' }`} onClick={() => {setSelected( selected ? null : userInfo  ); setCardError('')}}>
                                    <div class="ms-card-body media">
                                        <div class="media-body">
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <h6>{userInfo.fullName || ""}</h6>
                                                    <p class="fs-12">{userInfo?.phone || ""}</p>
                                                    <p class="fs-12">{userInfo?.address || ""}</p>
                                                </div>
                                                <div className='col-6 dflex'>
                                                    <p>{userInfo?.gender || ""}</p>
                                                    <p className='mx-2'>{userInfo?.bloodGroup || ""}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <i class="flaticon-reuse"></i>
                                </div>
                                <span className='text-danger'>{cardError}</span>
                            </div>
                            <div className="col-md-12 mb-3">
                            <label >Doctor</label>
                            <div className="">
                                <Controller
                                    control={control}
                                    name="doctor"
                                    rules={{
                                        required: 'Doctor must be required'
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isMulti={false}
                                            options={doctors}
                                            className={`form-control p-0 ${errors?.doctor ? 'border-danger' : ''}`}
                                            classNamePrefix="select"
                                            formatOptionLabel={(option) => 
                                                <div className='d-flex justify-content-between'>
                                                    <div><span>{option.fullName}</span></div>
                                                    <div><span style={{fontWeight:'bold', letterSpacing:'1.2px', color:'#4e81ff'}}>{option.clinic}</span></div>
                                                    <div></div>
                                                </div>
                                            }
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        </div>
                        }
                    </>
                    
                }   
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={() => setIsOpen(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary shadow-none mx-2">Save</button>
                </form>
            </Modal>
    )
}

export default Appointment;