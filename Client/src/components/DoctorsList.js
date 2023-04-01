import React, { useState } from 'react';
import Banner from './common-components/Banner';
import { DoctorListCard } from './common-components/Card';

function DoctorsList(props) {
    const [ doctors ] = useState([1,2,3,4,5,6])
    return (
        <div>
            <Banner title={'Doctors List'} />
            <div className='section section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <DoctorListCard doctors={doctors} />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorsList;