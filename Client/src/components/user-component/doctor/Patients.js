import React, { useEffect, useState } from 'react'
import { axiosInstance, formatPhone } from '../../../constants/utils'

const Patients = () => {
  const [ patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients()
  }, [])

  const getPatients = async () => {
    try {
      let { data } = await axiosInstance.get('/doctor/patients')
      setPatients(data?.patients)

    } catch(error){ console.error(error) }
  }
  return (
      <div className="ms-content-wrapper ">
        <div className="row">
          <div className="col-md-12">
            <div className="ms-panel inner-content-height">
              <div className="ms-panel-header ms-panel-custome">
                <h6>Patient List</h6>
                <a href="add-patient.html" className="ms-text-primary">Add Patient</a>
              </div>
              <div className="ms-panel-body p-0 ">
                <div className="table-responsive">
                  <div id="data-table-2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12 p-0 m-2">
                        <table id="data-table-2" className="table table-striped thead-primary w-100 dataTable no-footer" role="grid" aria-describedby="data-table-2_info" style={{ width: '1160px' }}>
                          <thead>
                            <tr role="row">
                              <th  style={{ width: '84px' }}>Name</th>
                              <th  style={{ width: '102px' }}>Phone</th>
                              <th  style={{ width: '44px' }}>Age</th>
                              <th  style={{ width: '44px' }}>gender</th>
                              <th  style={{ width: '200px' }}>Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            {patients?.length > 0 && patients.map( patient => <tr role="row" className="odd">
                              <td className="sorting_1">
                                {patient.name}</td>
                              <td>{formatPhone(patient?.phone)}</td>
                              <td>{patient?.age || '-'}</td>
                              <td>{patient?.gender || '-'}</td>
                              <td>{patient?.address}</td>
                            </tr>)}
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