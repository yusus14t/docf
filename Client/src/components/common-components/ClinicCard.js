import React from "react";
import { Link } from "react-router-dom";
import clinicPhoto2 from "../../assets.web/img/clinic-grid/348x350-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, } from "@fortawesome/free-solid-svg-icons";
import { getFullPath } from "../../constants/utils";


export function ClinicListCard({ clinics }) {
  return <>
    {clinics.length > 0 && clinics.map((clinic, key) => (
      <div className="col-lg-4 mb-4 col-md-4 mcard mt-4" key={key}>
        <div style={{ background: "#ffffff" }} className="clinic-card ">
          <div className="inner-card-border"></div>
          <div style={{ marginBottom: "-22px" }}>
            <img className="clinic-img" src={clinic?.photo ? getFullPath(clinic?.photo) : clinicPhoto2} alt="" />
            <span className=" p-2 clinic-title">
              {clinic?.name} : <span className="open">close</span>{" "}
            </span>
          </div>
          <div className="clinic-details d-flex flex-row justify-content-between">
            <div className="">
              <h6 className="clinic-specialization text-disabled">{ clinic?.specialization?.length > 2 ? 'Multi Specialist' : clinic?.specialization[0]?.name }</h6>
              <div className="contact-info">
                <h6 className="text-disabled">Contact Info :</h6>
                <div>
                  <FontAwesomeIcon className="clinic-icon" icon={faPhone} />
                  <p className="d-inline-block ml-2 mb-0">{clinics?.phone ? '+91' + clinics?.phone : ''}</p>
                </div>
                <div>
                  <br />
                  <FontAwesomeIcon
                    className="clinic-icon address-icon"
                    icon={faLocationDot}
                  />
                </div>
                <div>
                  <p className="ml-2 adjust ">
                    Nala road nagla jamalpur, <br /> Aligarh Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h6 className="text-disabled">Timming</h6>
              <div className="d-flex flex-column justify-contant-between">
                <div className="">
                  <p className="clinic-timming mb-0">Morning : 08 AM to 11 PM</p>
                  <p className="clinic-timming mb-0"> Evening : 05 PM to 11 PM</p>
                </div>
                <div className="">
                  <Link className="text-light clinic-btn  btn btn1 btn-primary" to={`/clinic-detail/${clinic?._id}`}>View More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
}
