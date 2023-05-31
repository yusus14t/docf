import React, {  useState } from 'react';
import DoctorRegistration from '../common-components/registration/DoctorRegistration';
import ClinicRegistration1 from '../common-components/registration/ClinicRegistration1';
import CLiniRegistration2 from '../common-components/registration/ClinicRegistration2';
import DealRegistration from '../common-components/registration/DealRegistration';

const ClinicRegistartion = () => {
  const [tab, setTab] = useState("STEP1")   

  // const submit = async (formData) => {
  //   try {

  //     formData['tab'] = tab
  //     if(doctor?.organizationId){
  //       formData['organizationId'] = doctor.organizationId
  //       formData['userId'] = doctor._id
  //     }

  //     let {data}  = await axiosInstance.post('/common/create-clinic', formData, getAuthHeader())

  //     if(data?.tab === 'STEP1'){ 
  //       localStorage.setItem('createDoctor', JSON.stringify(data.doctor))
  //       setDoctor(data.doctor)
  //     }

  //     if( tab === 'FINAL' ){ 
  //       localStorage.removeItem('createDoctor')
  //       setDoctor({})
  //     }
       
  //     if( tab === 'STEP1') setTab('STEP2')
  //     if( tab === 'STEP2') setTab('STEP3')
  //     if( tab === 'STEP3') setTab('FINAL')

  //   } catch (error) { console.log(error) }
  // }

  return (
    <div>
      <div className="ms-panel-body content-height">
        <div className="ms-form-wizard style1-wizard wizard form-content" role="application">
          <div className="steps  ">
            <ul role="tablist">
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP1"); }} role="tab" className={`${tab === "STEP1" ? "current" : "disabled"} cursor-pointer`} aria-disabled="false" aria-selected="False"><span className="current-info audible tabName ">Step 1 </span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP2"); }} role="tab" className={`${tab === "STEP2" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"> <span className='tabName'>Step 2</span> </li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP3"); }} role="tab" className={`${tab === "STEP3" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 3</span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("FINAL"); }} role="tab" className={`${tab === "FINAL" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 4</span></li>
            </ul>
          </div>
          <div className="content ">
            <h3 id="default-wizard-h-0" tabIndex={-1} className="title current">Step 1</h3>
            {tab === "STEP1" && <ClinicRegistration1 tab={tab} /> }
            {tab === "STEP2" && <CLiniRegistration2 tab={tab} /> }
            {tab === "STEP3" && <DoctorRegistration tab={tab} /> }
            {tab === "FINAL" && <DealRegistration /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicRegistartion