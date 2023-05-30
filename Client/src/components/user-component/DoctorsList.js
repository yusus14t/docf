import React, { useEffect, useState } from "react";
// import Select from 'react-select';
import profile from '../../assets.app/img/dashboard/doctor-1.jpg'
import { axiosInstance, getAuthHeader } from "../../constants/utils";

const DoctorsList = () => {
    const [isMoreOptions, setIsMoreOptions] = useState(null);
    const [ doctors, setDoctors ] = useState([]); 
    const [ searchInput, setSearchInput ] = useState('');

    useEffect(() => {
        getDoctors()
    }, [searchInput, ])

    const handleMoreOptions = (id) => {
        setIsMoreOptions((old) => old ? null: id)
    }

    const getDoctors = async () => {
        try { 
            let { data } = await axiosInstance.get('/allDoctors', { source: 'dashboard', searchInput })
            setDoctors(data.doctors)
        } catch(error){ console.log(error) }
    }

    const handleDelete = async ( doctor ) => {
        try{ 
            console.log('>>>.', doctor)
            await axiosInstance.post('/common/delete-doctor', { _id: doctor._id }, getAuthHeader());
            setDoctors((old) => old.filter(d => d._id !== doctor._id))
        } catch(error){ console.log(error) }
    }

    return(
        <>
            <div className="ms-content-wrapper mx-2">
                <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                    <div><h6>Doctors List</h6></div>
                    <div class="ms-form-group my-0 mb-0 has-icon fs-14">
                      <input type="search" class="ms-form-input" name="search" placeholder="Search for doctors" onInput={(e) => {setSearchInput(e.target.value); console.log(e.target.value)}} />
                      <i class="flaticon-search text-disabled"></i>
                    </div>
                    
                </div>
                <div className="row">
                    {}{doctors.length && doctors.map((doctor, index) =>(index = index+1, <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-body">
                                <div className="media fs-14">
                                    <div className="me-2 align-self-center">
                                    <img src={profile} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                    <h6>{ doctor?.fullName || 'Abaan Hamson' }</h6>
                                    <div className="dropdown float-end">
                                        <i className="material-icons cursor-pointer" onClick={() => handleMoreOptions(index)} >i</i>
                                        <ul className={`dropdown-menu dropdown-menu-end ${ isMoreOptions === index && 'show' }`} >
                                        <li className="ms-dropdown-list">
                                            <a className="media p-2" href="#">
                                            <div className="media-body">
                                                <span>View Details</span>
                                            </div>
                                            </a>
                                            <a className="media p-2" href="#">
                                            <div className="media-body">
                                                <span>Assign</span>
                                            </div>
                                            </a>
                                            <a className="media p-2" href="#">
                                            <div className="media-body">
                                                <span>Edit</span>
                                            </div>
                                            </a>
                
                                            <div className="media-body px-2 cursor-pointer" onClick={() => handleDelete(doctor)}>
                                                <span>Delete</span>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <p className="fs-12 my-1 text-disabled">{ doctor?.specialization || 'Neurologist'}</p>
                                    <h6 className="mt-2">
                                        <span className="fs-14">
                                        <i className="fas fa-map-marker-alt"></i>
                                        </span>
                                        { doctor?.clinic || 'Madani Clinic'}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
                
            </div>
        </>
    )
}
export default DoctorsList;