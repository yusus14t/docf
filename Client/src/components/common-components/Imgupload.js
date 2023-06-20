import React, { useState } from "react";
import DrAvatar from "../../assets.app/img/DoctorAvatar.png"


export default function ImgUpload({ source, file=() => {} }) {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
      file(e.target.files[0])
    }
  };

  return (
    <>
      <label htmlFor="upload-button" className={` cursor-pointer ${source === 'clinic' ? 'w-100' : ""}`}>
        {image.preview ? 
        (<div className={` contain ${source === 'clinic' ? 'clinic-profile' : 'doctor-profile'}`}>
          <img src={image.preview} className={` h-100 w-100 p-1 rounded ${source === 'clinic' ? 'h20' : 'h-100'}`} alt="dummy" width='100%' />
        </div>
        ) :
          (<div className={` contain ${source === 'clinic' ? 'clinic-profile' : 'doctor-profile'}`} >
                <img src={DrAvatar} className={source !== 'clinic' ? 'h-100 w-100 p-1' : ""} alt="" />
            </div>
          )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </>
  );
}