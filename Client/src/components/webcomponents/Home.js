// import {FontAwesomeIcon} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBedPulse, faHeartPulse, faPills,  faPrescriptionBottleAlt, faStethoscope, faUserTimes, faUsers } from '@fortawesome/free-solid-svg-icons'
import Slider from "../../constants/Slider";
import img1 from '../../assets.web/img/home-1/400x280.jpg'
import img2 from '../../assets.web/img/home-1/370x250.jpg'
import Services from './Services';

function Home() {
    return(
        <>
            <Slider/>
             <div className="sigma_banner-info style-2">
        <div className="container">
          <div className="sigma_cta style-13 searchHome">
            <form method="post">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="form-group with-label">
                    <i className="fal fa-search d-none d-sm-block" />
                    <label>Search Topic</label>
                    <input type="text" className="topic-field" name="fname" placeholder="Search doctors, clinic, Hospitals etc." />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Location</label>
                    <div className="input-group">
                      <i className="fal fa-map-marker-alt d-none d-sm-block" />
                      <input type="text" className="location-field" name="location" placeholder="Location" />
                      <div className="input-group-append">
                        <button type="button">
                          <i className="fal fa-search me-1" />
                          Find Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>

      

            <div class="section section-padding sigma_service-sec style-16">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="sigma_service style-16">
            <div class="sigma_service-thumb">
            <FontAwesomeIcon className='icon' icon={faStethoscope} />

            </div>
            <div class="sigma_service-body">
              <h5>

                <a href="service-details.html">Therapiya</a>

              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod</p>
              <a href="service-details.html" class="btn-link primary-color">

                Read More

              <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} />


              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="sigma_service style-16">
            <div class="sigma_service-thumb">
              <FontAwesomeIcon className='icon' icon={faPills} />
            </div>
            <div class="sigma_service-body">
              <h5>

                <a href="service-details.html">Dentistry</a>

              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod</p>
              <a href="service-details.html" class="btn-link primary-color">

                Read More

                <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} />


              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="sigma_service style-16">
            <div class="sigma_service-thumb">
            <FontAwesomeIcon className='icon' icon={faPrescriptionBottleAlt} />

            </div>
            <div class="sigma_service-body">
              <h5>

                <a href="service-details.html">Virusology</a>

              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod</p>
              <a href="service-details.html" class="btn-link primary-color">

                Read More

              <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} />

              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="sigma_service style-16">
            <div class="sigma_service-thumb">
             <FontAwesomeIcon className='icon' icon={faBedPulse} />

            </div>
            <div class="sigma_service-body">
              <h5>

                <a href="service-details.html">Pharmocology</a>

              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod</p>
              <a href="service-details.html" class="btn-link primary-color">

                Read More

              <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
             <div className="section secondary-overlay">
        <video autoPlay muted loop id="myVideo">
          <source src="assets/video/hydrogen-molecule.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="sigma_about style-21">
                <div className="section-title">
                  <h3 className="title text-white">Why Choose Docfind Clinic?</h3>
                </div>
                <div className="sigma_about-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. It is a long established fact that a reader will be Lorem ipsum dolor sit amet consectetur.</p>
                  <div className="sigma_info style-15">
                    <div className="sigma_info-title">
                    <FontAwesomeIcon className='whyicon' icon={faHeartPulse} />

                    </div>
                    <div className="sigma_info-description">
                      <h5>Quality Control System</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>
                  <div className="sigma_info style-15 mb-0">
                    <div className="sigma_info-title">
                  <FontAwesomeIcon className='whyicon' icon={faUsers} />

                    </div>
                    <div className="sigma_info-description">
                      <h5>Highly Professional Staff</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
              <div className="sigma_about style-21 mt-0 w-100 h-100">
                <div className="sigma_about-image-1">
                  <img src={img1} alt="img" />
                </div>
                <div className="sigma_about-image-2 d-none d-sm-block">
                  <img src={img2} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="sigma_counter-wrapper margin-negative bg-primary-1 style-5" style={{backgroundImage: 'url(assets/img/pattern-2.png)'}}>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="sigma_counter style-5">
                  <span>
                    <b className="counter" data-from={0} data-to={340}>340</b>
                    <span className="plus">+</span>
                  </span>
                  <p className="text-white">Customers</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="sigma_counter style-5">
                  <span>
                    <b className="counter" data-from={0} data-to={120}>120</b>
                    <span className="plus">+</span>
                  </span>
                  <p className="text-white">Years Practical Experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="sigma_counter style-5">
                  <span>
                    <b className="counter" data-from={0} data-to={120}>120</b>
                    <span className="plus">+</span>
                  </span>
                  <p className="text-white">Awesome Team Members</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="sigma_counter style-5">
                  <span>
                    <b className="counter" data-from={0} data-to={80}>80</b>
                    <span className="plus">+</span>
                  </span>
                  <p className="text-white">Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          <Services/>
        </>
    )
        
}

export default Home;