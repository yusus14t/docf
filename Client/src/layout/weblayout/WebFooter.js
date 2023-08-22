import React from 'react';
import { Link } from 'react-router-dom';
import sli from '../../assets.app/images/Borcelle.png'


function WebFooter() {
    return (
      <footer className="sigma_footer style-5 pb-0 footer">
        <div className="row">
          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link>
              <h6 className="text-light">Contact</h6>
            </Link>
            <Link>
              <h6 className="text-light">Privacy and Policy</h6>
            </Link>
            <Link>
              <h6 className="text-light">Term and Condition</h6>
            </Link>
          </div>

          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link>
              <h6 className="text-light">FaceBook</h6>
            </Link>
            <Link>
              <h6 className="text-light">Instagram</h6>
            </Link>
            <Link>
              <h6 className="text-light">Twitter</h6>
            </Link>
          </div>

          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link>
              <h6 className="text-light">About Us</h6>
            </Link>
            <Link>
              <h6 className="text-light">Linkedin</h6>
            </Link>
            <Link>
              <h6 className="text-light">Youtube</h6>
            </Link>
          </div>
          <div style={{ padding: "10px 30px" }} className="col-sm-3 ">
            <Link>
              <h6 className="text-light">About Us</h6>
            </Link>
            <Link>
              <h6 className="text-light">Linkedin</h6>
            </Link>
            <Link>
              <h6 className="text-light">Youtube</h6>
            </Link>
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