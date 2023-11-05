import React, { useEffect, useState } from 'react';
import image from "../../../assets.app/img/dashboard/doctor-1.jpg"
import { axiosInstance, getAuthHeader } from '../../../constants/utils';
import Appointment from '../../common-components/Appointment/Appointment';
import UserModal from '../../common-components/UserModal';
import { DoughnutChart, LineChart } from '../../common-components/Chart';
import useToasty from '../../../hooks/toasty';
import events from '../../../events';

const Dashbaord = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [unreachedData, setUnreachedData] = useState([]);
    const [appointmentData, setAppointmentData] = useState({})
    const [isWeekChart, setIsWeekChart] = useState(true)
    const [chartData, setChartData] = useState({})
    const [analyticsData, setAnalyticsData] = useState({})
    const [ doghnutData, setDoghnutData ] = useState({ gender: [], status: [] })

    const toasty = useToasty();

    useEffect(() => {
        changeFilter('clinics')
        getAppointments('waiting')
        getAppointments('unreached')
        getGenderData()

        events.addEventListener('new-appointment', ( event ) => eventHandler( event ))
        events.addEventListener('re-appointment', ( event ) => eventHandler( event ))
        events.addEventListener('status', ( event ) => eventHandler( event ))

        return(() => {
            ['new-appointment', 're-appointment', 'status'].map( name => events.removeEventListener( name, () => {} ))
        })
    },[])

    useEffect(() => {
        analytics()
    }, [appointments])

    const eventHandler = ( event ) => {
        toasty.success('New Appointment Added')
        getAppointments('waiting')
    }


    const analytics = async () => {
        try{
            let { data } = await axiosInstance.get('/doctor/analytics')
            setAnalyticsData(data?.analytics)
        } catch(error){
            toasty.error(error?.message) 
            console.error(error) 
        }
    }

    const getGenderData = async () => {
        try {
            let { data } = await axiosInstance.get('/doctor/doghnut-analytics')
            setDoghnutData({  status: data?.analytic?.status, gender: data?.analytic?.gender})
        }catch(error){ console.error(error) }
    }

    const getAppointments = async (status) => {
        try {
            let { data } = await axiosInstance.get('/doctor/get-appointments', {params: { status }, ...getAuthHeader()})
            if(status === 'waiting')  setAppointments(data?.appointments || [])
            else setUnreachedData(data?.appointments || [])   
        } catch (error) { console.log(error) }
    }


    const changeFilter = (value) => {
        let data = {
            week: [],
            month: []
        }
        if (value === 'clinics') {
            data = {
                week: ['2', '5', '1', '2', '3', '7', '9'],
                month: ['3', '1', '6', '9', '3', '6', '8', '3', '4', '2', '6', '2']
            }
        }
        else if (value === 'hospitals') {
            data = {
                week: ['4', '3', '5', '3', '7', '8', '9'],
                month: ['6', '3', '7', '8', '4', '2', '6', '3', '9', '5', '8', '4']
            }
        }
        else if (value === 'visits') {
            data = {
                week: ['1', '2', '3', '4', '3', '2', '3'],
                month: ['1', '2', '3', '4', '3', '2', '3', '3', '7', '4', '8', '4']
            }
        }
        else if (value === 'doctors') {
            data = {
                week: ['6', '3', '6', '4', '8', '3', '6'],
                month: ['5', '2', '4', '7', '8', '9', '6', '5', '4', '2', '4', '4']
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
                                    <div className='d-flex justify-content-start'>
                                        <div className='ms-card-change  me-3'><span className='fs-07 text-white'>Today </span>{analyticsData?.today || '0'}</div>
                                        {/* <div className='ms-card-change '><span className='fs-07 text-white'>Total </span>{analyticsData?.total || '0'}</div> */}
                                    </div>
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
                                    <div className='ms-card-change '><span className='fs-07 text-white'>Today </span>{analyticsData?.token || '0'}</div>
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
                                    <div className='ms-card-change '><span className='fs-07 text-white'>Today </span>{ appointments.length || '0'}</div>
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
                                    <div className='ms-card-change '><span className='fs-07 text-white'>Today </span>{unreachedData.length || '0'}</div>
                                </div>
                            </div>
                            <i class="fas fa-stethoscope ms-icon-mr"></i>
                        </div>
                    </a>
                </div>

                <div class="col-xl-3 col-md-6 col-sm-12 mb-4">
                    <div class="ms-panel h-100">
                        <div class="ms-panel-header">
                            <div>
                                <h6>Status</h6>
                            </div>
                        </div>
                        <div class="ms-panel-body ">
                            <div className='h5'>
                                Appointment Status
                            </div>
                            <div className='text-center' style={{ height: '14rem', width: '14rem' }}>
                                {doghnutData.gender && <DoughnutChart labelName={'Patient'} chartData={doghnutData.status} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12 mb-4">
                    <div class="ms-panel h-100">
                        <div class="ms-panel-header">
                            <div>
                                <h6>Genders</h6>
                            </div>
                        </div>
                        <div class="ms-panel-body ">
                            <div className='h5'>
                                Patients By Gender
                            </div>
                            <div className='text-center' style={{ height: '14rem', width: '14rem' }}>
                                {doghnutData.status && <DoughnutChart labelName={'Patient'} chartData={doghnutData.gender} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6">
                    <div class="ms-panel ms-widget">
                        <div class="ms-panel-header ms-panel-custome d-flex justify-space-between">
                            <div>
                                <h6>Today Appointments</h6>
                            </div>
                            <div className="">
                                <button className=" btn btn-info btn-md" onClick={() => setIsModalOpen(true)} >Add Appointment</button>
                            </div>
                        </div>
                        <div class="ms-panel-body p-0 h20 overflow-scroll">
                            <ul class={`ms-followers ms-list ms-scrollable ps ${appointments?.length == 0 && 'text-center'}`}>
                                {appointments?.length > 0 ?
                                    appointments.map((appointment, i) => <li class="ms-list-item media">
                                        <img src={image} class="ms-img-small ms-img-round" alt="people" />
                                        <div class="media-body mt-1 cursor-pointer" onClick={() => { setAppointmentData(appointment); setIsUserModalOpen(true); }}>
                                            <h4>{appointment?.user.name || ""}</h4>
                                            <span class="fs-12">XXXX-XXX-{appointment?.user.phone.slice(7, 10)}</span>
                                        </div>
                                        <button type="button" class="ms-btn-icon btn-success" name="button">{appointment?.token} </button>
                                    </li>) : <span>No Data</span>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6">
                    <div class="ms-panel ms-widget">
                        <div class="ms-panel-header ms-panel-custome d-flex justify-space-between">
                            <div>
                                <h6>Today Unreached Patients</h6>
                            </div>
                        </div>
                        <div class="ms-panel-body p-0 h20 overflow-scroll">
                            <ul class={`ms-followers ms-list ms-scrollable ps ${unreachedData?.length == 0 && 'text-center'}`}>
                                {unreachedData?.length > 0 ?
                                    unreachedData.map((appointment, i) => <li class="ms-list-item media">
                                        <img src={image} class="ms-img-small ms-img-round" alt="people" />
                                        <div class="media-body mt-1 cursor-pointer" onClick={() => { setAppointmentData(appointment); setIsUserModalOpen(true); }}>
                                            <h4>{appointment?.user.name || ""}</h4>
                                            <span class="fs-12">XXXX-XXX-{appointment?.user.phone.slice(7, 10)}</span>
                                        </div>
                                        <button type="button" class="ms-btn-icon btn-success" name="button">{appointment?.token} </button>
                                    </li>) : <span className='text-centre'>No Data</span>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen &&
                <Appointment
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    refresh={() => {
                        getAppointments('waiting')
                        getAppointments('unreached')
                    }}
                />
            }

            {isUserModalOpen &&
                <UserModal
                    isOpen={isUserModalOpen}
                    setIsOpen={setIsUserModalOpen}
                    appointmentId={appointmentData?._id}
                    refresh={() => {
                        getAppointments('waiting')
                        getAppointments('unreached')

                    }}
                />
            }
        </div>

    )
}
export default Dashbaord;