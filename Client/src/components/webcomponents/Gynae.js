import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ivf from "../../assets.app/images/ivf.jpg";
import TEST from "../../assets.app/images/TEST-TUBE-BABY.jpg";
import surrogacy from "../../assets.app/images/surrogacy.jpg";
import Gynaecology from "../../assets.app/images/Gynaecology.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { getImages } from "../../constants/utils";
import { getFullPath } from "../../constants/utils";
import Modal from "../common-components/Modal";
import { GYNAE_SERVICES, WEBSITE_IMAGE } from "../../constants/constant";
import HospitalCard from "../card/HospitalCard";
import ClinicCard from "../card/ClinicCard";



const Gynae = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [ images, setImages ] = useState([])

  useEffect(() => {
    initailizer()
  }, []);

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
      <div className=" ">
        <div className="">
          <Carousel
            dynamicHeight={500}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            onChange={true}
            interval={50}
          >
            {
              [
                WEBSITE_IMAGE.GYNAE_SLIDER_1,
                WEBSITE_IMAGE.GYNAE_SLIDER_2,
                WEBSITE_IMAGE.GYNAE_SLIDER_3,
                WEBSITE_IMAGE.GYNAE_SLIDER_4
              ].map(slide => <div className="slide1">
                <img
                  src={findImage(slide)}
                  className="gynae-slide"
                  alt={slide}
                />
              </div>)
            }
        
          </Carousel>
        </div>

        <div className="p-2">
          <div  className="w-100" >
            <img className="w-100 h-00" scr={findImage(WEBSITE_IMAGE.GYNAE_BANNER)}/>
          </div>
        </div>

        <div className="gynae-services ">
          <div className="container">
            <h3 className="text-center underline">
              <span className="under">Health Care Services</span>
            </h3>
          </div>
          <div className="gynae-services-cards-container justify-content-center">
            <div className="gynae-services-card text-center gynae-pink-layer">
              <span className="gynae-circle mt-2">
                <img
                  style={{ width: "83px", height: "83px", borderRadius: "50%" }}
                  src={Gynaecology}
                  alt="Gynaecology"
                />
              </span>
              <h3>Gynaecology Process</h3>
              <p className="p-2">
                A gynecologist plays a crucial role in the care of pregnant
                women.
              </p>
              <span
                onClick={() => setIsOpen(GYNAE_SERVICES.gynaecology_process)}
                className="btn btn1 btn-gynae"
              >
                <p className="mb-0">Check It</p>
              </span>
            </div>
            <div className="gynae-services-card text-center gynae-pink-layer">
              <span className="gynae-circle mt-2">
                <img
                  style={{ width: "85px", height: "85px", borderRadius: "50%" }}
                  src={surrogacy}
                  alt=""
                />
              </span>
              <h3>Surrogacy</h3>
              <p className="p-2">
                Surrogacy is a complex and sensitive topic that raises many
                ethical and legal questions.
              </p>
              <span
                onClick={() => setIsOpen(GYNAE_SERVICES.surrogacy)}
                className="btn btn1 btn-gynae"
              >
                <p className="mb-0">Check It</p>
              </span>
            </div>

            <div className="gynae-services-card text-center gynae-pink-layer">
              <span className="gynae-circle mt-2">
                <img
                  style={{ width: "85px", height: "85px", borderRadius: "50%" }}
                  src={TEST}
                  alt=""
                />
              </span>
              <h3>Test Tube</h3>
              <p className="p-2">
                Test tube baby, also known as in vitro fertilization (IVF),
              </p>
              <span
                onClick={() =>  setIsOpen(GYNAE_SERVICES.testtube)}
                className="btn btn1 btn-gynae"
              >
                <Link>Check It</Link>
              </span>
            </div>

            <div className="gynae-services-card text-center gynae-pink-layer">
              <span className="gynae-circle mt-2">
                <img
                  style={{ width: "85px", height: "85px", borderRadius: "50%" }}
                  src={ivf}
                  alt=""
                />
              </span>
              <h3>IVF</h3>
              <p className="p-2">
                In vitro fertilization (IVF) is a type of assisted reproductive
                technology
              </p>
              <span
                onClick={() =>  setIsOpen(GYNAE_SERVICES.ivf)}
                className="btn btn1 btn-gynae"
              >
                <p className="mb-0">Check It</p>
              </span>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="w-100 h-100" >
            <img className="w-100 h-100" src={findImage(WEBSITE_IMAGE.GYNAE_BOTTOM_BANNER)}/>
          </div>
        </div>

        <section>
          <h4 className="my-4 text-center bg-light py-2">Hospitals</h4>
          <div className="container">
              <div className="row">
                <HospitalCard limit={6} filter={{ specialization: 'GYNECOLOGIST' }} />
              </div>
          </div>
        </section>

        <section>
          <h4 className="my-4 text-center bg-light py-2">Clinics</h4>
          <div className="container">
              <div className="row">
                <ClinicCard limit={6} filter={{ specialization: 'GYNECOLOGIST' }} />
              </div>
          </div>
        </section>

        {isOpen && (
          <Modal
            isOpen={!!isOpen}
            setIsOpen={setIsOpen}
            closeButton={false}
            submitButton={false}
            title={isOpen?.title}
          >
            <div style={{ textAlign: "justify" }} className="">
              { isOpen?.description }
            </div>
          </Modal>
        )}

      </div>
    </>
  );
};

export default Gynae;
