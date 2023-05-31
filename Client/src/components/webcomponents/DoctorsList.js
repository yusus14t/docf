import React, { useEffect, useState } from 'react';
// import store from '../../redux/Store';
import Banner from '../common-components/Banner';
import { DoctorListCard } from '../common-components/Card';
import { axiosInstance } from '../../constants/utils'




function DoctorsList(props) {
    const [ doctors, setDoctors ] = useState([])
    
    useEffect( async () => {
        await getAllDoctors();
    }, [])

    const getAllDoctors = async () => {
        let { data } = await axiosInstance.get('/allDoctors')
        setDoctors(data.doctors)
        console.log('response', data.doctors)
    }
    
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