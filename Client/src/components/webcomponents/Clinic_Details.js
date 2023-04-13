import React, { useState } from 'react';
import { ClincInfoCard } from '../common-components/ClinicCard';
import PatientList from '../common-components/PatientList';
import Banner from '../common-components/Banner';

function Detail() {
    const [ patients ] = useState([1,2,3,4,5]);
    return (
        <>  
            <Banner title={"Clinic Details"} />
            <div className="section sigma_post-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="sigma_post-details-inner">
                <div className="entry-content">
                  <div className="sigma_team style-17 mb-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="sigma_team-thumb">
                          <img src="assets/img/clinic-details/243x264.jpg" alt="team" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sigma_team-body">
                          <h5>
                            <a href="/">Delta Medical College &amp; Hospital</a>
                          </h5>
                          <div className="sigma_rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                            <span className="ms-3">(38)</span>
                          </div>
                          <div className="sigma_team-categories">
                            <a href="/" className="sigma_team-category">Obstetrics &amp; Gynaecology</a>
                          </div>
                          <div className="sigma_team-info mt-4">
                            <span>
                              <i className="fal fa-phone" />
                              (741)376-5672
                            </span>
                            <span>
                              <i className="fal fa-at" />
                              marilyn.pierce@mail.com
                            </span>
                            <span>
                              <i className="fal fa-building" />
                              Metus ipsum Convallis
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail-menu-list">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <a href="/overview" className="nav-link active p-0">Overview</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <a href="/contact" className="nav-link p-0">Location &amp; Contact</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item border-0">
                          <a href="/reviews" className="nav-link p-0">Review</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="overview">
                    <h4>Overview Of White Plains Hospital</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div className="spacer">
                    </div>
                    <h4>Subspecialities</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="sigma_general-list style-3">
                          <ul>
                            <li>
                              <i className="far fa-check" />
                              <span>Best Fitness Excercises</span>
                            </li>
                            <li>
                              <i className="far fa-check" />
                              <span>Combine Fitness and Lifestyle</span>
                            </li>
                            <li>
                              <i className="far fa-check" />
                              <span>Achieve a Specific Goal</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="sigma_general-list style-3">
                          <ul>
                            <li>
                              <i className="far fa-check" />
                              <span>Best Fitness Excercises</span>
                            </li>
                            <li>
                              <i className="far fa-check" />
                              <span>Combine Fitness and Lifestyle</span>
                            </li>
                            <li>
                              <i className="far fa-check" />
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
                        <a href="/" className="sigma_btn">
                        See More
                        <i className="fal fa-arrow-right"></i>
                        </a>
                 </div>
                  <div className="spacer">
                  </div>
                  <div id="contact">
                    <h4>White Plains Hospital Location &amp; Contact Information</h4>
                    <div className="sigma_contact-wrapper">
                      <div className="sigma_contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.292292615201654!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1571115084828!5m2!1sen!2sin" height={600} allowFullScreen>
                        </iframe>
                      </div>
                      <div className="sigma_contact-blocks">
                        <h5>Hospital Address</h5>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="sigma_contact-block style-3">
                              <i className="fal fa-map-marker-alt icon" />
                              <div className="contact-block-inner">
                                <p>2416 Mapleview</p>
                                <p className="mb-0">Tampa, FL 33634</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="sigma_contact-block style-3 mt-3 mt-md-0">
                              <i className="fal fa-phone icon" />
                              <div className="contact-block-inner">
                                <p>0029129129129</p>
                                <p className="mb-0">0029129129129</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="sigma_contact-block style-3 mt-3 mt-md-0">
                              <i className="fal fa-globe icon" />
                              <div className="contact-block-inner">
                                <p>info@example.com</p>
                                <p className="mb-0">www.docpoint.com</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer">
                  </div>
                  <div id="reviews">
                    <h4>Patient Experience</h4>
                    <div className="sigma_testimonial style-14">
                      <div className="sigma_testimonial-thumb">
                        <img src="assets/img/clinic-details/100x100.png" alt="testimonial" />
                      </div>
                      <div className="sigma_testimonial-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-block d-sm-flex align-items-center">
                            <div className="sigma_author-block">
                              <h5>
                                Carol Gray
                              </h5>
                            </div>
                            <div className="sigma_rating ms-sm-4 ms-0 mt-2 mt-sm-0">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                              <span className="ms-3">(4/5)</span>
                            </div>
                          </div>
                          <span className="sigma_testimonial-date">07 March</span>
                        </div>
                        <p>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
                      </div>
                    </div>
                    <div className="sigma_testimonial style-14">
                      <div className="sigma_testimonial-thumb">
                        <img src="assets/img/clinic-details/100x100-0.png" alt="testimonial" />
                      </div>
                      <div className="sigma_testimonial-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-block d-sm-flex align-items-center">
                            <div className="sigma_author-block">
                              <h5>
                                Jose Bradley
                              </h5>
                            </div>
                            <div className="sigma_rating ms-sm-4 ms-0 mt-2 mt-sm-0">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                              <span className="ms-3">(4/5)</span>
                            </div>
                          </div>
                          <span className="sigma_testimonial-date">07 March</span>
                        </div>
                        <p>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
                      </div>
                    </div>
                    <div className="sigma_testimonial style-14">
                      <div className="sigma_testimonial-thumb">
                        <img src="assets/img/clinic-details/100x100-1.png" alt="testimonial" />
                      </div>
                      <div className="sigma_testimonial-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-block d-sm-flex align-items-center">
                            <div className="sigma_author-block">
                              <h5>
                                Vincent Reyes
                              </h5>
                            </div>
                            <div className="sigma_rating ms-sm-4 ms-0 mt-2 mt-sm-0">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                              <span className="ms-3">(4/5)</span>
                            </div>
                          </div>
                          <span className="sigma_testimonial-date">07 March</span>
                        </div>
                        <p>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
                      </div>
                    </div>
                    <a href="/" className="sigma_btn">
                      See More
                      <i className="fal fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Start */}
            <div className="col-lg-4">
              <div className="sidebar style-10 mt-5 mt-lg-0">
                {/* Author Widget */}
                <div className="widget widget-about">
                  <h5 className="widget-title">About Me</h5>
                  <div className="sigma_author-box text-center">
                    <img src="assets/img/blog-standard/author.jpg" alt="img" />
                    <h5>Rosalina D. Willaimson</h5>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt.</p>
                    <ul className="sigma_sm justify-content-center">
                      <li>
                        <a href="/">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* form Widget 2 */}
                <div className="widget">
                  <h5 className="widget-title">Get in Touch</h5>
                  <div className="widget-inner">
                    <form method="post">
                      <div className="form-group">
                        <i className="fal fa-user" />
                        <input type="text" name="fname" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <i className="fal fa-envelope" />
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <textarea name="message" rows={5} placeholder="Message" defaultValue={""} />
                      </div>
                      <a href="/" className="sigma_btn btn-block btn-sm">
                        Send Message
                        <i className="fal fa-arrow-right ms-3" />
                      </a>
                    </form>
                  </div>
                </div>
                {/* Contact Widget */}
                <div className="widget">
                  <h5 className="widget-title">Contact</h5>
                  <div className="widget-inner">
                    <div className="sigma_info style-24 p-0 shadow-none">
                      <div className="sigma_info-title">
                        <span className="sigma_info-icon bg-primary-1 text-white">
                          <i className="fal fa-phone" />
                        </span>
                      </div>
                      <div className="sigma_info-description">
                        <h5>Our Phone</h5>
                        <p>Telephone: 0029129102320</p>
                        <p>Mobile: 000 2324 39493</p>
                      </div>
                    </div>
                    <div className="sigma_info style-24 p-0 shadow-none">
                      <div className="sigma_info-title">
                        <span className="sigma_info-icon bg-primary-1 text-white">
                          <i className="fal fa-envelope-open-text" />
                        </span>
                      </div>
                      <div className="sigma_info-description">
                        <h5>Our Email</h5>
                        <p>Main Email: doc@email.com</p>
                        <p>Inquiries: info@orex.com</p>
                      </div>
                    </div>
                    <div className="sigma_info style-24 p-0 shadow-none mb-0">
                      <div className="sigma_info-title">
                        <span className="sigma_info-icon bg-primary-1 text-white">
                          <i className="fal fa-map-marker-alt" />
                        </span>
                      </div>
                      <div className="sigma_info-description">
                        <h5>Our Address</h5>
                        <p>PSD Building, 2 Tower St, United States.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Adv Widget */}
                <div className="widget widget-banner">
                  <div className="banner-area">
                    <img src="assets/img/blog-standard/adv.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
        </>
    );
}

export default Detail;