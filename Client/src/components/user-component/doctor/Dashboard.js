import React, { lazy, useEffect, useState } from 'react';
import image from "../../../assets.app/img/dashboard/doctor-1.jpg"
import { axiosInstance, getAuthHeader } from '../../../constants/utils';
import Appointment from '../../common-components/Appointment';
const Dashbaord = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        getAppointments()
    },[])

    const getAppointments = async () => {
        try{
            let { data } = await axiosInstance.get('/doctor/get-appointments', {...getAuthHeader()})
            setAppointments(data?.appointments)
        } catch(error){ console.log(error) }
    }

    return (
        <div className='ms-content-wrapper'>
            <div className='row'>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <a href="#">
                        <div class="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                            <div class="ms-card-body media">
                                <div class="media-body">
                                    <h6>Today Patients</h6>
                                    <p class="ms-card-change"> 45</p>
                                </div>
                            </div>
                            <i class="fas fa-stethoscope ms-icon-mr"></i>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <a href="#">
                        <div class="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                            <div class="ms-card-body media">
                                <div class="media-body">
                                    <h6>Current Token</h6>
                                    <p class="ms-card-change"> 4</p>
                                </div>
                            </div>
                            <i class="fas fa-stethoscope ms-icon-mr"></i>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <a href="#">
                        <div class="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                            <div class="ms-card-body media">
                                <div class="media-body">
                                    <h6>Remaining</h6>
                                    <p class="ms-card-change"> 45</p>
                                </div>
                            </div>
                            <i class="fas fa-stethoscope ms-icon-mr"></i>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <a href="#">
                        <div class="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                            <div class="ms-card-body media">
                                <div class="media-body">
                                    <h6>Unreached</h6>
                                    <p class="ms-card-change">45</p>
                                </div>
                            </div>
                            <i class="fas fa-stethoscope ms-icon-mr"></i>
                        </div>
                    </a>
                </div>
                <div class="col-xl-6 col-md-6">
                    <div class="ms-panel ms-panel-fh ms-widget">
                        <div class="ms-panel-header ms-panel-custome d-flex justify-space-between">
                            <div>
                                <h6>Appointment List</h6>
                            </div>
                            <div className="">
                                <button className="btn btn-info btn-md" onClick={() => setIsModalOpen(true)} >Add Appointment</button>
                            </div>
                        </div>
                        <div class="ms-panel-body p-0">
                            <ul class="ms-followers ms-list ms-scrollable ps">
                                {appointments?.length && appointments.map((appointment, i) => <li class="ms-list-item media">
                                    <img src={image} class="ms-img-small ms-img-round" alt="people" />
                                    <div class="media-body mt-1">
                                        <h4>{appointment?.user.firstName} {appointment?.user.lastName || ""}</h4>
                                        <span class="fs-12">XXXX-XXX-{appointment?.user.phone.slice(5,10)}</span>
                                    </div>
                                    <button type="button" class="ms-btn-icon btn-success" name="button">{appointment?.token} </button>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && 
                <Appointment 
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                />
            }
        </div>

    )
}
export default Dashbaord;