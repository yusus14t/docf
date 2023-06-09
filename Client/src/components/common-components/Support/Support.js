import React, {  useEffect, useState } from 'react';
import NewTcket from './NewTicket';
import { axiosInstance, formatDate, getAuthHeader } from '../../../constants/utils';

const Support = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        allTickets()
    }, [])

    const allTickets = async () => {
        try{
            let {data} = await axiosInstance.get('/common/tickets', {...getAuthHeader()}) 
            setTickets(data?.tickets)
        } catch(error){ console.log(error) }
    }

    return(
        <div className='ms-content-wrapper'>
            <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                <div>
                    <h6 >Help Desk</h6>{ console.log(tickets)}
                </div>
                {userInfo.userType !== 'SA' && <div>
                    <button onClick={() => setIsModalOpen(true)} className=" btn btn-info btn-md" >New Ticket</button>
                </div>}
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

                            {tickets.length && tickets.map( ticket =>
                                 <div className="row dropdown-menu-active ">
                                <div className="col text-center ">
                                    <span className="text-dark align-middle">{ticket.title}</span>
                                </div>
                                <div className="col text-center">
                                    <span className="text-dark">{ticket.description}</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-dark">{ticket.senderId?.firstName} {ticket.senderId?.lastName}</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-dark">{formatDate(ticket.createdAt)}</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-dark">{ticket.status}</span>
                                    <span className="text-dark mx-4">MAR</span>
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