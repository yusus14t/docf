import React from 'react';
import Logo from '../../assets.web/img/Doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTwitter, faFaceboo}   from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faInstagram, faFacebook, faLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons'


function WebFooter() {
    return (
        <footer className="sigma_footer style-5 pb-0">
            <div className="container">
            <div className="sigma_info-wrapper style-26 mb-5">
                <div className="sigma_info style-26">
                <div className="sigma_info-title">
                    <span className="sigma_info-icon">

                    <i className="fal fa-map-marker-alt"></i>

                    </span>
                </div>
                <div className="sigma_info-description">
                    <p>Our Address</p>
                    <p className="secondary-color"><b>Drive Chicago, IL 60607</b>
                    </p>
                </div>
                </div>
                <div className="sigma_info style-26">
                <div className="sigma_info-title">
                    <span className="sigma_info-icon">

                    <i className="fal fa-phone"></i>

                    </span>
                </div>
                <div className="sigma_info-description">
                    <p>Call Us</p>
                    <p className="secondary-color"><b>360-779-2228</b>
                    </p>
                </div>
                </div>
                <div className="sigma_info style-26">
                <div className="sigma_info-title">
                    <span className="sigma_info-icon">

                    <i className="fal fa-envelope"></i>

                    </span>
                </div>
                <div className="sigma_info-description">
                    <p>Our Mail</p>
                    <p className="secondary-color"><b>yourname@mail.com</b>
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="sigma_footer-middle">
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                    <div className="sigma_footer-widget">
                    <div className="sigma_footer-logo mb-4">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                        <p className="mb-0">It is a long established fact that a reader will be distracted by the readable.</p>
                        </div>
                    </div>
                    <ul className="sigma_social-icons has-border mt-4 ">
                        <li>
                        <a href="/"><FontAwesomeIcon className='brandicon' icon={faInstagram} />
                        </a>
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon className='brandicon' icon={faTwitter} />
                        </a>
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon className='brandicon' icon={faFacebook} /></a>
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon className='brandicon' icon={faLinkedin} /></a>
                        </li>
                        <li>
                        <a href="/"><FontAwesomeIcon className='brandicon' icon={faGoogle} /></a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="sigma_footer-widget">
                    <h5 className="widget-title">Services</h5>
                    <ul className="sigma_footer-links">
                        <li>
                        <a href="/">Conditions</a>
                        </li>
                        <li>
                        <a href="/">Terms of Use</a>
                        </li>
                        <li>
                        <a href="/">Our Services</a>
                        </li>
                        <li>
                        <a href="/">New Guests Lists</a>
                        </li>
                        <li>
                        <a href="/">The Team List</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-3">
                    <div className="sigma_footer-widget">
                    <h5 className="widget-title">Useful Links</h5>
                    <ul className="sigma_footer-links">
                        <li>
                        <a href="/">Conditions</a>
                        </li>
                        <li>
                        <a href="/">Terms of Use</a>
                        </li>
                        <li>
                        <a href="/">Our Services</a>
                        </li>
                        <li>
                        <a href="/">New Guests Lists</a>
                        </li>
                        <li>
                        <a href="/">The Team List</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="sigma_footer-widget">
                    <h5 className="widget-title">Subscribe</h5>
                    <form method="post">
                        <input type="email" name="email" placeholder="Email" />
                        <button type="button" className="mt-3 btn-block">Subscribe</button>
                        <p className="mb-0 mt-3">Get The Latest Updates via email. Any time you may unsubscribe</p>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div className="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
                <div className="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
                <p className="mb-0">© Docfind
                    <a href="/">2022</a>
                    | All Rights Reserved
                </p>
                </div>
                <ul className="sigma_footer-links">
                <li>
                    <a href="/">Privacy</a>
                </li>
                <li>
                    <a href="/">Terms</a>
                </li>
                <li>
                    <a href="/">Sitemap</a>
                </li>
                <li>
                    <a href="/">Help</a>
                </li>
                </ul>
            </div>
            </div>
        </footer>
    );
}

export default WebFooter;