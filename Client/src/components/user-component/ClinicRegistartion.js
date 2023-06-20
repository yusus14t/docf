import React, {  useState } from 'react';
import DoctorRegistration from '../common-components/registration/DoctorRegistration';
import ClinicRegistration1 from '../common-components/registration/ClinicRegistration1';
import CLiniRegistration2 from '../common-components/registration/ClinicRegistration2';
import DealRegistration from '../common-components/registration/DealRegistration';

const ClinicRegistartion = ({isSelfCreated, source}) => {
  const [tab, setTab] = useState(isSelfCreated ? "STEP2" : 'STEP1')   
  return (
    <div>
      <div className="ms-panel-body content-height">
        <div className="ms-form-wizard style1-wizard wizard form-content" role="application">
          <div className="steps  ">
            <ul role="tablist">
              { !isSelfCreated && <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP1"); }} role="tab" className={`${tab === "STEP1" ? "current" : "disabled"} cursor-pointer`} aria-disabled="false" aria-selected="False"><span className="current-info audible tabName ">Step 1 </span></li>}
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP2"); }} role="tab" className={`${tab === "STEP2" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"> <span className='tabName'>Step 2</span> </li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("STEP3"); }} role="tab" className={`${tab === "STEP3" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 3</span></li>
              <li style={{marginTop:"15px"}} onClick={() => { setTab("FINAL"); }} role="tab" className={`${tab === "FINAL" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 4</span></li>
            </ul>
          </div>
          <div className="content ">
            <h3 id="default-wizard-h-0" tabIndex={-1} className="title current">Step 1</h3>
            {tab === "STEP1" && !isSelfCreated && <ClinicRegistration1 tab={tab} setTab={setTab} source={source || 'Clinic'} /> }
            {tab === "STEP2" && <CLiniRegistration2 tab={tab} source={source || 'Clinic' } /> }
            {tab === "STEP3" && <DoctorRegistration tab={tab} source={source || 'Clinic' } /> }
            {tab === "FINAL" && <DealRegistration source={source || 'Clinic' } /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicRegistartion