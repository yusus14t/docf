import React, { useEffect, useState } from "react";
import "../../../assets.app/css/specialzation.css";
import { useParams } from "react-router-dom";
import HospitalCard from "../../card/HospitalCard";
import ClinicCard from "../../card/ClinicCard";
import { axiosInstance } from "../../../constants/utils";



const SpecializationDetails = () => {
  const params = useParams();
  const [specialization, setSpecialization] = useState([]);

  useEffect(() => {
    getSpecialization();
  }, [ params.id, ]);

  const getSpecialization = async () => {
    try{
      let { data } = await axiosInstance.get(`/specialization/${params.id}`);
      setSpecialization(data?.specializations);
    } catch(error){ console.error(error) }
  };

  return (
    <>
      <div className="mt-5 pt-3 ">
        <h4 className="text-center bg-success text-light py-2">{specialization?.name}</h4>
      </div>
      {
        <div className="splz-deatial container mt-3">
          <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between"}} >
            <div className="mb-0">
              <img
                className="specialization-image"
                src={specialization?.image}
                alt=""
              />
            </div>
            <div className="deatil  m-0 ">
              <p className="details-text">{specialization?.description}</p>
            </div>
          </div>

          <section>
          <h4 className="my-4 text-center bg-light py-2">Hospitals</h4>
          <div className="container">
              <div className="row">
                <HospitalCard limit={6} filter={{specialization: params.id }} />
              </div>
          </div>
        </section>

        <section>
          <h4 className="my-4 text-center bg-light py-2">Clinics</h4>
          <div className="container">
              <div className="row">
                <ClinicCard limit={6} filter={{specialization: params.id }} />
              </div>
          </div>
        </section>
        </div>
      }
    </>
  );
};

export default SpecializationDetails;
