import Modal from "../../common-components/Modal";
import DepartmentRegistration from "../../common-components/registration/DepartmentRegistration";

const AddDepartment = ({ isOpen, setIsOpen }) => { 
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return(
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Add Department"
            closeButton={false}
            submitButton={false}
        >
                <DepartmentRegistration
                    source="modal"
                    id={userInfo?.organizationId?._id}
                    setIsOpen={setIsOpen}
                />
        </Modal>
    )
}
export default AddDepartment;