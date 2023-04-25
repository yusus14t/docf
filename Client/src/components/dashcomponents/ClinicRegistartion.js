import React, { useState } from 'react'
const ClinicRegistartion = () => {
  const [tab, setTab] = useState("BASIC")
  return (
    <div>
        <div className="ms-panel-body">
        <form className="ms-form-wizard style1-wizard wizard clearfix" id="default-wizard" role="application">
          <div className="steps clearfix reg-form">
            <ul role="tablist">
              <li onClick={()=>setTab("BASIC")} role="tab" className={`${tab==="BASIC" ? "current": "disabled"} cursor-pointer`} aria-disabled="false" aria-selected="False"><span className="current-info audible tabName ">Step 1 </span></li>
              <li onClick={()=>setTab("PAYMENT")} role="tab" className={`${tab==="PAYMENT" ? "current": "disabled"} cursor-pointer`} aria-disabled="true"> <span className='tabName'>Step 2</span> </li>
              <li onClick={()=>setTab("ADD-DOCTORS")} role="tab" className={`${tab==="ADD-DOCTORS" ? "current": "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 3</span></li>
              <li onClick={()=>setTab("FINAL")} role="tab" className={`${tab==="FINAL" ? "current": "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 4</span></li>
              </ul>
              </div>
              <div className="content clearfix">
            <h3 id="default-wizard-h-0" tabIndex={-1} className="title current">Step 1</h3>
             { tab==="BASIC" && <div  className="ms-wizard-step body current" id="default-wizard-p-0" role="tabpanel" aria-labelledby="default-wizard-h-0" aria-hidden="false">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Clinic Name</label>
                  <div className="input-group">
                    <input type="text" className="form-control reg-form" placeholder="Ex: Madni Clinic"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Clinic Registration No.</label>
                  <div className="input-group">
                    <input type="text" className="form-control reg-form" placeholder="Ex: GAN200061" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Mobile Number</label>
                  <div className="input-group">
                    <input type="Number" className="form-control reg-form" placeholder="Mobile Number"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Email</label>
                  <div className="input-group">
                    <input type="email" className="form-control reg-form" placeholder="example@gmail.com"  />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Password</label>
                  <div className="input-group">
                    <input type="password" className="form-control reg-form" placeholder="create password" />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Confirm Password</label>
                  <div className="input-group">
                    <input type="password" className="form-control reg-form" placeholder="confirm password" />
                  </div>
                </div>
              </div>
             </div> }
             {tab==="PAYMENT" && <div>
              <form className="ms-form-wizard style1-wizard wizard clearfix" id="default-wizard" role="application">
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Specialization</label>
                  <div className="input-group">
                    <input type="text" className="form-control " placeholder="Ex: Neurologist"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Number of Doctors</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="example@gmail.com" defaultValue={1}  />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Consultant Fee</label>
                  <div className="input-group">
                    <input type="text" className="form-control " placeholder="Ex: 200"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Timming</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="morning 10am to 12pm" />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Off days</label>
                  <div className="input-group">
                    <input type="text" className="form-control " placeholder="Ex: Sunday"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Clinic Address</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Ex: Hamdard nagar 'A' jamalpur Aligarh "  />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Parking</label>
                  <div className="input-group">
                    <input type="text" className="form-control " placeholder="Available/Unavailable"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Clinic Address</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Ex: Hamdard nagar 'A' jamalpur Aligarh "  />
                  </div>
                </div>
                </div>
              </form>
              </div>}
             {tab==="ADD-DOCTORS" && <div>
              <form className="ms-form-wizard style1-wizard wizard clearfix" id="default-wizard" role="application">
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >First Name</label>
                  <div className="input-group">
                    <input type="text" className="form-control " placeholder="JOHN"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Last Name</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="DEE"  />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Email ID</label>
                  <div className="input-group">
                    <input type="email" className="form-control " placeholder="Eg. example@gmail.com "  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Mobile Number</label>
                  <div className="input-group">
                    <input type="number" className="form-control" placeholder="2222555558" />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Qualifications</label>
                  <div className="input-group">
                    <textarea type="text" className="form-control " placeholder="Eg.: MBBS from RUSSIA"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Specialization</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Eg: Neurologist"  />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                  <label >Experiance</label>
                  <div className="input-group">
                    <input type="text" className="form-control " placeholder="Eg: 10 Years"  />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='reg-form'>Blank</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Ex: Hamdard nagar 'A' jamalpur Aligarh "  />
                  </div>
                </div>
                </div>
              </form>
              </div>}
             {tab==="FINAL" && <div>FINAL</div>}


            
           
          </div>
          <div className="actions clearfix">
            <ul role="menu" aria-label="Pagination">
              <li className="disabled" aria-disabled="true"><a href="#previous" role="menuitem">Back</a></li>
              <li aria-hidden="false" aria-disabled="false"><a href="#next" role="menuitem">Next</a></li>
              <li aria-hidden="true" style={{display: 'none'}}><a href="#finish" role="menuitem">Submit</a></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClinicRegistartion