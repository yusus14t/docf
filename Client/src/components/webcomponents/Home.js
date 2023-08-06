import Clinics from "./Clinics";
import Hospitals from "./Hospital/Hospitals";
import dr from "../../assets.app/img/home/portrait-doctor.jpg";
import hero from "../../assets.app/img/home/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Specializations/Slider";
import DoctorsList from "./doctor/Doctors";
import Testamonilas from "./Testamonilas";
import Search from "../common-components/Search";

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
        <div className="container hero-content position-relative">
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
          <div
            style={{ backgroundColor: "#fff" }}
            className="search-contianer-home mt-3"
          >
            <input
              className="home-search "
              placeholder="Seach for Doctor, Hospital and Clinics"
              type="text"
            />
            <FontAwesomeIcon className="home-search-icon" icon={faSearch} />
          </div>
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
            <div className="col-5 advantages"></div>
            <div className="col-5 advantages"></div>
            <div className="col-5 advantages"></div>
            <div className="col-5 advantages"></div>
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

      <div className="">
        <Testamonilas />
      </div>
    </>
  );
}

export default Home;
