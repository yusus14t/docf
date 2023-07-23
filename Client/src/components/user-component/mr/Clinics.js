import { useEffect, useState } from "react";
import { axiosInstance, formatPhone, getAuthHeader, getFullPath } from "../../../constants/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Clinics = () => {
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        getClinics()
    }, [])

    const getClinics = async () => {
        try {
            let { data } = await axiosInstance.get('/mr/clinics', { params: { source: 'hospital' } , ...getAuthHeader()})
            console.log(data)
            setClinics(data?.clinics)
        } catch(error){ console.error(error) }
    }

    return (
            
        <div className="ms-content-wrapper mx-2 ">
            <div className="ms-panel mb-0 inner-content-height">
                <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                    <div><h6>Clinics</h6></div>
                    <div class="ms-form-group my-0 mb-0 has-icon fs-14">
                        <input type="search" class="ms-form-input" name="search" placeholder="Search for doctors"  />
                        <i class="flaticon-search text-disabled"></i>
                    </div>

                </div>
                <div className="row mx-2">
                    {clinics?.length > 0 && clinics.map((clinic, index) => (
                        <div key={index} className="col-lg-4 col-md-3  col-sm-6">
                            <div className="ms-card">
                                <div className="ms-card-body">
                                    <div className="media mb-0 fs-14">
                                        <div className="me-2 align-self-center">
                                            <img src={getFullPath(clinic.photo)} className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body">
                                            <h6>{clinic?.organizationId?.name}</h6>
                                            <div className="float-end d-flex-colum justify-content-between">
                                                <div className="div">
                                                    <span style={{ marginBottom: "50%" }} class="badge badge-outline-danger">{clinic?.isActive ? 'Active' : 'Inactive'}</span>
                                                </div>
                                                <div style={{ marginLeft: "15px" }} className="float-last">
                                                    <FontAwesomeIcon className="cursor-pointer" icon={faEdit}></FontAwesomeIcon>
                                                    <FontAwesomeIcon style={{ marginLeft: "8px" }} className="cursor-pointer" icon={faTrash}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                            <p className="fs-12 my-1 text-disabled">{clinic?.organizationId?.organizationType}</p>
                                            <h6 className="mt-0">
                                                <span className="fs-14">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                                {formatPhone(clinic?.phone)}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    )
}
export default Clinics;