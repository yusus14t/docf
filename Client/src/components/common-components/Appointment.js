import React, { useState } from 'react';
import Modal from './Modal';
import {useForm} from 'react-hook-form';

const Appointment = ({isOpen, setIsOpen}) => {
    const { register, handleSubmit, formState:{ errors } } = useForm({ onChange: true });
    return(
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeButton={false}
                submitButton={false}
                title='Appointment'
            >
                <form className="ms-form-wizard style1-wizard wizard form-content" onSubmit={handleSubmit((e) => console.log(e))} role="application">
                {false ?
                    <div className='row'>
                        <div className="col-md-6 mb-3">
                            <label className=''>First Name</label>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control "
                                    placeholder="Andy"
                                    {...register('firstName', {
                                        required: 'Clinic name is required'
                                    })}
                                />
                            </div>
                            {errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className=''>Last Name</label>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control "
                                    placeholder="America"
                                    {...register('lastName', {
                                        required: 'Clinic name is required'
                                    })}
                                />
                            </div>
                            {errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className=''>Phone</label>
                            <div className="input-group">
                                <input type="Number"
                                    className="form-control "
                                    placeholder="xxxx-xxx-xxx"
                                    {...register('name', {
                                        required: 'Clinic name is required'
                                    })}
                                />
                            </div>
                            {errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className=''>Gender</label>
                            <div className="input-group">
                                <select className='form-control'>
                                    <option value={'M'} >Male</option>
                                    <option value={'F'} >Female</option>
                                    <option value={'O'} >Other</option>
                                </select>
                            </div>
                            {errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className=''>Blood Group</label>
                            <div className="input-group">
                                <select className='form-control'>
                                    <option value={'A+'} >A+</option>
                                    <option value={'A-'} >A-</option>
                                    <option value={'B+'} >B+</option>
                                    <option value={'B-'} >B-</option>
                                    <option value={'AB+'} >AB+</option>
                                    <option value={'AB-'} >AB-</option>
                                    <option value={'O+'} >O+</option>
                                    <option value={'O-'} >O-</option>
                                </select>
                            </div>
                            {errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className=''>Address</label>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control "
                                    placeholder="Ex: Ramghat Road Aligarh"
                                    {...register('name', {
                                        required: 'Clinic name is required'
                                    })}
                                />
                            </div>
                            {errors?.name && <div className="text-danger ">{errors?.name.message}</div>}

                        </div>
                        <div class="col-12">
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
                                                <div className='d-flex'>
                                                    <p>Male</p>
                                                    <p className='mx-2'>B+</p>
                                                </div>
                                                <button type='button' className='btn btn-light btn-md mt-3'>save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <i class="flaticon-reuse"></i>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div class="col-12">
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
                            <button type='submit' className='btn btn-primary shadow-none mb-2'>Add Another</button>
                        </div>
                    </>
                    
                }   
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary shadow-none mx-2" onClick={() => {  }}>Save</button>
                </form>
            </Modal>
    )
}

export default Appointment;