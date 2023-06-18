
import Modal from './Modal';
import profile from '../../assets.app/img/doctors-grid/348x350-3.jpg'
import { axiosInstance, dateFormat } from '../../constants/utils';
import { useEffect, useState } from 'react';
import useToasty from '../../hooks/toasty'

const UserModal = ({isOpen, setIsOpen, appointmentId}) => {
    const [appointment, setAppointment] = useState({});
    const toasty = useToasty()
    useEffect(() => {
      getAppointmentById();
    },[])

    const getAppointmentById = async () => {
      try{
        let {data} = await axiosInstance.get('/doctor/appointment', { params: { appointmentId }})
        setAppointment(data?.appointment)
      } catch(error){
        console.error(error)
        toasty.error(error.message)
      }
    }

    return (
      <Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        closeButton={false}
        submitButton={false}
        title="Appointment Card">
        <div className="Appointment-header">
          <div>
            <h4 className="text-center mb-2 m-0 fw-800">{appointment?.doctorId?.organizationId?.name || ""}</h4>
            <div className="d-flex flex-row justify-content-between">
              {appointment?.userId?.address && <p className="mb-0">
                <span className="text-info">Address : </span> 
                {appointment?.userId?.address || ""}
              </p>}
              <p className="mt-2 mb-0">Date : {dateFormat(new Date(appointment?.createdAt))}</p>
            </div>
            <hr />
            <div className="row">
              <div className="d-flex flex-row justify-content-between">
                <div className="user-profile-img-container">
                  <img className="user-profile-img" src={profile} alt="" />
                </div>
                <div className="user-details m-auto d-flex flex-column">
                  <h6 className="font-weight-bold">
                    <span className="m-0 text-dark">Name : </span>
                    { appointment?.userId?.fullName || ""}
                  </h6>

                  <h6 className="font-weight-bold">
                    <span className="m-0 text-dark">Age : </span>
                    {appointment?.userId?.age || ""}
                  </h6>

                  <h6 className="font-weight-bold">
                    <span className="m-0 text-dark">Gender : </span>
                    {appointment?.userId?.gender || "" }
                  </h6>
                </div>
                <div className="user-token m-auto ">
                  <h3 className="text-center ">{appointment?.token}</h3>
                </div>
              </div>

              <hr className="mt-2" />
            </div>
          </div>
          <div className="basic-details">
            <h2 className="font-weight-bold">Basic Details</h2>
            {appointment?.userId?.phone && <p className="mb-0 text-dark">Father Name : {appointment?.userId?.fatherName}</p>}
            <p className="mb-0 text-dark">Mobile Number : +91 {appointment?.userId?.phone}</p>
          </div>
          <hr />
          <div className='d-flex float-right' >
          <button type="button" className="btn btn-danger shadow-none mx-2" >Unreached</button>
          <button type="button" className="btn btn-primary shadow-none mx-2" >Reached</button>
          </div>
        </div>
      </Modal>
    );
}
export default UserModal