const Notification = () => {
    return(
        <div className='ms-content-wrapper'>
            {/* <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                <div>
                    <h6>Notification</h6>
                </div>
                <div>
                    <button className="btn btn-light">+ Notification</button>
                </div>
            </div> */}
            <div className="row" >
                <div class="col-xl-12 col-md-12">
                    <div class="ms-panel mb-0">
                        <div  class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                        <div>
                             <h6>Notification</h6>
                        </div>
                        <div>
                            <button className=" btn btn-info btn-md">+ Notification</button>
                        </div>
                        </div>
                        <div class="ms-panel-body p-0" >
                        <div class="table-responsive ">
                            <div className="row ms-panel-header ">
                                <div className="col">
                                    <span className="text-light ml-4">People</span>
                                </div>
                                <div className="col">
                                    <span className="text-light">Reciever</span>
                                </div>                                
                                <div className="col">
                                    <span className="text-light">Message</span>
                                </div>                                
                                <div className="col">
                                    <span className="text-light">Title</span>
                                </div>                                
                                <div className="col">
                                    <span className="text-light">Status</span>
                                </div>
                            </div>
                            <div className="mx-4 mt-4">

                            {Array(15).fill(0).map( a =>
                                 <div className="row dropdown-menu-active">
                                <div className="col">
                                    <span className="text-dark">Dr. Andrew </span>
                                </div>
                                <div className="col">
                                    <span className="text-dark">01 Dec 2022</span>
                                </div>                                
                                <div className="col">
                                    <span className="text-dark">Hello world</span>
                                </div>                                
                                <div className="col">
                                    <span className="text-dark">Title</span>
                                </div>                                
                                <div className="col">
                                    <span className="text-dark">
                                        <label class="ms-switch">
                                                <input type="checkbox" />
                                                <span class="ms-switch-slider ms-switch-success round"></span>
                                        </label></span>
                                </div>
                            </div>)}
                            </div>
                            {/* <ul style={{overflowY:"scroll", height:"200px"}} className=" ">
                                <ul  className="d-flex justify-content-around ms-panel-header position-sticky">
                                <li>
                                    <div>Title</div>
                                </li>
                                <li>
                                    <div>Reciever</div>
                                </li>
                                <li>
                                    <div>Date</div>
                                </li>
                                <li>
                                    <div>Message</div>
                                </li>
                                <li>
                                    <div>Status</div>
                                </li>
                                </ul>
                                {[1,2,3,4,5,6,7].map( a => <li>
                                        <td class="ms-table-f-w"> <img src="assets/img/dashboard/patient-6.jpg" alt="people" /> John Doe </td>
                                        <td>Dr. Andrew </td>
                                        <td>01 Dec 2022</td>
                                        <td>Hello world</td>
                                        <td>
                                            <label class="ms-switch">
                                                <input type="checkbox" />
                                                <span class="ms-switch-slider ms-switch-success round"></span>
                                            </label>
                                        </td>
                                    </li>)}
                            </ul> */}
                            {/* <table className="table table-hover thead-primary">
                            <thead style={{position:"sticky"}}>
                                <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Reciever</th>
                                <th scope="col">Date</th>
                                <th scope="col">Message</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            
                                <tbody>
                                    {[1,2,3,4,5,6,7].map( a => <tr>
                                        <td class="ms-table-f-w"> <img src="assets/img/dashboard/patient-6.jpg" alt="people" /> John Doe </td>
                                        <td>Dr. Andrew </td>
                                        <td>01 Dec 2022</td>
                                        <td>Hello world</td>
                                        <td>
                                            <label class="ms-switch">
                                                <input type="checkbox" />
                                                <span class="ms-switch-slider ms-switch-success round"></span>
                                            </label>
                                        </td>
                                    </tr>)}
                                </tbody>

                            
                            </table> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;