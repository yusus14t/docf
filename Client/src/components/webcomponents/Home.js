import Clinics from "./Clinics";
import Hospitals from "./Hospital/Hospitals";
import dr from "../../assets.app/img/home/portrait-doctor.jpg";
import hero from "../../assets.app/img/home/hero.jpg";
import Slider from "./Specializations/Slider";
import DoctorsList from "./doctor/Doctors";

function Home() {
  
  return (
    <>
      <div className="box"></div>
      {/* hero section */}
      <div
        className=" hero-container"
        style={{
          background: `url(${hero})`,
          // backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container hero-content ">
          <div className="">
            <h1 style={{ fontWeight: "bolder" }}>
              Get Expert <span> </span>
              <span className="text-success">
                Medical <br /> Consultation
              </span>
            </h1>
            <h4 className="hjj">
              Our Partners provide best Medical Treament and advice
            </h4>
          </div>
          {/* <div
            style={{ backgroundColor: "#fff" }}
            className="search-contianer-home mt-3"
          >
            <input
              className="home-search "
              placeholder="Seach for Doctor, Hospital and Clinics"
              type="text"
            />
            <FontAwesomeIcon className="home-search-icon" icon={faSearch} />
          </div> */}
        </div>
      </div>
      {/* specialization slider */}
      <div className="mobie">
        <Slider />
      </div>
      {/* specialization slider end */}

      {/* <Clinics style={{ margin: "0" }} /> */}
      <div className="container">
        <div className="row">
          <DoctorsList source={"homepage"} />
        </div>

        <Clinics source={"homepage"} />

        <Hospitals source={"homepage"} />
      </div>

      {/* advantages or featurs */}
      <div className="container">
        <h3 className="text-center underline">
          <span className="under">Why Choose Us</span>
        </h3>
        <div className="row mt-2">
          <div className="col-sm-6">
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5 className="align-middle">
                Doctortime is a patient's time saving platform .this is
                India’s first platform where the patient himself can see the
                live number at the doctor visit.
              </h5>
            </div>
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5>
                Patient can avoid both crowd and infection at the doctor‘s
                place
              </h5>
            </div>
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5>
                You can book your and your known one's Appointment from any where .
              </h5>
            </div>
            <div className="col-5 advantages d-flex align-items-center px-3">
              <h5>
                You can get best doctor of your area’s in your budget.
              </h5>
            </div>
          </div>
          <div className="col-sm-6 advantages-side-img">
            <img
              src={dr}
              alt=""
              className="rounded"
              style={{ height: "460px", width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* <Services /> */}

      {/* testimonials */}
    </>
  );
}

export default Home;
