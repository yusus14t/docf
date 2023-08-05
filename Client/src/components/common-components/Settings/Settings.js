import React, { useEffect, useState } from "react";
import { axiosInstance, getAuthHeader } from "../../../constants/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import Profile from "./Profile";
import CreatableSelect from 'react-select/creatable';
import useToasty from "../../../hooks/toasty";


const Settings = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const [tab, setTab] = useState(['HL', 'CL'].includes(userInfo.userType) ? 'SPECIALIZATION' : 'PROFILE')
  const [isOpen, setIsOpen] = useState(false)
  const [specialization, setSpecialization] = useState({ name: null, error: null })
  const [specializations, setSpecializations] = useState([])
  const [allSpecializations, setAllSpecializations] = useState([])
  const toasty = useToasty()

  useEffect(() => {
    if (tab === 'SPECIALIZATION')
      getAllSpecialization()
  }, [tab,])

  useEffect(() => {
    getAllCommonSpecialization()
  }, [isOpen])

  const getAllSpecialization = async () => {
    try {
      let { data } = await axiosInstance.get('/doctor/hospital-specialization')
      setSpecializations(data?.specialization)
    } catch (error) {
      console.error(error)
    }
  }

  const getAllCommonSpecialization = async () => {
    try {
      let { data } = await axiosInstance.get('/common/specializations')
      setAllSpecializations(data?.specializations.map(sp => ({ label: sp.name, value: sp.id })))
    } catch (error) {
      console.error(error)
    }
  }


  const submitSpecialization = async (value) => {
    try {
      if (!value.length) {
        setSpecialization({ ...specialization, error: 'Specialization name is required.' })
        return
      }
      let { data } = await axiosInstance.post('/doctor/specialization', { specializations: value }, getAuthHeader())

      if (!data.specializations?.length) {
        toasty.error('Oops! They have already in your list')
        setIsOpen(false)
        return
      }

      setSpecializations([...specializations, ...data?.specializations])
      setIsOpen(false)
      toasty.success(data?.message)

    } catch (error) { console.error(error) }
  }

  return (
    <div className='ms-content-wrapper'>
      <div className="row mr-0" >
        <div class="col-xl-12 col-md-12">
          <div class="ms-panel mb-0 inner-content-height">
            <div class="ms-panel-header ms-panel-custome">
              <div>
                {['HL', 'CL'].includes(userInfo.userType) && <span className="btn btn-info btn-md mx-3" onClick={() => setTab('SPECIALIZATION')}>Specialization</span>}
                <span className="btn btn-info btn-md mx-3" onClick={() => setTab('PROFILE')}>Profile</span>
              </div>
            </div>
            <div class="ms-panel-body p-0" >
              {tab === 'SPECIALIZATION' &&
                <>
                  <div className="d-flex justify-content-between p-3">
                    <div>
                      <h4>Specialization</h4>
                    </div>
                    <div>
                      <button className="btn btn-primary btn-md shadow-none" onClick={() => setIsOpen(true)}>Add Specialization</button>
                    </div>
                  </div>
                  <div class="ms-panel-body py-0 ">
                    <div class="table-responsive">
                      <table class="table table-hover  thead-primary">
                        <thead style={{ backgroundColor: '#A2A2A252' }}>
                          <tr>
                            <th scope="col" style={{ color: '#000' }}>Id</th>
                            <th scope="col" style={{ color: '#000' }}>Name</th>
                            <th scope="col" style={{ color: '#000' }}>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {specializations?.length > 0 && specializations.map(specialization =>
                            <tr>
                              <td class="ms-table-f-w">{specialization.id}</td>
                              <td>{specialization.name}</td>
                              <td>
                                <FontAwesomeIcon style={{ marginLeft: "8px" }} className="cursor-pointer" onClick={() => { }} icon={faTrash}></FontAwesomeIcon>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              }
              {tab === 'PROFILE' && <Profile />}
            </div>
          </div>
        </div>
      </div>
      {isOpen &&
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Add Specialization"
          data={specialization}
          callback={(data) => submitSpecialization(data)}
        >
          <div className="row">
            <div className="col-12">
              <label>Name of specialization</label>
              <div className="">
                <CreatableSelect
                  isMulti={true}
                  options={allSpecializations}
                  onChange={(e) => setSpecialization(e)}
                  className={`form-control p-0`}
                  classNamePrefix="select"
                />
              </div>
            </div>
          </div>
        </Modal>
      }
    </div>
  );
}

export default Settings