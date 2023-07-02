import React, { useState } from 'react';

import Profie from './Profie';
import Cardlist from './Cardlist';
import Appointments from './Appointments';

const Dashbaord = () => {
  const [tab, setTab] = useState("PROFILE");   
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
                      setTab("PROFILE");
                    }}
                    role="tab"
                    className={`${
                      tab === "PROFILE" ? "current" : "disabled"
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
                    setTab("APPOINTMENT");
                  }}
                  role="tab"
                  className={`${
                    tab === "APPOINTMENT" ? "current" : "disabled"
                  } cursor-pointer`}
                  aria-disabled="true"
                >
                  
                  <span className="tabName">Appointments</span>{" "}
                </li>
                <li
                  style={{ marginTop: "15px" }}
                  onClick={() => {
                    setTab("CARDS");
                  }}
                  role="tab"
                  className={`${
                    tab === "CARDS" ? "current" : "disabled"
                  } cursor-pointer`}
                  aria-disabled="true"
                >
                  <span className="tabName">Cards</span>
                </li>
              </ul>
            </div>
            <div className="content ">
              {tab === "PROFILE" && <Profie tab={tab} />}
              {tab === "APPOINTMENT" && <Appointments tab={tab} />}
              {tab === "CARDS" && <Cardlist tab={tab} />}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Dashbaord;