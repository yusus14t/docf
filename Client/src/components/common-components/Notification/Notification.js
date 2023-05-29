import { useEffect, useState } from 'react';
import AddNotification from '../Notification/AddNotification'
import useNotification from '../../../hooks/Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useToasty from '../../../hooks/toasty';

const Notification = () => {
    const notification = useNotification();
    const toasty = useToasty();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        getNotifications()
    }, [])

    const getNotifications = async () => {
        try { 
            let { data } = await notification.get()
            setNotifications(data.notifications)
        } catch(error){ console.log(error) }
    }

    const handleDelete = async (notificationId) => {
        try{
            await notification.delete({_id: notificationId})
            setNotifications( prev => prev.filter( notify => notify._id !== notificationId ))
            toasty.success('Successfully delete ntification.')
        } catch(error) {
            console.log(error)
        }
    }

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
                                    <span className="text-light ml-4">Title</span>
                                </div>
                                <div className="col text-center">
                                    <span className="text-light">Message</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">Assignees Name</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">Priority</span>
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-light">Status</span>
                                </div>
                                <div className="col text-center">
                                    <span className="text-light">fghjk</span>
                                </div>
                            </div>
                            <div className="mx-4 mt-6  " style={{height:"65vh", marginTop:"50px"}}>

                            {notifications.map( notification =>
                                 <div className="row dropdown-menu-active  pt-2 ">
                                <div className="col text-center ">
                                    <span className="text-dark align-middle"> {notification.title.slice(0,20)}{ notification.title.length > 20 ? '...' : ''} </span>
                                </div>
                                <div className="col text-center">
                                    <span className="text-dark">{notification.message.slice(0,30)}{ notification.message.length > 30 ? '...' : ''}</span>
                                </div>                                
                                <div className="col text-center">
                                    {notification.assigneeIds.map( assignee => <span className="text-dark">{assignee.firstName} {assignee.lastName},</span> )}
                                </div>                                
                                <div className="col text-center">
                                    <span className="text-dark">{notification.priority}</span>
                                </div>  
                                <div className="col text-center">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <span className="text-dark ">{notification.status}</span>
                                        </div>
                                        <div className='col-4'>
                                            <FontAwesomeIcon className='ms-text-dark cursor-pointer' icon={faTrash} onClick={() => handleDelete(notification._id)}  />
                                        </div>
                                    </div>
                                </div>                                
                                {/* <div className="col text-center">
                                    <span className="text-dark">
                                        
                                    </span>
                                </div> */}
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
                    refresh={() => getNotifications()}
                />
            }
        </div>
    )
}

export default Notification;