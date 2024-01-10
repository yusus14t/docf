import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { axiosInstance, convertTo12HourFormat, getFullPath } from "../../constants/utils"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { CLINIC_DEFAUL_IMG, NUMBER_TO_DAY } from "../../constants/constant"

export default ({ limit = null, filter = {} }) => {

    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        getAllClinics();
    }, []);

    const getAllClinics = async () => {
        try {

            let { data } = await axiosInstance.get("/all-clinics", { params: { isClinic: true, limit, filter } });
            setClinics(data?.clinics);

        } catch (error) { console.error(error) }
    };

    const getTodayTiming = (timing) => {

        let time = timing?.find(t => t.day === NUMBER_TO_DAY[new Date().getDay()])
        if (time) {
            return (
                <>
                    <p className="pb-0  cli-time">Morning</p>
                    <div>
                        <span>Open: {convertTo12HourFormat(time?.morning?.open)} </span>
                        <br />
                        <span>Close: {convertTo12HourFormat(time?.morning?.close)} </span>
                    </div>
                </>
            );
        } else {
            return ('Today Not Available')
        }
    }


    return (
        clinics.length > 0 &&
        clinics.map((clinic, key) => (
            <div className="col-lg-4 mb-4 col-md-6 mcard" key={key} >
                <div  className="clinic-card bg-white" >
                    <div className="inner-card-border"></div>

                    <div style={{ marginBottom: "-22px" }}>
                        <img className="clinic-img" src={ clinic?.photo ? getFullPath(clinic?.photo) : CLINIC_DEFAUL_IMG } />
                        <span className=" p-2 clinic-title"> {clinic?.name}</span>
                        <span style={{ marginLeft: "10px", fontSize: "15px" }} className="ml-2 p-2 clinic-title">  &#8377;{clinic?.fee} </span>
                    </div>

                    <div className="clinic-details d-flex flex-row justify-content-between">
                        <div className="mt-2">
                            <h6 className="clinic-specialization text-disabled">
                                {clinic.specialization.length > 1 ? "Multi speciality" : clinic.specialization[0]?.name || "-"}
                            </h6>
                            <div className="contact-info">
                                <h6 className="text-disabled mt-1 clinic-cont">
                                    Contact Info :
                                </h6>
                                <div>
                                    <FontAwesomeIcon className="clinic-icon" icon={faPhone}  />
                                    <p className="d-inline-block ml-2 mb-0 clinic-phne">  {clinic?.phone ? "+91" + clinic?.phone : ""}  </p>
                                </div>
                                <div>
                                    <p className="ml-2 adjust hospital-address  ">
                                        <FontAwesomeIcon className="clinic-icon address-icon"  icon={faLocationDot} />
                                        {clinic?.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h6 className="text-disabled">Timming</h6>
                            <div className="d-flex flex-column justify-contant-around">
                                {getTodayTiming(clinic?.timing)}
                                <Link className="text-light clinic-btn  btn btn1 btn-primary shadow-none" to={`/clinic-detail/${clinic?._id}`} >  View More </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ))
    )
}