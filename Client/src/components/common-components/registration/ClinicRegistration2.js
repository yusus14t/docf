import { Controller, useForm } from 'react-hook-form';
import Select from "react-select"
import ImgUpload from '../Imgupload';
import { useEffect, useState } from 'react';
import { axiosInstance, getAuthHeader } from '../../../constants/utils';
import useToasty from '../../../hooks/toasty';

const CLiniRegistration2 = ({ source, tab,setTab, organization = {} }) => {
    const { register, handleSubmit, control, formState: { errors } } = useForm({ onChange: true })
    const [selectedFile, setSelectedFile] = useState(null);
    const [specializations, setSpecializations] = useState([])
    const [timingNo, setTimingNo] = useState(0);
    const toasty = useToasty();
    const DAYS = [
        { id: 0, value: 'MON', day: 'Monday' },
        { id: 1, value: 'TUE', day: 'Tuesday' },
        { id: 2, value: 'WED', day: 'Wednesday' },
        { id: 3, value: 'THU', day: 'Thursday' },
        { id: 4, value: 'FRI', day: 'Friday' },
        { id: 5, value: 'SAT', day: 'Saturday' },
        { id: 6, value: 'SUN', day: 'Sunday' },
    ]

    useEffect(() => {
        setTimingNo(1)
        getAllSpecialization()
    }, [tab])

    const getAllSpecialization = async () => {
        try{
            let {data} = await axiosInstance.get('/common/specializations')
            setSpecializations(data?.specializations)
        } catch(error){
            console.error(error)
        }
    }

    const submit = async ( values ) => {
        try{
            values['_id'] = organization?._id || JSON.parse(localStorage.getItem('RID'))
            values['tab'] = tab

            let formData = new FormData()
            formData.append('data', JSON.stringify(values))
            formData.append('image', selectedFile )

            let header = getAuthHeader()
            header.headers['Content-Type'] = 'multipart/form-data'            
            let { data } = await axiosInstance.post('/common/organization-details', formData, header)

            toasty.success(data?.message)
            setTab('STEP3')
        } catch(error){ console.error(error) }
    }
    return (
        <form onSubmit={handleSubmit(submit)} >
            <div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 ">< ImgUpload source={'clinic'} file={(image) => {setSelectedFile(image)}} /></div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label >Specialization of Clininc</label>
                        <div className="">
                            <Controller
                                control={control}
                                name="specialization"
                                rules={{ required: 'Query must be select' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti={true}
                                        options={specializations}
                                        getOptionLabel={({ name }) => name}
                                        getOptionValue={({id}) => id}
                                        className={`form-control p-0 ${errors.specialization ? 'border-danger' : ''}`}
                                        classNamePrefix="select"
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label >Consultant Fee</label>
                        <div className="input-group">
                            <input 
                                {...register('fee', {
                                    required: 'Consultation fee is required'
                                })}
                                type="number"
                                className={`form-control ${errors.fee ? 'border-danger' : ''}`}
                                placeholder="Ex: 200"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className=''>Address</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors.address ? 'border-danger' : ''}`}
                                    placeholder="Enter Full Address"
                                    {...register('address', {
                                        required: 'Address is required'
                                    })}
                                />
                            </div>
                        </div>
                        {/* <div className="col-md-3 mb-3">
                            <label className=''>Pincode</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors.pincode ? 'border-danger' : ''}`}
                                    placeholder="Eg: 202001"
                                    {...register('pincode', {
                                        required: 'Clinic address is required'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label className=''>City</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors.city ? 'border-danger' : ''}`}
                                    placeholder="Eg: ALigarh"
                                    {...register('city', {
                                        required: 'Clinic address is required'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label className=''>State</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors.state ? 'border-danger' : ''}`}
                                    placeholder="Eg: Uttar pardesh"
                                    {...register('state', {
                                        required: 'Clinic address is required'
                                    })}
                                />
                            </div>
                        </div> */}
                    </div>
                    { source === 'Clinic' && <div className="col-md-6 mb-3">
                        <div className="row input-group mt-4">
                            <div className="col"><label >Parking</label></div>
                            <label class="ms-switch">
                            <Controller
                                control={control}
                                name="specialization"
                                rules={{ required: 'Query must be select' }}
                                render={({ field }) => (
                                    <input type="checkbox"
                                        {...register('parking')}
                                    />
                                )} />
                                    <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                    </div>}
                    { source === 'Hospital' && <div className="col-md-12 mb-3">
                        <div className="row input-group mt-4">
                            <div className="col"><label >Parking</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Ambulance</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Waiting</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Fooding for Patients</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                        <div className="row input-group mt-4">
                            <div className="col"><label >ECHO</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Care Taker</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >ENDOSCOPY</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>

                            <div className="col"><label >NICU</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                        <div className="row input-group mt-4">
                            <div className="col"><label >CATHLAB</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Operation Theatre</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Veltilator</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Ultrasound</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                        <div className="row input-group mt-4">
                            <div className="col"><label >ECG Services</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Pharmacy</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Room Facility</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >MRI</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                        <div className="row input-group mt-4">
                            <div className="col"><label >CT Scan</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Blood Bank</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >ICU</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                            <div className="col"><label >Oxygen</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                        <div className="row input-group mt-4">
                        </div>
                        {errors?.parking && <div className="text-danger ">{errors?.parking.message}</div>}
                    </div>}

                    {/* {Array(timingNo).fill(0).map((v, i) =>
                    (<div className="row">
                        <div className="col-md-12 mb-3">
                            <label className=''>Timming</label>
                            <div className='row' style={{ paddingRight: 0 }}>
                                <div className="col">
                                    <label htmlFor=""></label>
                                    <select name="days" className='form-control' >
                                        {DAYS.map((day) => <option value={day.value} >{day.day}</option>)}
                                    </select>
                                </div>
                                <div className="col-1 text-end"><p style={{ marginTop: "25px" }}>Morning</p></div>
                                <div className='col '>

                                    <label htmlFor="#open">Open</label>
                                    <input type="time"
                                        id='open'
                                        {...register(`timing[${i}].morning.open`)}
                                        className={`form-control`}
                                        placeholder="morning 10am to 12pm"

                                    />
                                </div>
                                <div className='col ms-0'>
                                    <label className=''>Close</label>
                                    <input type="time"
                                        {...register(`timing[${i}].morning.close`)}
                                        className="form-control"
                                        placeholder="morning 10am to 12pm"
                                    />
                                </div>


                                <div className="col-1 text-end"><p style={{ marginTop: "25px" }}>Evening</p></div>
                                <div className='col '>
                                    <label htmlFor="#open">Open</label>
                                    <input type="time"
                                        id='open'
                                        {...register(`timing[${i}].evening.open`)}

                                        className="form-control"
                                        placeholder="morning 10am to 12pm"

                                    />
                                </div>
                                <div className='col '>
                                    <label className=''>Close</label>
                                    <input type="time"
                                        {...register(`timing[${i}].evening.close`)}

                                        className="form-control"
                                        placeholder="morning 10am to 12pm"

                                    />
                                </div>
                    
                                <div className='col '>
                                    {i < 7 && <button type='button' style={{ minWidth: "60px" }} className='btn-1 btn btn-primary mt-4 p-1 px-1'
                                        onClick={() => setTimingNo((old) => {
                                            if (old < 7) old = old + 1
                                            return old
                                        })}> Add</button>}

                                    { i > 0 && <button type='button' style={{ minWidth: "60px" }} className='btn-1 btn  btn-light mx-2 mt-4 p-1 px-1'
                                        onClick={() => setTimingNo((old) => {
                                            if (old < 7) old = old - 1
                                            return old
                                        })}>x</button>}
                                </div>


                            </div>

                            {errors?.timing && <div className="text-danger ">{errors?.timing.message}</div>}

                        </div>
                    </div>))} */}
                </div>
              <button type="submit" className="btn btn-primary shadow-none mx-2" >Save</button>
            </div>
        </form>
    )
}
export default CLiniRegistration2;