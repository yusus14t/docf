import React from 'react';
import { Link } from 'react-router-dom';
import sli from '../../assets.app/images/applicationposter.jpg'
import logo from "../../assets.app/img/logo/logo.jpg";


function WebFooter() {
    return (
      <footer className="sigma_footer style-5 pb-0 footer">
        <div className="row mx-0">
          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link to="/privacy">
              <h6 className="text-light">Privacy and Policy</h6>
            </Link>
            <Link to="/terms">
              <h6 className="text-light">Term and Condition</h6>
            </Link>
            <Link to="/pricing-refund-policy">
              <h6 className="text-light">Pricing and Refund Policy</h6>
            </Link>
            <Link>
              <img className="footer-logo" src={logo} alt="" />
            </Link>
          </div>

          <div style={{ padding: "10px 30px" }} className="col-sm-3">
            <Link to="/contact">
              <h6 className="text-light">Contact Us</h6>
              <p className='text-light mb-0'>+91 9528820782</p>
              <p className='text-light mb-1'>+91 </p>
            </Link>
            <Link to="/about">
              <h6 className="text-light">About Us</h6>
            </Link>
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=61550823415174"
            >
              <h6 className="text-light">FaceBook</h6>
            </Link>
          </div>

          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link target="_blank" to="https://twitter.com/Doctortime_">
              <h6 className="text-light">Twitter</h6>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/doctor-time-4a7b00278/"
            >
              <h6 className="text-light">Linkedin</h6>
            </Link>
            <Link target="_blank" to="https://www.instagram.com/doctortime__/">
              <h6 className="text-light">Instagram</h6>
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/channel/UCZawOzeRUom9bNn4W9kO21w"
            >
              <h6 className="text-light">Youtube</h6>
            </Link>
          </div>
          <div style={{ padding: "0" }} className="col-sm-3 ">
            <img className="rounded footer-poster" src={sli} alt="" />
          </div>
        </div>
        <hr className="m-0" />
        <p className="mb-0 p-2 text-center text-light">
          | Copyright &#169; Doctor Time. All rights reserved | Made by{" "}
          <Link
            style={{ color: "skyblue" }}
            target="_blank"
            to="https://erahamtech.com"
          >
            EraHam Tech &nbsp;
          </Link>
        </p>
      </footer>
    );
}

export default WebFooter;