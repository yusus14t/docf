import React, { useEffect, useRef, useState } from "react";
import { axiosInstance, getAuthHeader, getFullPath } from "../../../constants/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import Profile from "./Profile";
import CreatableSelect from 'react-select/creatable';
import useToasty from "../../../hooks/toasty";
import Website from "./Website";
import { SERVICES } from "../../../constants/constant";
import logo from '../../../assets.app/img/logo/logo.jpg'
import { toPng } from 'html-to-image'


const Settings = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const [tab, setTab] = useState(['HL', 'CL'].includes(userInfo.userType) ? 'SPECIALIZATION' : 'PROFILE')
  const [isOpen, setIsOpen] = useState(false)
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const [isTimming,setTimming] = useState(false)
  const [specialization, setSpecialization] = useState({ name: null, error: null })
  const [specializations, setSpecializations] = useState([])
  const [allSpecializations, setAllSpecializations] = useState([])

  const [services, setServices] = useState([]);
  const [organizationServices, setOrganizationServices] = useState([]);

  const QRCodeRef = useRef(null)

  const toasty = useToasty()

  useEffect(() => {
    if (tab === 'SPECIALIZATION') getAllSpecialization()
    else if( tab === 'SERVICES' ) getServices()
  }, [tab,])

  useEffect(() => {
    getAllCommonSpecialization()
  }, [isOpen])

  const getServices = async () => {
    try{ 
      let { data } = await axiosInstance.get('/hospital/services')
      setOrganizationServices(data?.services)
    }catch(error){ console.error(error) }
  }


  const getAllSpecialization = async () => {
    try {
      let { data } = await axiosInstance.get('/doctor/hospital-specialization')
      setSpecializations(data?.specialization)
    } catch (error) {
      console.error(error)
    }
  }

  const getAllCommonSpecialization = async () => {
    try {
      let { data } = await axiosInstance.get('/common/specializations')
      setAllSpecializations(data?.specializations.map(sp => ({ label: sp.name, value: sp.id })))
    } catch (error) {
      console.error(error)
    }
  }


  const submitSpecialization = async (value) => {
    try {
      if (!value.length) {
        setSpecialization({ ...specialization, error: 'Specialization name is required.' })
        return
      }
      let { data } = await axiosInstance.post('/doctor/specialization', { specializations: value }, getAuthHeader())

      if (!data.specializations?.length) {
        toasty.error('Oops! They have already in your list')
        setIsOpen(false)
        return
      }

      setSpecializations([...specializations, ...data?.specializations])
      setIsOpen(false)
      toasty.success(data?.message)

    } catch (error) { console.error(error) }
  }

  const download = () => {
    toPng( QRCodeRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "QRCode.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const submitServices = async (value) => {
    try {
      if (!value.length) return

      let { data } = await axiosInstance.post('/hospital/services', { services: value }, getAuthHeader())

      if (!data.services?.length) {
        toasty.error('Oops! They have already in your list')
        setIsServiceOpen(false)
        return
      }

      setOrganizationServices( old => [...old, ...data?.services])
      setIsServiceOpen(false)
      toasty.success(data?.message)

    } catch (error) { console.error(error) }
  }

  const deleteService = async ( id ) => {
    try {
      await axiosInstance.delete(`/hospital/service/${ id }`)
      setOrganizationServices( old => old.filter( service => service.id !== id))
      toasty.success('Successfully service deleted')
    } catch(error){ console.error(error) }
  }

  const deleteSpecialization = async ( id ) => {
    try {
      await axiosInstance.delete(`/hospital/specialization/${ id }`)
      setSpecializations( old => old.filter( specialization => specialization.id !== id))
      toasty.success('Successfully specialization deleted')
    } catch(error){ console.error(error) }
  }


  return (
    <div className="ms-content-wrapper">
      <div className="row mr-0">
        <div className="col-xl-12 col-md-12">
          <div className="ms-panel mb-0 inner-content-height">
            <div className="ms-panel-header ms-panel-custome">
              <div>
                {['HL', 'CL'].includes(userInfo.userType) && <span className="btn btn-info btn-md mx-3" onClick={() => setTab('SPECIALIZATION')}>Specialization</span>}
                {['HL', 'CL'].includes(userInfo.userType) && <span className="btn btn-info btn-md mx-3" onClick={() => setTab('SERVICES')}>Services</span>}
                {['HL', 'CL', 'DP'].includes(userInfo.userType) && <span className="btn btn-info btn-md mx-3" onClick={() => setTab('QRCODE')}>QR Code</span>}
                <span className="btn btn-info btn-md mx-3" onClick={() => setTab('PROFILE')}>Profile</span>
                {['SA', 'AD'].includes(userInfo.userType) && <span className="btn btn-info btn-md mx-3" onClick={() => setTab('WEBSITE')}>Website</span>}

              </div>
            </div>
            <div className="ms-panel-body p-0 content-height">
              {tab === "SPECIALIZATION" && (
                <>
                  <div className="d-flex justify-content-between p-3">
                    <div>
                      <h4>Specialization</h4>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-md shadow-none"
                        onClick={() => setIsOpen(true)}
                      >
                        Add Specialization
                      </button>
                    </div>
                  </div>
                  <div className="ms-panel-body py-0 ">
                    <div className="table-responsive">
                      <table className="table table-hover  thead-primary">
                        <thead style={{ backgroundColor: "#A2A2A252" }}>
                          <tr>
                            <th scope="col" style={{ color: "#000" }}>
                              Id
                            </th>
                            <th scope="col" style={{ color: "#000" }}>
                              Name
                            </th>
                            <th scope="col" style={{ color: "#000" }}>
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {specializations?.length > 0 &&
                            specializations.map((specialization) => (
                              <tr>
                                <td className="ms-table-f-w">
                                  {specialization.id}
                                </td>
                                <td>{specialization.name}</td>
                                <td>
                                  <FontAwesomeIcon
                                    style={{ marginLeft: "8px" }}
                                    className="cursor-pointer"
                                    icon={faTrash}
                                    onClick={() =>
                                      deleteSpecialization(specialization.id)
                                    }
                                  ></FontAwesomeIcon>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
              {tab === "SERVICES" && (
                <>
                  <div className="d-flex justify-content-between p-3">
                    <div>
                      <h4>Services</h4>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-md shadow-none"
                        onClick={() => setIsServiceOpen(true)}
                      >
                        Add Services
                      </button>
                    </div>
                  </div>
                  <div class="ms-panel-body py-0 ">
                    <div class="table-responsive">
                      <table class="table table-hover  thead-primary">
                        <thead style={{ backgroundColor: "#A2A2A252" }}>
                          <tr>
                            <th scope="col" style={{ color: "#000" }}>
                              Id
                            </th>
                            <th scope="col" style={{ color: "#000" }}>
                              Name
                            </th>
                            <th scope="col" style={{ color: "#000" }}>
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {organizationServices?.length > 0 &&
                            organizationServices.map((service) => (
                              <tr>
                                <td class="ms-table-f-w">{service.id}</td>
                                <td>{service.name}</td>
                                <td>
                                  <FontAwesomeIcon
                                    style={{ marginLeft: "8px" }}
                                    className="cursor-pointer"
                                    onClick={() => deleteService(service.id)}
                                    icon={faTrash}
                                  ></FontAwesomeIcon>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
              {tab === "PROFILE" && <Profile />}
              {tab === "WEBSITE" && <Website />}
              {tab === "QRCODE" && (
                <div>
                  <div style={{ marginLeft: "auto", }} className=""  >
                    <div style={{ width: 800, border: "2px solid black",  background:'#fff' }} ref={QRCodeRef}>
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ width: "200px", padding: "10px 50px 0 50px" }}
                          src={logo}
                          alt=""
                        />
                        <h3 style={{ textAlign: "center" }}>Clinic Or Hospital Name</h3>
                      </div>
                      <hr />
                      <div style={{ margin: "auto", width: "430px", height: "400px" }}>
                        <h5 style={{ textAlign: "center" }}>
                          Scan QR code to book Appointment
                        </h5>
                        <img
                          src={ getFullPath(userInfo?.organizationId?.qrCode) }
                          style={{ width: "400px", height: "400px" }}
                          alt=""
                        />
                        <p style={{ textAlign: "center" }}>Or visit Doctortime.in</p>
                      </div>
                      <div style={{ marginTop: "100px" }}>
                        <h4 style={{ textAlign: "center" }}>
                          Don't Waste Your Time Be Samart
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                          Come Here Just Before Your Turn{" "}
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                          Book Appointment from Doctor Time and Track Live Appointment
                          Number
                        </h4>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      download()
                    }
                  >
                    Download QR Code
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={"Add Specialization"}
          data={specialization}
          callback={(data) => {
            submitSpecialization(data);
          }}
        >
          <div className="row">
            <div className="col-12">
              <label>Name of Specialization</label>
              <div className="">
                <CreatableSelect
                  isMulti={true}
                  options={allSpecializations}
                  onChange={(e) => {
                    setSpecialization(e);
                  }}
                  className={`form-control p-0`}
                  classNamePrefix="select"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}

      {isServiceOpen && (
        <Modal
          isOpen={isServiceOpen}
          setIsOpen={setIsServiceOpen}
          title={"Add Services"}
          data={services}
          callback={(data) => {
            submitServices(data);
          }}
        >
          <div className="row">
            <div className="col-12">
              <label>Name of Services</label>
              <div className="">
                <CreatableSelect
                  isMulti={true}
                  getOptionLabel={({ name }) => name}
                  getOptionValue={({ id }) => id}
                  options={SERVICES}
                  onChange={(e) => {
                    setServices(e);
                    return e;
                  }}
                  className={`form-control p-0`}
                  classNamePrefix="select"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
      {isTimming && (
        <Modal
          isOpen={isTimming}
          setIsOpen={setTimming}
          title={"Add Timming"}
         
        >
          <span>lkhbkhblkljk</span>
        </Modal>
      )}
    </div>
  );
}

export default Settings