// import Services from "./Services";
// import Doctors from "./doctor/Doctors";
// import Clinics from "./Clinics";
// import Hospitals from "./Hospital/Hospitals";
import Specializations from "./Hospital/Specializations";
import dr from "../../assets.app/img/home/portrait-doctor.jpg";
import hero from "../../assets.app/img/home/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



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
          backgroundSize:"cover",
          display:"flex",
          alignItems:"center"
        }}
      >
        <div className="container hero-content position-relative">
          <div
            className=""
          >
            <h1 style={{ fontWeight: "bolder", }}>
              Get Expert <span> </span>
              <span className="text-success">
                Medical <br /> Consultation
              </span>
            </h1>
            <h4 className="hjj">Our Partners provide best Medical Treament and advice</h4>
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
            <FontAwesomeIcon
              className="home-search-icon"
              
              icon={faSearch}
            />
          </div>
        </div>
      </div>

      {/* <Clinics style={{ margin: "0" }} /> */}
      <div className="container"></div>
      <Specializations />

      {/* advantages or featurs */}
      <div className="container">
        <h3 className="text-center underline">
          <span className="under">Why Choose Us</span>
        </h3>
        <div className="row">
          <div className="col-sm-6">
            <div
              className="col-5 advantages"
              style={{ borderBottomRightRadius: "300px" }}
            ></div>
            <div
              className="col-5 advantages"
              style={{ borderTopRightRadius: "300px" }}
            ></div>
            <div
              className="col-5 advantages"
              style={{ borderBottomRightRadius: "300px" }}
            ></div>
            <div
              className="col-5 advantages"
              style={{ borderTopRightRadius: "300px" }}
            ></div>
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
