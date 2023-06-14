
import Modal from './Modal';
import profile from '../../assets.app/img/doctors-grid/348x350-3.jpg'

const UserModal = ({isOpen, setIsOpen, appointmentData}) => {
    console.log(appointmentData)
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Appointment Card">
        <h1>{appointmentData?.user?.firstName}</h1>
        <div className="Appointment-header">
          <div>
            <h4 className="text-center mb-2 m-0 fw-800"> Madni Clinic</h4>
            <div className="d-flex flex-row justify-content-between">
              <p className="mb-0">
                <span className="text-info">Address : </span> Nala road Nagla
                Jamalpur <br /> Aligarh 202001, Uttar Prdesh
              </p>
              <p className="mt-2 mb-0">Date : 07/08/2023</p>
            </div>
            <hr />
            <div className="row">
              <div className="d-flex flex-row justify-content-between">
                <div className="user-profile-img-container">
                  <img className="user-profile-img" src={profile} alt="" />
                </div>
                <div className="user-details m-auto d-flex flex-column">
                  <h6 font-weight-bold>
                    <span className="m-0 text-dark">Name : </span>
                    Kevin Hurt
                  </h6>

                  <h6 font-weight-bold>
                    <span className="m-0 text-dark">Age : </span>
                    23
                  </h6>

                  <h6 font-weight-bold>
                    <span className="m-0 text-dark">Gender : </span>
                    Female
                  </h6>
                </div>
                <div className="user-token m-auto ">
                  <h3 className="text-center ">45</h3>
                </div>
              </div>

              <hr className="mt-2" />
            </div>
          </div>
          <div className="basic-details">
            <h2 className="font-weight-bold">Basic Details</h2>
            <p className="mb-0 text-dark">Father Name : Levin Hurt</p>
            <p className="mb-0 text-dark">Mobile Number : +91 8218397855</p>
          </div>
          <hr />
        </div>
      </Modal>
    );
}
export default UserModal