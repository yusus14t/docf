import React, { useState } from 'react';
import DoctorRegistration from '../common-components/registration/DoctorRegistration';
import ClinicRegistartion1 from '../common-components/registration/ClinicRegistration1';
import ClinicRegistartion2 from '../common-components/registration/ClinicRegistration2';
import DealRegistration from '../common-components/registration/DealRegistration';
import DepartmentRegistration from '../common-components/registration/DepartmentRegistration';

const HospitalRegistartion = () => {
  const [tab, setTab] = useState("STEP1")
  return (
    <div>
      <div className="ms-panel-body">
        <div className="ms-form-wizard style1-wizard wizard form-content"  role="application">
          <div className="steps  " >
            <ul role="tablist" >
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP1"); }} role="tab" className={`${tab === "STEP1" ? "current" : "disabled"} cursor-pointer`} aria-disabled="false" aria-selected="False"><span className="current-info audible tabName ">Step 1 </span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP2"); }} role="tab" className={`${tab === "STEP2" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"> <span className='tabName'>Step 2</span> </li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP3"); }} role="tab" className={`${tab === "STEP3" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 3</span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP4"); }} role="tab" className={`${tab === "STEP4" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 4</span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("FINAL"); }} role="tab" className={`${tab === "FINAL" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 5</span></li>
            </ul>
          </div>
          <div className="content ">
            <h3 id="default-wizard-h-0" tabIndex={-1} className="title current">Step 1</h3>
            {tab === "STEP1" && <ClinicRegistartion1 source={'Hospital'} tab={tab} />}
            {tab === "STEP2" &&  <ClinicRegistartion2 source={'Hospital'} tab={tab} /> }
            {tab === "STEP3" && <DepartmentRegistration source={'Hospital'} tab={tab} />}
            {tab === "STEP4" &&  <DoctorRegistration source={'Hospital'} tab={tab} /> }
            {tab === "FINAL" && <DealRegistration source={'Hospital'} tab={tab} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalRegistartion;