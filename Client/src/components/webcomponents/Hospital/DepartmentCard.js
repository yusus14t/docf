import React from "react";
import img from "../../../assets.app/img/blog-grid/350x300-0.jpg";
import { Link } from "react-router-dom";
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
                        src={img}
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
