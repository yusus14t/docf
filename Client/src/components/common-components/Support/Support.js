import React, {  lazy, useState } from 'react';
import NewTcket from './NewTicket';

const Support = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return(
        <div className='ms-content-wrapper'>
            <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                <div>
                    <h6 >Help Desk</h6>
                </div>
                <div>
                    <button onClick={() => setIsModalOpen(true)} className=" btn btn-info btn-md" >New Ticket</button>
                </div>
                
            </div>
                <div class="ms-panel-body p-0" >
                        <div  class="table-responsive scrollbar-deep-purple ">
                            <div style={{position:"absolute", width:"99%", zIndex:"9"}}  className="row mx-0 ms-panel-header ">
                                <div className="col text-center ">
                                    <span className="text-light ml-4">Issue</span>
                                </div>
                                <div className="col text-center">
                                    <span className="text-light">Description</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">User</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">Date</span>
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
            { isModalOpen &&
                <NewTcket
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                />
            }
        </div>
    )
}

export default Support;