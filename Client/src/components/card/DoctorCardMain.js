import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { axiosInstance, getAuthHeader, getFullPath, truncate } from "../../constants/utils";
import { DOCTOR_DEFAUL_IMG } from "../../constants/constant";


// It Uses Homepage or Homeopathy
export default ({ limit = null, filter }) => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getAllDoctors();
    }, []);

    const getAllDoctors = async () => {
        try {
            let { data } = await axiosInstance.get("/all-doctors", {
                params: { filter, limit, source: "doctor-page" },
                ...getAuthHeader(),
            });
            setDoctors(data?.doctors);
        } catch (error) {
            console.error(error);
        }
    };


    return(
        doctors?.length > 0 
        ? doctors.map((doctor, key) => (
            <div className="col-lg-4 col-md-6 mcard" key={key}>
                <Link to={`/clinic-detail/${doctor?.organizationId}`}>
                    <div className="Dr-container mb-3 d-flex p-1" >
                        <div className="ml-3">
                            <img className="dr-profile-img"
                                src={
                                    doctor?.photo
                                        ? getFullPath(doctor?.photo)
                                        : DOCTOR_DEFAUL_IMG
                                }
                                alt=""
                            />
                        </div>

                        <div className="dr-details">
                            <h2 className="DRNAME">
                                {truncate(doctor?.name, 10)}
                            </h2>
                            <p className="mb-1 dr-spelialization">
                                {truncate(
                                    doctor?.specialization?.name ||
                                    (doctor?.specialization?.length
                                        ? doctor?.specialization[0]?.name
                                        : "-"),
                                    18
                                )}
                            </p>
                            <p className="mb-1 experience-dr">
                                Eperience :{doctor?.experience || "-"}
                            </p>
                            <p className="dr-qualifiction mb-1">Qualification {truncate(doctor?.qualification || '-', 15)}</p>
                            <p className="dr-address mb-0">
                                {truncate(doctor?.address || "-", 50)}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        ))
        : <div><p>No Doctors</p></div>
    )
}