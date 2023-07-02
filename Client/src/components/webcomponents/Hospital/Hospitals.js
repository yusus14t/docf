import React, { useState } from 'react'
import HospitalCard from './HospitalCard';

const HospitalGrid = () => {
  const [hospitals] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div>
      <div className="box"></div>
      <div
        // style={{ background: "#f1f5fc" }}
        className="section section-padding aaside"
      >
        <div className="asidebox"></div>
        <div className="container">
          <div className="row mt-2 mb-2">
            <div className="col-12">
              <div className="row ">
                <HospitalCard hospitals={hospitals} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalGrid