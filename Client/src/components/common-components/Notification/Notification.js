import { useState } from 'react';
import AddNotification from '../Notification/AddNotification'
const Notification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return(
        <div className='ms-content-wrapper'>
            <div className="row mr-0" >
                <div class="col-xl-12 col-md-12">
                    <div class="ms-panel mb-0">
                        <div  class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                        <div>
                             <h6>Notification</h6>
                        </div>
                        {userInfo.userType === 'SA' && <div>
                            <button className=" btn btn-info btn-md" onClick={() => setIsModalOpen(true)}>Add Notification</button>
                        </div>}
                        </div>
                        <div class="ms-panel-body p-0" >
                        <div  class="table-responsive scrollbar-deep-purple ">
                            <div style={{position:"absolute", width:"99%", zIndex:"9"}}  className="row mx-0 ms-panel-header ">
                                <div className="col text-center ">
                                    <span className="text-light ml-4">People</span>
                                </div>
                                <div className="col text-center">
                                    <span className="text-light">Reciever</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">Message</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">Title</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">Status</span>
                                </div>
                            </div>
                            <div className="mx-4 mt-10  " style={{height:"65vh", marginTop:"50px"}}>

                            {Array(25).fill(0).map( a =>
                                 <div className="row dropdown-menu-active ">
                                <div className="col text-center ">
                                    <span className="text-dark align-middle">Dr. Andrew </span>
                                </div>
                                <div className="col text-center">
                                    <span className="text-dark">01 Dec 2022</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-dark">Hello world</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-dark">Title</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-dark">
                                        <label class="ms-switch">
                                                <input type="checkbox" />
                                                <span class="ms-switch-slider ms-switch-success round"></span>
                                        </label></span>
                                </div>
                            </div>)}
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            { userInfo.userType === 'SA' && isModalOpen &&
                <AddNotification
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                />
            }
        </div>
    )
}

export default Notification;