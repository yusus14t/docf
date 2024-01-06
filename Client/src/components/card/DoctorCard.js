import './doctors.css'
import React from 'react'
import { convertTo12HourFormat, getFullPath, truncate } from '../../constants/utils'
import { Link } from 'react-router-dom'
import { DOCTOR_DEFAUL_IMG, NUMBER_TO_DAY } from '../../constants/constant'

export default ({doctor = {}, ...props }) => {

    const getTodayTiming = ( timing ) => {

        let time = timing?.find( t => t.day === NUMBER_TO_DAY[new Date().getDay()] )
        if( time ){
          return (
            <div className=''>
                <span>Open: { convertTo12HourFormat(time?.open) } </span>&nbsp;&nbsp;
                <span>Close: { convertTo12HourFormat(time?.close) } </span>
            </div>
          );
        } else {
          return(<>
            Today Not Available
          </>)
        }
      }
    return (
        <div className="col-lg-6 mxil col-md-6 px-0 " {...props} >
            <Link to={`/clinic-detail/${doctor?.organizationId}`}>
                <div className=" doctor-card light-shadow mx-2 p-2">
                    <div className="doctor-img-container">
                        <img src={doctor?.photo
                            ? getFullPath(doctor?.photo)
                            : DOCTOR_DEFAUL_IMG} className="w-100 h-100 curved light-shadow" />

                    </div>
                    <div className="dr-info">

                        <div className="mb-0 fs-5 font-weight-bold dr-name px-1">{truncate(doctor?.name, 20)}</div>
                        <div className="mb-1 fs-12 px-2 specialization">{truncate(doctor?.specialization?.name ||
                            (doctor?.specialization?.length ? doctor?.specialization[0]?.name : '-'), 21)} </div>
                        <div className="mb-1 address fs-12"> {getTodayTiming(doctor?.timing)}</div>

                    </div>
                </div>
            </Link>
        </div>
    )
}

