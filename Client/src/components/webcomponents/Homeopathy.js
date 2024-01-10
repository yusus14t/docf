import React, { useEffect, useState } from 'react'
import { getImages } from '../../constants/utils';
import { getFullPath } from "../../constants/utils";
import { WEBSITE_IMAGE } from '../../constants/constant';
import DoctorCardMain from '../card/DoctorCardMain';
import ClinicCard from '../card/ClinicCard'




function Homeopathy() {
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
      <div className="p-2 mt-5">
        <div className="hero-banner"
          style={{ 
            backgroundImage: `url(${findImage(WEBSITE_IMAGE.HOMEOPATHY_BANNER)})`, 
            backgroundRepeat: "no-repeat",  backgroundSize: "cover",
          }}
        >
        </div>
      </div>

      <h4 className="my-4 text-center bg-light py-2">Doctors</h4>

      <div  className="container">
        <DoctorCardMain limit={9} filter={{ specialization: 'Homeopathy' }} />
      </div>


      <h4 className="my-4 text-center bg-light py-2">Clinics</h4>

      <div  className="container">
        <ClinicCard limit={6} filter={{ specialization: 'Homeopathy' }} />
      </div>      
     
    </>
  );
}

export default Homeopathy
