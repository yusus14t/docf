import React from "react";
import img from "../../../assets.app/img/blog-grid/350x300-0.jpg";
import { Link } from "react-router-dom";
const DepartmentCard = () => {
  const numbers = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          {numbers.map((number)=>{
            return (
              <div className="col-md-3">
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
                        Harison
                      </h5>
                      <span>Lababa Juhsil Hospital</span>

                      <div className="p-2 mt-2 bg-secondary d-flex justify-content-between rounded text-white stats">
                        <div className="">
                          <h5>Room No : 4</h5>
                        </div>
                        {/* <div className="d-flex flex-column text-light">
                          <span className="articles text-light">Room</span>
                          <span className="number1">38</span>
                        </div> */}

                        {/* <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">980</span>
                        </div> */}

                        {/* <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number3">8.9</span>
                        </div> */}
                      </div>

                      <div className="color-primary mt-2 d-flex flex-row align-items-center">
                        <Link
                          className="btn btn btn-secondary w-100"
                          to={"/department-details"}
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
      </div>
    </>
  );
};

export default DepartmentCard;
