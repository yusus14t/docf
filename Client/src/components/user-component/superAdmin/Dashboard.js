import React from 'react';
import image from "../../../assets.app/img/dashboard/doctor-1.jpg";

const Dashbaord = () => {
    return (
        <div className='ms-content-wrapper'>
            <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                <div>
                    <h6>Dashboard</h6>
                </div>
            </div>
            <div className='row'>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <a href="#">
                        <div class="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                            <div class="ms-card-body media">
                                <div class="media-body">
                                    <h6>Patients</h6>
                                    <div className='d-flex justify-content-start'>
                                        <div className='ms-card-change text-dark me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                        <div className='ms-card-change text-dark '><span className='fs-07 text-white'>Total </span>34</div>
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
                                    <h6>Clinics</h6>
                                    <div className='d-flex justify-content-start'>
                                        <div className='ms-card-change text-dark me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                        <div className='ms-card-change text-dark '><span className='fs-07 text-white'>Total </span>34</div>
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
                                        <div className='ms-card-change text-dark me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                        <div className='ms-card-change text-dark '><span className='fs-07 text-white'>Total </span>34</div>
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
                                        <div className='ms-card-change text-dark me-3'><span className='fs-07 text-white'>Today </span>45</div>
                                        <div className='ms-card-change text-dark '><span className='fs-07 text-white'>Total </span>34</div>
                                    </div>
                                </div>
                            </div>
                            <i class="fas fa-stethoscope ms-icon-mr"></i>
                        </div>
                    </a>
                </div>
                <div class="col-xl-6 col-md-6 h-100">
                    <div class="ms-panel ms-panel-fh ms-widget">
                        <div class="ms-panel-header ms-panel-custome d-flex justify-space-between">
                            <div>
                                <h6>Patients List</h6>
                            </div>
                        </div>
                        <div style={{overflowY:"scroll"}} class="ms-panel-body h20 p-0">
                            <ul class="ms-followers ms-list ms-scrollable ps">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => <li class="ms-list-item media">
                                    <img src={image} class="ms-img-small ms-img-round" alt="people" />
                                    <div class="media-body mt-1">
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
        </div>

    )
}
export default Dashbaord;