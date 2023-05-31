import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
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
                    {}{doctors.length && doctors.map((doctor, index) =>(index = index+1, <div key={index} className="col-lg-3 col-md-3  col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-body">
                                <div className="media mb-0 fs-14">
                                    <div className="me-2 align-self-center">
                                    <img src={profile} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                    <h6>{ doctor?.fullName || 'Abaan Hamson' }</h6>
                                    <div className="float-end d-flex-colum justify-content-between">
                                        <div className="div">
                                            <span style={{marginBottom:"50%"}} class="badge badge-outline-danger">Inactive</span>
                                        </div>
                                        <div style={{marginLeft:"15px"}} className="float-last">
                                        <FontAwesomeIcon className="cursor-pointer" onClick={() => handleMoreOptions(index)} icon={faEdit}></FontAwesomeIcon>
                                        <FontAwesomeIcon style={{marginLeft:"8px"}} className="cursor-pointer" onClick={() => handleDelete(index)} icon={faTrash}></FontAwesomeIcon>
                                        </div>                                      
                                    </div>
                                    <p className="fs-12 my-1 text-disabled">{ doctor?.specialization || 'Neurologist'}</p>
                                    <h6 className="mt-0">
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