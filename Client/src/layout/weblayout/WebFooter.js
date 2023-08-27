import React from 'react';
import { Link } from 'react-router-dom';
import sli from '../../assets.app/images/applicationposter.jpg'


function WebFooter() {
    return (
      <footer className="sigma_footer style-5 pb-0 footer">
        <div className="row">
          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link to="/contact">
              <h6 className="text-light">Contact</h6>
            </Link>
            <Link to="/privacy">
              <h6 className="text-light">Privacy and Policy</h6>
            </Link>
            <Link to="/terms">
              <h6 className="text-light">Term and Condition</h6>
            </Link>
          </div>

          <div style={{ padding: "10px 30px" }} className="col-sm-3">
            <Link>
              <h6 className="text-light">FaceBook</h6>
            </Link>
            <Link target="_blank" to="https://www.instagram.com/doctortime__/">
              <h6 className="text-light">Instagram</h6>
            </Link>
            <Link target="_blank" to="https://twitter.com/Doctortime_">
              <h6 className="text-light">Twitter</h6>
            </Link>
          </div>

          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link to="/about">
              <h6 className="text-light">About Us</h6>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/doctor-time-4a7b00278/"
            >
              <h6 className="text-light">Linkedin</h6>
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/channel/UCZawOzeRUom9bNn4W9kO21w"
            >
              <h6 className="text-light">Youtube</h6>
            </Link>
          </div>
          <div style={{ padding:"0" }} className="col-sm-3 ">
            <img style={{ height: "101px", width:"220px" }} className='rounded' src={sli} alt="" />
          </div>
        </div>
        <hr className="m-0" />
        <p className="mb-0 p-2 text-center text-light">
          Made by{" "}
          <Link
            style={{ color: "skyblue" }}
            target="_blank"
            to="https://erahamtech.com"
          >
            EraHam Tech
          </Link>{" "}
          | Copyright &#169; Doctor Time. All rights reserved
        </p>
      </footer>
    );
}

export default WebFooter;