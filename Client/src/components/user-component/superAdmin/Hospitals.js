import { useEffect, useState } from "react";
import { axiosInstance, getAuthHeader, getFullPath, userInfo } from "../../../constants/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../common-components/Modal";
import NO_PHOTO from '../../../assets.app/images/no-photo.png';
import { Dropdown, Item } from "../../common-components/Dropdown";
import { MenuIcon } from "../../common-components/icons";

export default () => {
    const [deleteModal, setDeleteModal] = useState(false)   
    const [hospital, setHospital] = useState({})
    const [hospitals, setHospitals] = useState([])
    const [ paymentModal, setPaymentModal ] = useState(false)


    useEffect(() => {
        getHospitals()
    }, [])

    const getHospitals = async () => {
        try{
            let { data } = await axiosInstance.get('/super-admin/hospitals', { params: { isToday: false }, ...getAuthHeader()})
            setHospitals(data?.hospitals)
        } catch(error){
            console.error(error)
        }
    }

    const deleteHospital = async ( _id ) => {
        try {
            await axiosInstance.delete(`/mr/orgnization/${ _id }`)
            setDeleteModal(false)
            setHospitals( old => old.filter( hospital => hospital?._id !== _id ))
        } catch(error) { console.error(error) }
    }

    const setPaymentOption = async ( value ) => {
        try{
            setHospital({ ...hospital, paymentOption:  value })
            await axiosInstance.post('/super-admin/payment-option', { _id: hospital._id,  paymentOption: value },  getAuthHeader())
        }catch(error){}
    }

    return (
        <div className="ms-content-wrapper mx-2">
            <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                <div><h6>Hospitals</h6></div>
                <div class="ms-form-group my-0 mb-0 has-icon fs-14 d-flex justify-content-center">
                </div>
            </div>
            <div className="row">
                { hospitals?.length > 0 && hospitals.map((hospital, index) => (
                    <div key={index} className="col-lg-4 col-md-3  col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-body" style={{ borderLeft: '5px solid #112c2f'}}>
                                <div className="media mb-0 fs-14 justify-content-start">
                                    <div className="me-2 align-self-center">
                                        <img src={hospital?.photo ? getFullPath(hospital?.photo) :  NO_PHOTO} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center" >
                                            <h6 style={{ maxWidth: '70%' }}>{hospital?.name}</h6>
                                            <Dropdown
                                                toggle={
                                                    <div className="cursor-pointer" style={{ width: '25px' }}>
                                                        <img src={MenuIcon} className="w-100 h-100" />
                                                    </div>
                                                }
                                            >
                                                <Item onClick={() => {setHospital( hospital );  setDeleteModal(true) }} >
                                                    <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                                                </Item>
                                                {["SA", "AD"].includes(userInfo?.userType) && <Item onClick={() => { setHospital( hospital ); setPaymentModal(true) }} >
                                                    <FontAwesomeIcon icon={faIndianRupeeSign} className="me-2" /> Payment
                                                </Item>}
                                            </Dropdown>
                                        </div>
                                        <div>
                                            <p className="fs-12 my-1 text-disabled">{hospital?.specialization?.length ? hospital?.specialization[0]?.name : '-'}</p>
                                            <h6 className="fs-12 my-1">{hospital?.phone ? `( ${hospital?.phone.slice(0, 3)} ) - ${hospital?.phone.slice(3, 6)} - ${hospital?.phone.slice(-4)}` : '-'}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>

            { deleteModal && <Modal
                isOpen={deleteModal}
                setIsOpen={setDeleteModal}
                title={`Delete Hospital`}
                callback={() => deleteHospital(hospital?._id) }
            >
                Do you want to delete this department?
            </Modal>}

            { paymentModal && <Modal
                isOpen={paymentModal}
                setIsOpen={setPaymentModal}
                title={'Set Payment Modal'}
                closeButton={false}
                submitButton={false}
            >
                <div className="d-flex justify-content-between align-items-center">
                    <p>Set payment for this hospital</p>
                    <label class="ms-switch">
                        <input type="checkbox" checked={ hospital?.paymentOption } onChange={( e ) => setPaymentOption( e.target.checked )} />
                        <span class="ms-switch-slider round" ></span>
                    </label>
                </div>
            </Modal>}

        </div>
    )
}