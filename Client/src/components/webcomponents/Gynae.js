import React from "react";
// import Slider from '../../constants/Slider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets.app/img/blog-standard/730x415.jpg";
const Gynae = () => {
  return (
    <>
      <div className="box"></div>
      {/* <Slider /> */}
      <div className="Hero-section-gynae mt-2 d-flex  ">
        <div className="w-75 px-5">
          <FontAwesomeIcon className="hospital-icon-gyna" icon={faHospital} />
          <h1
            className="h1 d-inline-block
"
          >
            We are Commited to Your Health
            <p>Our mission is to provide you best information</p>
          </h1>
          <br />
          <div className=" text-justify h-50">
            <p className="h5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              tempore non sint molestiae consequuntur velit quisquam soluta
              distinctio. Inventore consequuntur quas at provident ex autem
              adipisci numquam commodi molestiae cum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo ex magnam nisi. Et, quisquam
              est aspernatur ipsum repudiandae alias beatae voluptatum facilis
              facere nihil, quis iure, sint perspiciatis dolores. Totam? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quos,
              reprehenderit vero. Quaerat sapiente quis dolore ex nisi a id in
              rem voluptas perferendis accusantium impedit provident, nobis
              fugit, similique necessitatibus?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur quidem eaque expedita
              .
            </p>
          </div>
          <button className="btn btn-1 btn-primary">Make an Appointment</button>
        </div>
        <div className=" hero-img-gynae-container">
          <img className="hero-img-gynae" src={img} alt="" />
        </div>
      </div>
      <div className="container"></div>
    </>
  );
};

export default Gynae;
