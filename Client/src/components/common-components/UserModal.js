
import Modal from './Modal';

const UserModal = ({isOpen, setIsOpen, appointmentData}) => {
    console.log(appointmentData)
    return(
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title='Appointment Card'
        >
            <h1>{appointmentData?.user?.firstName}</h1>
        </Modal>
    )
}
export default UserModal