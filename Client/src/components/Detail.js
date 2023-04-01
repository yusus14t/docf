import React, { useState } from 'react';
import { DoctorInfoCard } from './common-components/Card';
import PatientList from './common-components/PatientList';
import Banner from './common-components/Banner';

function Detail() {
    const [ patients ] = useState([1,2,3,4,5]);
    return (
        <>  
            <Banner title={"Doctor Details"} />
            <div className='section sigma-post-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='sigma_post-details-inner'>
                                <DoctorInfoCard />
                                <div className='spacer' ></div>
                                <div id="overview my-4">
                                    <h4>Overview Of White Plains Hospital</h4>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <div class="spacer">
                                    </div>
                                    <h4>Subspecialities</h4>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                    </p>
                                    <div class="row">
                                    <div class="col-lg-6">
                                        <div class="sigma_general-list style-3">
                                        <ul>
                                            <li>
                                            <i class="far fa-check"></i>
                                            <span>Best Fitness Excercises</span>
                                            </li>
                                            <li>
                                            <i class="far fa-check"></i>
                                            <span>Combine Fitness and Lifestyle</span>
                                            </li>
                                            <li>
                                            <i class="far fa-check"></i>
                                            <span>Achieve a Specific Goal</span>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="sigma_general-list style-3">
                                        <ul>
                                            <li>
                                            <i class="far fa-check"></i>
                                            <span>Best Fitness Excercises</span>
                                            </li>
                                            <li>
                                            <i class="far fa-check"></i>
                                            <span>Combine Fitness and Lifestyle</span>
                                            </li>
                                            <li>
                                            <i class="far fa-check"></i>
                                            <span>Achieve a Specific Goal</span>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div id="reviews">
                                    <h4>Patient Experience</h4>
                                    <PatientList patients={patients} />
                                    <a href="/" class="sigma_btn">
                                        See More
                                        <i class="fal fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;