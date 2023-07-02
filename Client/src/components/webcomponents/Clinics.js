import React, { useEffect, useState } from 'react';
import { ClinicListCard } from '../common-components/ClinicCard';
import { axiosInstance } from '../../constants/utils';

function Clinics(props) {
    const [ clinics, setClinics ] = useState([])

    useEffect(() => {
      getAllClinics()
    }, [])
    
    const getAllClinics = async () => {
      try{
        let { data } = await axiosInstance.get('/all-clinics')
        setClinics(data?.clinics)
      } catch(error){ console.error(error) }
    }
    return (
      <div>
        <div className="box"></div>

        {/* <Banner2 title={'Clinic List'} /> */}

        <div
          style={{ background: "#f1f5fc" }}
          className="section section-padding aaside"
        >
          <div className="asidebox"></div>
          <div className="container">
            <div className="row mt-2 mb-2">
              <div className="col-12">
                <div className="row ">
                  <ClinicListCard clinics={clinics} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Clinics;