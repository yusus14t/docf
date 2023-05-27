import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { useForm} from 'react-hook-form';
import Select from "react-select"
import useToasty from '../../hooks/toasty';
import { axiosInstance, getAuthHeader } from '../../constants/utils';

const Appointment = ({isOpen, setIsOpen}) => {
    const toasty = useToasty()
    const [isAnotherAppointment, setIsAnotherAppointment] = useState(false)
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const { register, handleSubmit, setError, clearErrors ,formState:{ errors }, control } = useForm({ onChange: true });
    const [doctor, setDoctor] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetchDoctors();
    },[])

    useEffect(() => setSelected(null), [isOpen] )

    const fetchDoctors = async () => {
        try {
            let { data } = await axiosInstance.get('/common/appointment-doctors', getAuthHeader());
            setDoctors(data?.doctors || [])
        } catch(error){ 
            toasty.error(error?.messgae)
            console.log(error) 
        }
    }

    const saveAppointment = async ( formData ) => {
        try {
            if(selected) formData = selected
            formData['doctor'] = doctor
            if( !doctor ){
                setError('doctor', {type: 'custom', message: 'Doctor is required'})
                return
            }
            let { data } = await axiosInstance.post('/common/add-appointment', formData,  getAuthHeader());
            await fetchDoctors();
            
            setIsOpen(false)
            toasty.success(data?.message)
        } catch(error){ 
            toasty.error(error?.messgae)
            console.log(error) 
        }
    }

    const getPatientByNumber = async (phone) => {
        try{
            if(phone){
                let { data } = await axiosInstance.get('/common/get-patient-by-number', { params: {phone}, ...getAuthHeader() })
                setPatients(data?.patient)
            }
        } catch(error){ console.log(error) }
    }

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
                        <div className="col-6 mb-3">
                            <label className=''>First Name</label>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control "
                                    placeholder="Andy"
                                    {...register('firstName', {
                                        required: !selected && 'First name is required'
                                    })}
                                />
                            </div>
                            {errors?.firstName && <div className="text-danger ">{errors?.firstName.message}</div>}

                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Last Name</label>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control "
                                    placeholder="America"
                                    {...register('lastName', {
                                        required: !selected && 'Last name is required'
                                    })}
                                />
                            </div>
                            {errors?.lastName && <div className="text-danger ">{errors?.lastName.message}</div>}

                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Phone</label>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control "
                                    placeholder="xxxx-xxx-xxx"
                                    onBlurCapture={(e) => getPatientByNumber(e.target.value)}
                                    onInput={(e) => {
                                        if(Number(e.target.value) && String(e.target.value).length < 10) e.target.value = e.target.value
                                        else if(Number(e.target.value)) e.target.value = e.target.value.slice(0,10)
                                        else e.target.value = ''
                                    }}
                                    {...register('phone', {
                                        required: !selected && 'Phone number is required',
                                    })}
                                />
                            </div>
                            {errors?.phone && <div className="text-danger ">{errors?.phone.message}</div>}

                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Gender</label>
                            <div className="input-group">
                                <select className='form-control'
                                    {...register('gender',{
                                        required: 'Gender is required'
                                    })}
                                >
                                    <option value={'M'} >Male</option>
                                    <option value={'F'} >Female</option>
                                    <option value={'O'} >Other</option>
                                </select>
                            </div>
                            {errors?.gender && <div className="text-danger ">{errors?.gender.message}</div>}

                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Blood Group</label>
                            <div className="input-group">
                                <select className='form-control'
                                    {...register('bloodGroup',{
                                        required: 'Blood Group is required'
                                    })}
                                >
                                    {['A', 'B', 'AB', 'O'].map( e => 
                                        <>
                                            <option value={`${e}+`} >{e}+</option>
                                            <option value={`${e}+`} >{e}-</option>
                                        </>
                                    )}
                                </select>
                            </div>
                            {errors?.bloodGroup && <div className="text-danger ">{errors?.bloodGroup.message}</div>}

                        </div>
                        <div className="col-6 mb-3">
                            <label className=''>Address</label>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control "
                                    placeholder="Ex: Ramghat Road Aligarh"
                                    {...register('address', {
                                        required: !selected && 'Address is required'
                                    })}
                                />
                            </div>
                            {errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                        </div>

                        <div className="col-md-12 mb-3">
                            <label >Doctor</label>
                            <div className="">
                                <Select
                                    // {...register('doctor')}
                                    isMulti={false}
                                    name="colors"
                                    options={doctors}
                                    getOptionLabel={({fullName}) => fullName}
                                    getOptionValue={({_id}) => _id}
                                    className=" p-0"
                                    classNamePrefix="select"
                                    onChange={({_id}) => {setDoctor(_id); clearErrors('doctor')}}
                                    formatOptionLabel={(option, meta) => 
                                        <div className='d-flex justify-content-between'>
                                            <div><span>{option.fullName}</span></div>
                                            <div><span style={{fontWeight:'bold', letterSpacing:'1.2px', color:'#4e81ff'}}>{option.clinic}</span></div>
                                            <div></div>
                                        </div>
                                    }
                                />
                            </div>
                            { errors?.doctor && <div className="text-danger ">{errors?.doctor.message}</div>}
                        </div>
                        {patients.length > 0 && <label>Please Select </label>}
                        <div className='overflow-auto mb-2' style={{maxHeight:'12rem'}}>
                            {patients.length > 0 && 
                                patients.map(( patient, index ) => 
                                <div class="col-12" key={index}>
                                    <div class={`ms-card card-gradient-dark ms-widget ms-infographics-widget ${ selected?._id === patient._id ? 'selected' : '' }`} style={{ marginBottom:'0.5rem'}} onClick={() => setSelected( selected ? null : patient ) }>
                                        <div class="ms-card-body media">
                                            <div class="media-body">
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <h6>{patient?.firstName} {patient?.lastName || ""}</h6>
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
                        <div class="col-12">
                            <button type='submit' className='btn btn-primary shadow-none mb-2' onClick={() => setIsAnotherAppointment(true)}>Add Another</button>
                            <div class="ms-card card-gradient-dark ms-widget ms-infographics-widget">

                                <div class="ms-card-body media">
                                    <div class="media-body">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h6>Andy America</h6>
                                                <p class="fs-12">XXXX-XXX-868</p>
                                                <p class="fs-12">Ramgat Road ......</p>
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
                    </>
                    
                }   
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={() => setIsOpen(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary shadow-none mx-2" onClick={() => {  }}>Save</button>
                </form>
            </Modal>
    )
}

export default Appointment;