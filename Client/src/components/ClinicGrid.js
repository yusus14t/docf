import React, { useState } from 'react';
import Banner from './common-components/Banner';
import { ClinicListCard } from './common-components/ClinicCard';

function DoctorsList(props) {
    const [ clinics ] = useState([1,2,3,4,5,6])
    return (
        <div>
            <Banner title={'Clinic List'} />
            <div className='section section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
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