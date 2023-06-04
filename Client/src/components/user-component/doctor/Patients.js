import React from 'react'

const Patients = () => {
  return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="ms-panel">
              <div className="ms-panel-header ms-panel-custome">
                <h6>Patient List</h6>
                <a href="add-patient.html" className="ms-text-primary">Add Patient</a>
              </div>
              <div className="ms-panel-body p-0">
                <div className="table-responsive">
                  <div id="data-table-2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12 p-0 mx-2">
                        <table id="data-table-2" className="table table-striped thead-primary w-100 dataTable no-footer" role="grid" aria-describedby="data-table-2_info" style={{ width: '1160px' }}>
                          <thead>
                            <tr role="row">
                              <th className="" tabIndex={0} aria-controls="data-table-2" rowSpan={1} colSpan={1} aria-sort="ascending" style={{ width: '84px' }}>Name</th>
                              <th className="" tabIndex={0} aria-controls="data-table-2" rowSpan={1} colSpan={1} aria-label="Address: activate to sort column ascending" style={{ width: '200px' }}>Address</th>
                              <th className="" tabIndex={0} aria-controls="data-table-2" rowSpan={1} colSpan={1} aria-label="Disease: activate to sort column ascending" style={{ width: '89px' }}>Disease</th>
                              <th className="" tabIndex={0} aria-controls="data-table-2" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '44px' }}>Age</th>
                              <th className="" tabIndex={0} aria-controls="data-table-2" rowSpan={1} colSpan={1} aria-label="Phone: activate to sort column ascending" style={{ width: '102px' }}>Phone</th>
                              <th className="" tabIndex={0} aria-controls="data-table-2" rowSpan={1} colSpan={1} aria-label="Email: activate to sort column ascending" style={{ width: '237px' }}>Email</th>
                              <th className="" tabIndex={0} aria-controls="data-table-2" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending" style={{ width: '65px' }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">
                                Angelica</td>
                              <td>Linden Avenue, Orlando</td>
                              <td>Liver Disease</td>
                              <td>24</td>
                              <td>	(797) 506 1265</td>
                              <td>angelicaramos@example.com</td>
                              <td><a href="#"><i className="fas fa-pencil-alt ms-text-primary" /></a>
                                <a href="#"><i className="far fa-trash-alt ms-text-danger" /></a>
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
          </div>
        </div>
      </div>
  )
}

          export default Patients