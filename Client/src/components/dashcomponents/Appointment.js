import React from 'react'

const Appointment = () => {
  return (
    <div>
      <div>
        <div className="ms-content-wrapper">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb ps-0">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="material-icons">home</i> Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Appointment</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add Appointment
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-xl-12 col-md-12">
              <div className="ms-panel">
                <div className="ms-panel-header ms-panel-custome">
                  <h6>Add Appointment</h6>
                  <a href="appointment-list.html" className="ms-text-primary">
                    Appointment List
                  </a>
                </div>
                <div className="ms-panel-body">
                  <form className="needs-validation" noValidate>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom001">First Name</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom001"
                            placeholder="Enter First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom002">Last name</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom002"
                            placeholder="Enter Last Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom003">
                          Email Address
                        </label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="validationCustom003"
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <label htmlFor="validationCustom004">Password</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            id="validationCustom004"
                            placeholder="Enter Password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom005">Patient Id</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom005"
                            placeholder="Enter Id"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom006">
                          Department Name
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom006"
                            placeholder="Enter Department Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom007">
                          Appointment With
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom007"
                            placeholder="Enter Doctor Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom008">
                          Appointment Date
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom008"
                            placeholder="Enter Appointment Date"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-2">
                        <label>Problem</label>
                        <div className="input-group">
                          <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Sex</label>
                        <ul className="ms-list d-flex">
                          <li className="ms-list-item ps-0">
                            <label className="ms-checkbox-wrap">
                              <input
                                type="radio"
                                name="radioExample"
                                defaultValue
                              />
                              <i className="ms-checkbox-check" />
                            </label>
                            <span> Male </span>
                          </li>
                          <li className="ms-list-item">
                            <label className="ms-checkbox-wrap">
                              <input
                                type="radio"
                                name="radioExample"
                                defaultValue
                                defaultChecked
                              />
                              <i className="ms-checkbox-check" />
                            </label>
                            <span> Female </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      className="btn btn-warning mt-4 d-inline w-20"
                      type="submit"
                    >
                      Reset
                    </button>
                    <button
                      className="btn btn-primary mt-4 d-inline w-20"
                      type="submit"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reminder Modal */}
        <div
          className="modal fade"
          id="reminder-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="reminder-modal"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-secondary">
                <h5 className="modal-title has-icon text-white">
                  {" "}
                  New Reminder
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="ms-form-group">
                    <label>Remind me about</label>
                    <textarea
                      className="form-control"
                      name="reminder"
                      defaultValue={""}
                    />
                  </div>
                  <div className="ms-form-group">
                    <span className="ms-option-name fs-14">Repeat Daily</span>
                    <label className="ms-switch float-end">
                      <input type="checkbox" />
                      <span className="ms-switch-slider round" />
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ms-form-group">
                        <input
                          type="text"
                          className="form-control datepicker"
                          name="reminder-date"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ms-form-group">
                        <select className="form-control" name="reminder-time">
                          <option value>12:00 pm</option>
                          <option value>1:00 pm</option>
                          <option value>2:00 pm</option>
                          <option value>3:00 pm</option>
                          <option value>4:00 pm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Add Reminder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Notes Modal */}
        <div
          className="modal fade"
          id="notes-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="notes-modal"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-secondary">
                <h5 className="modal-title has-icon text-white" id="NoteModal">
                  New Note
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="ms-form-group">
                    <label>Note Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="note-title"
                      defaultValue
                    />
                  </div>
                  <div className="ms-form-group">
                    <label>Note Description</label>
                    <textarea
                      className="form-control"
                      name="note-description"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="mymodal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog ms-modal-dialog-width">
            <div className="modal-content ms-modal-content-width">
              <div className="modal-header  ms-modal-header-radius-0">
                <h4 className="modal-title text-white">Make An Appointment</h4>
                <button
                  type="button"
                  className="close text-white"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  x
                </button>
              </div>
              <div className="modal-body p-0 text-start">
                <div className="col-xl-12 col-md-12">
                  <div className="ms-panel ms-panel-bshadow-none">
                    <div className="ms-panel-header">
                      <h6>Patient Information</h6>
                    </div>
                    <div className="ms-panel-body">
                      <form className="needs-validation" noValidate>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom01">
                              Patient Name
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Enter Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">
                              Date Of Birth
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                id="validationCustom02"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom03">Disease</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Disease"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-2">
                            <label htmlFor="validationCustom04">Address</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom04"
                                placeholder="Add Address"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom05">
                              Phone no.
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom05"
                                placeholder="Enter Phone No."
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom06">
                              Department Name
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                placeholder="Enter Department Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom07">
                              Appointment With
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom07"
                                placeholder="Enter Doctor Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom08">
                              Appointment Date
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom08"
                                placeholder="Enter Appointment Date"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label>Sex</label>
                            <ul className="ms-list d-flex">
                              <li className="ms-list-item ps-0">
                                <label className="ms-checkbox-wrap">
                                  <input
                                    type="radio"
                                    name="radioExample"
                                    defaultValue
                                  />
                                  <i className="ms-checkbox-check" />
                                </label>
                                <span> Male </span>
                              </li>
                              <li className="ms-list-item">
                                <label className="ms-checkbox-wrap">
                                  <input
                                    type="radio"
                                    name="radioExample"
                                    defaultValue
                                    defaultChecked
                                  />
                                  <i className="ms-checkbox-check" />
                                </label>
                                <span> Female </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button
                          className="btn btn-warning mt-4 d-inline w-20"
                          type="submit"
                        >
                          Reset
                        </button>
                        <button
                          className="btn btn-primary mt-4 d-inline w-20"
                          type="submit"
                        >
                          Add Appointment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="prescription"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog ms-modal-dialog-width">
            <div className="modal-content ms-modal-content-width">
              <div className="modal-header  ms-modal-header-radius-0">
                <h4 className="modal-title text-white">Make a prescription</h4>
                <button
                  type="button"
                  className="close  text-white"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  x
                </button>
              </div>
              <div className="modal-body p-0 text-start">
                <div className="col-xl-12 col-md-12">
                  <div className="ms-panel ms-panel-bshadow-none">
                    <div className="ms-panel-header">
                      <h6>Patient Information</h6>
                    </div>
                    <div className="ms-panel-body">
                      <form className="needs-validation" noValidate>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom09">
                              Patient Name
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom09"
                                placeholder="Enter Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom10">
                              Date Of Birth
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                id="validationCustom10"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="validationCustom11">Address</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom11"
                                placeholder="Add Address"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom12">
                              Phone no.
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom12"
                                placeholder="Enter Phone No."
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom13">
                              Medication
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom13"
                                placeholder="Acetaminophen"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom14">
                              Period Of medication
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                id="validationCustom14"
                                placeholder
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom15">
                              Appointment With
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom15"
                                placeholder="Enter Doctor Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-warning mt-4 d-inline w-20"
                          type="submit"
                        >
                          Save Prescription
                        </button>
                        <button
                          className="btn btn-primary mt-4 d-inline w-20"
                          type="submit"
                        >
                          Save &amp; Print
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="report1"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog ms-modal-dialog-width">
            <div className="modal-content ms-modal-content-width">
              <div className="modal-header  ms-modal-header-radius-0">
                <h4 className="modal-title text-white">Generate report</h4>
                <button
                  type="button"
                  className="close  text-white"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  x
                </button>
              </div>
              <div className="modal-body p-0 text-start">
                <div className="col-xl-12 col-md-12">
                  <div className="ms-panel ms-panel-bshadow-none">
                    <div className="ms-panel-header">
                      <h6>Patient Information</h6>
                    </div>
                    <div className="ms-panel-body">
                      <form className="needs-validation" noValidate>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom16">
                              Patient Name
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom16"
                                placeholder="Enter Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom17">
                              Date Of Birth
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                id="validationCustom17"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="validationCustom22">Address</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom22"
                                placeholder="Add Address"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom18">
                              Phone no.
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom18"
                                placeholder="Enter Phone No."
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom19">
                              Report Type
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom19"
                                placeholder="Diseases Report"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom23">
                              Report Period
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                id="validationCustom23"
                                placeholder
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom20">
                              Appointment With
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom20"
                                placeholder="Enter Doctor Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-warning mt-4 d-inline w-20"
                          type="submit"
                        >
                          Generate Report
                        </button>
                        <button
                          className="btn btn-primary mt-4 d-inline w-20"
                          type="submit"
                        >
                          Generate &amp; Print
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;