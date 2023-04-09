import React, { useState } from 'react';
import store from '../../redux/Store';
import Banner from '../common-components/Banner';
import { DoctorListCard } from '../common-components/Card';

function DoctorsList(props) {
    const [ doctors ] = useState([1,2,3,4,5,6])
    const st = store.getState()
    console.log('>>>>>>>>>>>',st)
    return (
        <div>
            <Banner title={'Doctors List'} />
            <div className='section section-padding'>
                <div className='container mwidth'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row '>
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