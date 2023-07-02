import React from 'react'
import img from "../../../assets.app/img/blog-grid/350x300-0.jpg";
import { Link } from 'react-router-dom';
const DepartmentCard = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="department">
              <img className="department-img" src={img} alt="" />
            </div>

            <Link to={"/department-details"}>  </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentCard