import React from "react";
import NO_PHOTO from "../../../assets.app/images/no-photo.png";
import { Link } from "react-router-dom";
import { getFullPath } from "../../../constants/utils";
const DepartmentCard = ({ departments }) => {
  return (
    <>
        <div className="row">
          {departments?.map(( department, key )=>{
            return (
              <div className="col-md-6" key={key}>
                <div className="card p-2 department-card">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={department?.organizationId?.photo ? getFullPath( department?.organizationId?.photo) : NO_PHOTO }
                        className="rounded department-card-image"
                        alt=""
                      />
                    </div>

                    <div className="departments-details ">
                      <h5 className="mb-0 mt-0 department-card-name">
                        { department?.organizationId?.name }
                      </h5>
                      <span>{ department?.organizationId?.specialization ? department?.organizationId?.specialization?.map( sp => sp.name ) : '-' }</span>
                      <br />
                      <span> Room No: { department?.organizationId?.room }</span>
                     

                      <div className="color-primary mt-2 d-flex flex-row align-items-center">
                        <Link
                          className="btn btn btn-secondary w-100"
                          to={`/department/${department?.organizationId?._id}`}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
    </>
  );
};

export default DepartmentCard;
