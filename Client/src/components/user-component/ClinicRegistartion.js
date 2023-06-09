import React, {  useEffect, useState } from 'react';
import DoctorRegistration from '../common-components/registration/DoctorRegistration';
import CLiniRegistration2 from '../common-components/registration/ClinicRegistration2';
import DealRegistration from '../common-components/registration/DealRegistration';
import useToasty from '../../hooks/toasty';
import { useForm } from 'react-hook-form';
import { NumberFormat, axiosInstance, getAuthHeader } from '../../constants/utils';

const ClinicRegistartion = ({isSelfCreated, source}) => {
  const [tab, setTab] = useState(isSelfCreated ? "STEP2" : 'STEP1') 
  const { register, handleSubmit, formState: { errors }, reset, } = useForm({ onChange: true })
  const [organization, setOrganization] = useState({})
  const toasty = useToasty()
  const RID = JSON.parse(localStorage.getItem('RID')) || null

  useEffect(() => {
    if( RID )  getOrganization()
  }, [])

  const getOrganization = async () => {
    try{
        let { data } = await axiosInstance.get('/common/organization', { params: { RID }, ...getAuthHeader()})
        setOrganization(data?.organization)

        let tabData = data?.organization?.tab 
        if( tabData?.step === 'STEP1' && tabData?.isComplete ) setTab('STEP2')
        else if( tabData?.step === 'STEP2' && tabData?.isComplete ) setTab('STEP3')
        else setTab(tabData?.step || 'FINAL')

    } catch(error) { 
        console.error(error)
        toasty.error(error?.message)
    }
  }
   
  const submit = async (formData) => {
      try {
          formData['tab'] = tab
          let {data}  = await axiosInstance.post('/common/create-organization', formData )
          if(data?.organization){
              reset({})
              setOrganization(data?.organization)
              localStorage.setItem('RID', JSON.stringify(data?.organization?._id ))
              setTab('STEP2')
              toasty.success(data?.message)
          }

      } catch (error) { 
          toasty.error(error?.message)
          console.log(error)
      }
  }

  return (
    <div>
      <div className="ms-panel-body content-height">
        <div className="ms-form-wizard style1-wizard wizard form-content" role="application">
          <div className="steps  ">
            <ul role="tablist">
              { !isSelfCreated && <li style={{marginTop:"15px"}} role="tab" className={`${tab === "STEP1" ? "current" : "disabled"} cursor-pointer`} aria-disabled="false" aria-selected="False"><span className="current-info audible tabName ">Step 1 </span></li>}
              <li style={{marginTop:"15px"}} role="tab" className={`${tab === "STEP2" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"> <span className='tabName'>Step 2</span> </li>
              <li style={{marginTop:"15px"}} role="tab" className={`${tab === "STEP3" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 3</span></li>
              <li style={{marginTop:"15px"}} role="tab" className={`${tab === "FINAL" ? "current" : "disabled"} cursor-pointer`} aria-disabled="true"><span className='tabName'>Step 4</span></li>
            </ul>
          </div>
          <div className="content ">
            <h3 id="default-wizard-h-0" tabIndex={-1} className="title current">Step 1</h3>
            {tab === "STEP1" && !isSelfCreated && 
              <form onSubmit={handleSubmit(submit)}>
                <div className="ms-wizard-step body current" id="default-wizard-p-0" role="tabpanel" aria-labelledby="default-wizard-h-0" aria-hidden="false">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className=''>{source} Name</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors?.name ? 'border-danger' : ''}`}
                                    placeholder={`Enter Name`}
                                    {...register('name', {
                                        required: 'Name is required'
                                    })}
                                />
                            </div>
    
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className=''>{source} Registration No.</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors?.registration ? 'border-danger' : ''}`}
                                    placeholder="Enter registration number"
                                    {...register('registration', {
                                        required: 'Registration number is required'
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className=''>Phone Number</label>
                            <div className="input-group">
                                <input type="Number"
                                    className={`form-control ${errors?.phone ? 'border-danger' : ''}`}
                                    placeholder="Enter Phone Number"
                                    onInput={(e) => NumberFormat(e)}
                                    {...register('phone', {
                                        required: 'Phone number is required'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className=''>Email</label>
                            <div className="input-group">
                                <input type="email"
                                    className={`form-control ${errors?.email ? 'border-danger' : ''}`}
                                    placeholder="Enter Email"
                                    {...register('email', {
                                        required: 'Email is required'
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary btn-md' type='submit'>Save</button>
            </form>
            }
            {tab === "STEP2" && <CLiniRegistration2 tab={tab} setTab={setTab} source={source || 'Clinic' } organization={organization} /> }
            {tab === "STEP3" && <DoctorRegistration tab={tab} setTab={setTab} source={source || 'Clinic' } organization={organization} /> }
            {tab === "FINAL" && <DealRegistration tab={tab} source={source || 'Clinic' } setTab={setTab} organization={organization} /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicRegistartion