import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { DAYS } from "../../../constants/constant";

const DepartmentRegistration = ({tab}) => {
    const { register, handleSubmit,  formState: { errors } } = useForm({ onChange: true })
    const [timingNo, setTimingNo] = useState(1);

    useEffect(() => {
        setTimingNo(1)
    }, [tab])
    
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className='row'>
                <div className="row">
                    <span className='mb-3 ' >Departments </span>
                    <div className="col-md-6 mb-3">
                        <label >Name of Department</label>
                        <div className="input-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Cardio"

                            />
                        </div>
                        {errors?.doctor && <div className="text-danger ">{errors?.doctor?.firstName.message}</div>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className=''>Room No.</label>
                        <div className="input-group">
                            <input type="number"

                                className="form-control"
                                placeholder="Eg: 45"

                            />
                        </div>
                    </div>
                </div>
                {Array(timingNo).fill(0).map((v, i) =>
                (i = i + 1, <div className="row">
                    <div className="col-md-12 mb-3">
                        <label className=''>Timming</label>
                        <div className='row' style={{ paddingRight: 0 }}>
                            <div className="col">
                                <label htmlFor="">Days</label>
                                <select name="days" className='form-control' id="" >
                                    {DAYS.map((day) => <option value={day.value} >{day.day}</option>)}
                                </select>
                            </div>
                            <div className='col '>
                                <label htmlFor="#open">Open</label>
                                <input type="time"
                                    id='open'
                                    onFocusCapture={(e) => console.log('>>>>>>>', e)}
                                    className="form-control"
                                    placeholder="morning 10am to 12pm"
                                    {...register('timing', {
                                        required: 'Timing is required'
                                    })}
                                />
                            </div>
                            <div className='col '>
                                <label className=''>Close</label>
                                <input type="time"
                                    className="form-control"
                                    placeholder="morning 10am to 12pm"
                                    {...register('timing', {
                                        required: 'Timing is required'
                                    })}
                                />
                            </div>


                            <div className='col '>
                                {timingNo === i && i < 7 && <button type='button' style={{ minWidth: "60px" }} className='btn btn-1 btn-primary mt-4 p-1 px-1'
                                    onClick={() => setTimingNo((old) => {
                                        if (old < 7) old = old + 1
                                        return old
                                    })}> Add</button>}

                                <button type='button' style={{ minWidth: "60px" }} className='btn btn-1 btn-light mx-2 mt-4 p-1 px-1'
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
        </form>
    )
}
export default DepartmentRegistration;