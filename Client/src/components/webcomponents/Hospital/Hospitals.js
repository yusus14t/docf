import React, { useEffect, useState } from 'react'
import HospitalCard from './HospitalCard';
import { axiosInstance, getAuthHeader } from '../../../constants/utils'
const HospitalGrid = () => {
  const [ hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getHospitals()
  }, [])

  const getHospitals = async () => {
    try {
      let { data } = await axiosInstance.get('/hospitals')
      setHospitals(data?.organization)
      console.log('data',data)
    } catch(error){ console.error(error) }
  }
  return (
    <div>
      <div className="box"></div>
      <div className="section section-padding aaside" >
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