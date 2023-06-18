import React, { useEffect, useState } from 'react';
import image from "../../../assets.app/img/dashboard/doctor-1.jpg"
import { axiosInstance, getAuthHeader } from '../../../constants/utils';
import Appointment from '../../common-components/Appointment/Appointment';
import UserModal from '../../common-components/UserModal';
import { DoughnutChart, LineChart } from '../../common-components/Chart';
import { useEvent } from '../../../hooks/common-hook';
import useToasty from '../../../hooks/toasty';

const Dashbaord = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [appointmentData, setAppointmentData] = useState({})
    const [isWeekChart, setIsWeekChart] = useState(true) 
    const [chartData, setChartData] = useState({})
    const event = useEvent('new-appointment')
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const toasty = useToasty();

    useEffect(() => {
        changeFilter('clinics')
        getAppointments()
    },[]) 

    useEffect(() => {
        if( userInfo._id === event?.data?.doctorId){
            setAppointments([...appointments, event.data])
            toasty.success('New Appointment Added')
        }
    },[event])

    const getAppointments = async () => {
        try{
            let { data } = await axiosInstance.get('/doctor/get-appointments', {...getAuthHeader()})
            setAppointments(data?.appointments)
        } catch(error){ console.log(error) }
    }
    
    const changeFilter = (value) => {
        let data = {
            week: [],
            month: []
        }
        if(value === 'clinics') {
            data = {
                week:  ['2', '5', '1', '2', '3', '7', '9'],
                month: ['3', '1', '6', '9', '3', '6', '8','3','4','2','6', '2']
            }
        }
        else if( value === 'hospitals') {
            data = {
                week:  ['4', '3', '5', '3', '7', '8', '9'],
                month: ['6', '3', '7', '8', '4', '2', '6','3','9','5','8', '4']
            }
        }
        else if( value === 'visits') {
            data = {
                week:  ['1', '2', '3', '4', '3', '2', '3'],
                month: ['1', '2', '3', '4', '3', '2', '3','3','7','4','8', '4']
            }
        }
        else if( value === 'doctors') {
            data = {
                week:  ['6', '3', '6', '4', '8', '3', '6'],
                month: ['5', '2', '4', '7', '8', '9', '6','5','4','2','4', '4']
            }
        }
        setChartData(data)
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
                <div class="col-xl-6 col-md-6 col-sm-12 mb-4">
                    <div class="ms-panel">
                        <div class="ms-panel-header">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6>Total Doctors</h6>
                                </div>
                                <div>
                                    <div className='form-ontrol'>
                                        <select class="form-control" 
                                            onChange={(e) => changeFilter(e.target.value)}
                                        >
                                            <option value="clinics">Patient</option>
                                            <option value="doctors">Reached</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="ms-panel-body">
                             <span className='h6'>Week</span>
                            <label class="ms-switch mx-2">
                                <input type="checkbox"
                                    onChange={(e) => setIsWeekChart(!e.target.checked)}
                                />
                                <span class="ms-switch-slider ms-switch-dark round"></span>
                            </label>
                            <span className='h6'>Year</span>
                            <LineChart filterType={isWeekChart ? 'week' : 'month' } labelName={'Patient'} chartData={chartData} />
                        </div>
                        
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12 mb-4">
                    <div class="ms-panel h-100">
                        <div class="ms-panel-header">
                            <div>
                                <h6>Totals</h6>
                            </div>
                        </div>
                        <div class="ms-panel-body d-flex justify-content-around align-items-center">
                            <div>
                                <span className='h4'>Organization</span>
                                <div className='mt-3 float-left'>
                                    <p className='h6'>Hospitals <span className='h5 text-info'>46%</span></p>
                                    <p className='h6'>Clinics <span className='h5 text-info'>46%</span></p>
                                    <p className='h6'>Doctors <span className='h5 text-info'>46%</span></p>
                                </div>
                            </div>
                            <div className='text-center' style={{ height:'12rem', width:'12rem' }}>
                                <DoughnutChart filterType={isWeekChart ? 'week' : 'month' } labelName={'Patient'} chartData={chartData} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6">
                    <div class="ms-panel ms-panel-fh ms-widget">
                        <div class="ms-panel-header ms-panel-custome d-flex justify-space-between">
                            <div>
                                <h6>Appointment List</h6>
                            </div>
                            <div className="">
                                <button className=" btn btn-info btn-md" onClick={() => setIsModalOpen(true)} >Add Appointment</button>
                            </div>
                        </div>
                        <div class="ms-panel-body p-0 h20">
                            <ul class="ms-followers ms-list ms-scrollable ps">
                                {appointments?.length && appointments.map((appointment, i) => <li class="ms-list-item media">
                                    <img src={image} class="ms-img-small ms-img-round" alt="people" />
                                    <div class="media-body mt-1 cursor-pointer" onClick={() => {setAppointmentData(appointment); setIsUserModalOpen(true); }}>
                                        <h4>{appointment?.user.fullName || ""}</h4>
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
                    refresh={() => getAppointments()}
                />
            }

            {isUserModalOpen && 
                <UserModal 
                    isOpen={isUserModalOpen}
                    setIsOpen={setIsUserModalOpen}
                    appointmentId={appointmentData?._id}
                />
            }
        </div>

    )
}
export default Dashbaord;