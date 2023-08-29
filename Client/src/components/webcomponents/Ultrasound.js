import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance, getAuthHeader, getFullPath } from '../../constants/utils';
import NO_PHOTO from '../../assets.app/images/no-photo.png';
import Banner from "../../assets.app/images/GYNA_POSTER.jpg";


const Ultrasound = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    getAllClinics();
  }, []);

  const getAllClinics = async () => {
    try {
      let { data } = await axiosInstance.get("/all-clinics", { params: { filter: { specialization: 'Ultrasound' }}, ...getAuthHeader()});
      setClinics(data?.clinics);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="box"></div>
      <div className=" banner text-center text-dark">
        <h3  className="title p-3  bg-success">Ultrasound</h3>
      </div>
      <div className="px-2 pt-0 ">
        <div
          className="hero-banner"
          style={{
            backgroundColor: "blue",
            backgroundImage: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
         
        </div>
      </div>
      <div className="container">
        <div className="row">
          {clinics?.length > 0 &&
            clinics.map((clinic, key) => (
              <div className="col-lg-4 col-md-4 mcard" key={key}>
                <Link to={`/clinic-detail/${clinic._id}`}>
                  <div
                    style={{ background: "#edede9", border: "none" }}
                    className="Dr-container mb-3 d-flex p-3"
                  >
                    <div className="ml-3">
                      <img
                        className="dr-profile-img"
                        src={
                          clinic?.photo ? getFullPath(clinic?.photo) : NO_PHOTO
                        }
                        alt=""
                      />
                    </div>
                    <div className="dr-details">
                      <h2 className="text-center">{clinic?.name}</h2>
                      <p
                        style={{ background: "#00afb9" }}
                        className="mb-1 dr-spelialization"
                      >
                        Ultrasound
                      </p>
                      <p className="mb-1 experience-dr">
                        Experience: {clinic?.experience || "-"}
                      </p>
                      <p className="dr-qualifiction mb-1">
                        {clinic?.qualification || "-"}
                      </p>
                      <p className="dr-address">{clinic?.address || "-"}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Ultrasound;
