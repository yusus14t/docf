import React from 'react'

const Appointment = () => {
  return (
  <div className="ms-content-wrapper">
    <div className="row">
      <div className="col-md-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-0">
            <li className="breadcrumb-item"><a href="/"><i className="material-icons">home</i> Home</a></li>
            <li className="breadcrumb-item"><a href="/">Appointment</a></li>
            <li className="breadcrumb-item active" aria-current="page">Appointment List</li>
          </ol>
        </nav>
        <div className="ms-panel">
          <div className="ms-panel-header ms-panel-custome">
            <h6>Appointment List</h6>
            <a href="add-appointment.html" className="ms-text-primary">Add Appointment</a>
          </div>
          <div className="ms-panel-body">
            <div className="table-responsive">
              <div id="data-table7_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="data-table7_length">
                      <label>Show 
                        <select name="data-table7_length" aria-controls="data-table7" className="custom-select custom-select-sm form-control form-control-sm">
                          <option value="10">10</option>
                        </select> 
                      </label>
                      </div>
                    </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="data-table7_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table7" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table id="data-table7" className="table table-striped thead-primary w-100 dataTable no-footer" role="grid" aria-describedby="data-table7_info" style={{width: "1007px"}}>
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "54px"}} aria-label="ID: activate to sort column descending" aria-sort="ascending">ID</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "101px"}} aria-label="Patient Name: activate to sort column ascending">Patient Name</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "32px"}} aria-label="Age: activate to sort column ascending">Age</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "99px"}} aria-label="Doctor Name: activate to sort column ascending">Doctor Name</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "90px"}} aria-label="Department: activate to sort column ascending">Department</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "71px"}} aria-label="Date: activate to sort column ascending">Date</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "108px"}} aria-label="Time: activate to sort column ascending">Time</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "59px"}} aria-label="Disease: activate to sort column ascending">Disease</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table7" rowSpan="1" colSpan="1" style={{width: "51px"}} aria-label="Action: activate to sort column ascending">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td className="sorting_1">APT0001</td>
                          <td><img src="../../assets/img/dashboard/patient-1.jpg" />Denise</td>
                          <td>39</td>
                          <td>Henry Daniels</td>
                          <td>Cardiology</td>
                          <td>11 Dec 2022</td>
                          <td>10:00am-12:00am</td>
                          <td>Cold</td>
                          <td>
                            <a href="/"><i className="fas fa-pencil-alt ms-text-primary"></i></a>
                            <a href="/"><i className="far fa-trash-alt ms-text-danger"></i></a>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td className="sorting_1">APT0001</td>
                          <td><img src="../../assets/img/dashboard/patient-1.jpg" />Denise</td>
                          <td>39</td>
                          <td>Henry Daniels</td>
                          <td>Cardiology</td>
                          <td>11 Dec 2022</td>
                          <td>10:00am-12:00am</td>
                          <td>Cold</td>
                          <td>
                            <a href="/"><i className="fas fa-pencil-alt ms-text-primary"></i></a>
                            <a href="/"><i className="far fa-trash-alt ms-text-danger"></i></a>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td className="sorting_1">APT0001</td>
                          <td><img src="../../assets/img/dashboard/patient-1.jpg" />Denise</td>
                          <td>39</td>
                          <td>Henry Daniels</td>
                          <td>Cardiology</td>
                          <td>11 Dec 2022</td>
                          <td>10:00am-12:00am</td>
                          <td>Cold</td>
                          <td>
                            <a href="/"><i className="fas fa-pencil-alt ms-text-primary"></i></a>
                            <a href="/"><i className="far fa-trash-alt ms-text-danger"></i></a>
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
</div>);
}

export default Appointment;