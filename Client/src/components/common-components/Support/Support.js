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