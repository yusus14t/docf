import { Controller, useForm } from 'react-hook-form';
import Select from "react-select"
import ImgUpload from '../Imgupload';
import { useEffect, useState } from 'react';

const CLiniRegistration2 = ({ tab }) => {
    const { register, handleSubmit, control, formState: { errors } } = useForm({ onChange: true })

    const [timingNo, setTimingNo] = useState(1);
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
    }, [tab])
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 ">< ImgUpload source={'clinic'} /></div>
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
                                        isMulti={false}
                                        options={[{ label: 'Other', value: 'other' }]}
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
                            <input type="number"
                                className={`form-control ${errors.fee ? 'border-danger' : ''}`}
                                placeholder="Ex: 200"
                                {...register('fee', {
                                    required: 'Consultation fee is required'
                                })}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className=''>Landmark & Street</label>
                            <div className="input-group">
                                <input type="text"
                                    className={`form-control ${errors.address ? 'border-danger' : ''}`}
                                    placeholder="Eg:Near Abdullah women's college "
                                    {...register('address', {
                                        required: 'Clinic address is required'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
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
                        <div className="col-md-4 mb-3">
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
                    </div>
                    <div className="col-md-4 mb-3">
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
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="row input-group mt-4">

                            <div className="col"><label >Parking</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                    </div>

                    {Array(timingNo).fill(0).map((v, i) =>
                    (i = i + 1, <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className=''>Timming</label>
                            <div className='row' style={{ paddingRight: 0 }}>
                                <div className="col">
                                    <label htmlFor="">Days</label>
                                    <select name="days" className='form-control' >
                                        {DAYS.map((day) => <option value={day.value} >{day.day}</option>)}
                                    </select>
                                </div>
                                <div className="col-1 text-end"><p style={{ marginTop: "25px" }}>Morning</p></div>
                                <div className='col '>

                                    <label htmlFor="#open">Open</label>
                                    <input type="time"
                                        id='open'
                                        className={`form-control`}
                                        placeholder="morning 10am to 12pm"

                                    />
                                </div>
                                <div className='col ms-0'>
                                    <label className=''>Close</label>
                                    <input type="time"
                                        className="form-control"
                                        placeholder="morning 10am to 12pm"
                                    />
                                </div>

                                {/* evening */}

                                <div className="col-1 text-end"><p style={{ marginTop: "25px" }}>Evening</p></div>
                                <div className='col '>
                                    <label htmlFor="#open">Open</label>
                                    <input type="time"
                                        id='open'
                                        onFocusCapture={(e) => console.log('>>>>>>>', e)}
                                        className="form-control"
                                        placeholder="morning 10am to 12pm"

                                    />
                                </div>
                                <div className='col '>
                                    <label className=''>Close</label>
                                    <input type="time"
                                        className="form-control"
                                        placeholder="morning 10am to 12pm"

                                    />
                                </div>
                                <div className='col '>
                                    {timingNo === i && i < 7 && <button type='button' style={{ minWidth: "60px" }} className='btn-1 btn btn-primary mt-4 p-1 px-1'
                                        onClick={() => setTimingNo((old) => {
                                            if (old < 7) old = old + 1
                                            return old
                                        })}> Add</button>}

                                    <button type='button' style={{ minWidth: "60px" }} className='btn-1 btn  btn-light mx-2 mt-4 p-1 px-1'
                                        onClick={() => setTimingNo((old) => {
                                            if (old < 7) old = old - 1
                                            return old
                                        })}>x</button>
                                </div>


                            </div>

                            {errors?.timing && <div className="text-danger ">{errors?.timing.message}</div>}

                        </div>
                    </div>))}
                </div>
            </div>
        </form>
    )
}
export default CLiniRegistration2;