import React, {  useEffect, useState } from 'react';
import image from "../../../assets.app/img/dashboard/doctor-1.jpg"
import { Link } from 'react-router-dom';
import UserModal from '../../common-components/UserModal';  
import { LineChart, DoughnutChart } from '../../common-components/Chart';

const Dashbaord = () => {
    const [isUserModalOpen, setUserModalOpen] = useState(false)
    const [doctor, setDoctor] = useState({})
    const [isWeekChart, setIsWeekChart] = useState(true) 
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        changeFilter('clinics')
    }, [])
    
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
        <div className='ms-content-wrapper content-height'>
            <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                <div>
                    <h6>Dashboard</h6>
                </div>
            </div>
            <div className='row'>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <div class="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                        <div class="ms-card-body media">
                            <div class="media-body">
                                <h6>Visits</h6>
                                <div className='d-flex justify-content-start'>
                                    <div className='ms-card-change text-light me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                    <div className='ms-card-change text-light'><span className='fs-07 text-white'>Total </span>34</div>
                                </div>
                            </div>
                        </div>
                        <i class="fas fa-stethoscope ms-icon-mr"></i>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <a href="#">
                        <div class="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                            <div class="ms-card-body media">
                                <div class="media-body">
                                    <h6>Clinics</h6>
                                    <div className='d-flex justify-content-start'>
                                        <div className='ms-card-change text-light me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                        <div className='ms-card-change text-light '><span className='fs-07 text-white'>Total </span>34</div>
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
                                    <h6>Hospitals</h6>
                                    <div className='d-flex justify-content-start'>
                                        <div className='ms-card-change text-light me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                        <div className='ms-card-change text-light '><span className='fs-07 text-white'>Total </span>34</div>
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
                                    <h6>Doctors</h6>
                                    <div className='d-flex justify-content-start'>
                                        <div className='ms-card-change text-light me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                        <div className='ms-card-change text-light '><span className='fs-07 text-white'>Total </span>34</div>
                                    </div>
                                </div>
                            </div>
                            <i class="fas fa-stethoscope ms-icon-mr"></i>
                        </div>
                    </a>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12">
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
                                            <option value="clinics">Clinics</option>
                                            <option value="doctors">Doctors</option>
                                            <option value="hospitals">Hospitals</option>
                                            <option value="visits">Visits</option>
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
                <div class="col-xl-6 col-md-6 col-sm-12">
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
                <div class="col-xl-6 col-md-6 h-100">
                    <div class="ms-panel ms-panel-fh ms-widget">
                        <div class="ms-panel-header ms-panel-custome d-flex justify-space-between">
                            <div>
                                <h6>Latest Doctors</h6>
                            </div>
                            <div className="">
                                <Link to={'/mr/clinic-registration'} className='btn btn btn-info btn-md'>Add Clinic</Link>
                            </div>
                        </div>
                        <div style={{overflowY:"scroll"}} class="ms-panel-body h20 p-0">
                            <ul class="ms-followers ms-list ms-scrollable ps">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => <li class="ms-list-item media">
                                    
                                    <img src={image} class="ms-img-small ms-img-round" alt="people" />
                                    <div class="media-body mt-1"  onClick={() => {setUserModalOpen(true); setDoctor(e)}}>
                                        <h4>Micheal</h4>
                                        <span class="fs-12">MBBS, MD</span>
                                    </div>
                                    <button type="button" class="ms-btn-icon btn-success" name="button"> </button>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
                isUserModalOpen && <UserModal
                    isOpen={isUserModalOpen}
                    setIsOpen={setUserModalOpen}
                    appointmentData={{}}
                />
            }
        </div>

    )
}
export default Dashbaord;