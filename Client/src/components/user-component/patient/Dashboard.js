import React, { useEffect, useState } from 'react';

import Profie from './Profie';
import Cardlist from './Cardlist';
import Appointments from './Appointments';
import Help from './Help';

const Dashbaord = () => {
  const [tab, setTab] = useState("STEP1");   
   
    

    return (
      <div className="">
        <div className="ms-panel-body content-height">
          <div
            className="ms-form-wizard style1-wizard wizard form-content"
            role="application"
          >
            <div className="steps  ">
              <ul role="tablist">
                {
                  <li
                    style={{ marginTop: "15px" }}
                    onClick={() => {
                      setTab("STEP1");
                    }}
                    role="tab"
                    className={`${
                      tab === "STEP1" ? "current" : "disabled"
                    } cursor-pointer`}
                    aria-disabled="false"
                    aria-selected="False"
                  >
                    <span className="current-info audible tabName ">
                      Profile
                    </span>
                  </li>
                }
                <li
                  style={{ marginTop: "15px" }}
                  onClick={() => {
                    setTab("STEP2");
                  }}
                  role="tab"
                  className={`${
                    tab === "STEP2" ? "current" : "disabled"
                  } cursor-pointer`}
                  aria-disabled="true"
                >
                  
                  <span className="tabName">Appointments</span>{" "}
                </li>
                <li
                  style={{ marginTop: "15px" }}
                  onClick={() => {
                    setTab("STEP3");
                  }}
                  role="tab"
                  className={`${
                    tab === "STEP3" ? "current" : "disabled"
                  } cursor-pointer`}
                  aria-disabled="true"
                >
                  <span className="tabName">Card List</span>
                </li>
              </ul>
            </div>
            <div className="content ">
              {tab === "STEP1" && <Profie tab={tab} />}
              {tab === "STEP2" && <Appointments tab={tab} />}
              {tab === "STEP2" && <Cardlist tab={tab} />}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Dashbaord;