import { getFullPath, getImages } from "../../constants/utils";
import { useEffect, useState } from "react";
import { WEBSITE_IMAGE } from "../../constants/constant";
import SpecializationSlider from "../sliders/SpecializationSlider";
import DoctorCardMain from "../card/DoctorCardMain";
import ClinicCard from "../card/ClinicCard";
import HospitalCard from "../card/HospitalCard";

function Home() {
  const [ images, setImages ] = useState([])
  const device = window.screen.availWidth > 500 
    ?  window.screen.availWidth > 800 ? 'lg' : 'md'
    : 'sm'

  const views = {
    "lg" : 6,
    "md" : 4,
    "sm" : 2
  }

  useEffect(() => {
    initailizer()
  }, [])

  const initailizer = async () => {
    let imagesData = await getImages()
    setImages(imagesData.data.images)
  }

  const findImage = ( id ) => {
    return getFullPath(images.find( image => image.id === id )?.image)
  }

  return (
    <>
      <div className="box"></div>

      <div className=" d-flex justify-content-center align-items-center" >
        <div className=" w-100 ">
          <img className="w-100" src={findImage(WEBSITE_IMAGE.HOME_BANNER)} />
        </div>
      </div>

      <div className="mobie container px-3">
        <SpecializationSlider view={views[device]}/>
      </div>
      
      <h4 className="my-4 text-center bg-light py-2">Doctors</h4>
      <section className="container">
          <div className="row">
            <DoctorCardMain limit={9} />
          </div>
      </section>

      <h4 className="my-4 text-center bg-light py-2">Clinics</h4>
      <section className="container">
          <div className="row">
            <ClinicCard limit={6} />
          </div>
      </section>


      <h4 className="my-4 text-center bg-light py-2">Hospitals</h4>
      <section className="container">
          <div className="row">
            <HospitalCard limit={6} />
          </div>
      </section>

      <h4 className="my-4 text-center bg-light py-2">Why Choose Us</h4>
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-6">
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5 className=" mobi-txt align-middle">
                Doctortime is a patient's time saving platform .this is India’s
                first platform where the patient himself can see the live number
                at the doctor visit.
              </h5>
            </div>
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5 className="mobi-txt">
                Patient can avoid both crowd and infection at the doctor‘s place
              </h5>
            </div>
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5 className="mobi-txt">
                You can book your and your known one's Appointment from any
                where .
              </h5>
            </div>
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5 className="mobi-txt">
                You can get best doctor of your area’s in your budget.
              </h5>
            </div>
          </div>
          <div className="col-sm-6 advantages-side-img">
            <img
              src={findImage(WEBSITE_IMAGE.HOME_BOTTOM_BANNER)}
              alt=""
              className="rounded"
              style={{ height: "460px", width: "100%" }}
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
