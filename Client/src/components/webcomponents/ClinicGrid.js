import React, { useState } from 'react';
import Banner2 from '../common-components/Banner2';
import { ClinicListCard } from '../common-components/ClinicCard';
import Aside from './Aside';

function DoctorsList(props) {
    const [ clinics ] = useState([1,2,3,4,5,6])
    return (
        <div>
                  <div className="box"></div>

            {/* <Banner2 title={'Clinic List'} /> */}
            
            <div className='section section-padding aaside'>
                <Aside/>
                <div className="asidebox"></div>
                <div className='container'>
                    
                    <div className='row mt-2 mb-2'>
                        <div className='col-12'>
                            <div className='row '>
                                <ClinicListCard clinics={clinics} />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorsList;