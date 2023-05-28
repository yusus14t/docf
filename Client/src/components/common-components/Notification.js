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
            <div className="row">
                <div class="col-xl-12 col-md-12">
                    <div class="ms-panel">
                        <div class="ms-panel-header ms-panel-custome d-flex justify-space-between mb-2">
                        <div>
                             <h6>Notification</h6>
                        </div>
                        <div>
                            <button className="btn btn-light">+ Notification</button>
                        </div>
                        </div>
                        <div class="ms-panel-body">
                        <div class="table-responsive">
                            <table class="table table-hover thead-primary">
                            <thead>
                                <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Reciever</th>
                                <th scope="col">Date</th>
                                <th scope="col">Message</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;