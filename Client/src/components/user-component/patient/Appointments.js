import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../constants/utils'

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getUserAppointments()
  }, [])

  const getUserAppointments = async () => {
    try {
      let { data } = await axiosInstance.get('/patient/appointments')
      console.log('petient appointments',data)
      setAppointments(data?.appointments)
     } catch(error) { 
      console.error(error)
    }

  }
  return (
    <div className='conatiner'>

        <h2>Appointments List</h2>
        <ul>
            <li>
                <div className='ms-card-body'>
                    <div className="appint-list-card">
                        
                    </div>
                </div>
            </li>

        </ul>

    </div>
  )
}

export default Appointments