import { useEffect, useState } from "react";
import {  useForm } from "react-hook-form"
import { DAYS } from "../../../constants/constant";
import { axiosInstance, getAuthHeader } from "../../../constants/utils";
import useToasty from '../../../hooks/toasty';

const DepartmentRegistration = ({tab, setTab}) => {
    const { register, handleSubmit,  formState: { errors, }, setError, getValues, reset } = useForm({ onChange: true })
    const [timingNo, setTimingNo] = useState(1);
    const [departments, setDepartments] = useState([]);
    const [ timing, setTiming ] = useState([]);
    const [ days, setDays ] = useState(DAYS)
    const organizationId = JSON.parse(localStorage.getItem('RID'))
    const toasty = useToasty();

    useEffect(() => {
        getDepartments()
    }, [tab])

    const getDepartments = async () => {
        try {
            let { data } = await axiosInstance.get('/doctor/departments', { params: { organizationId }, ...getAuthHeader() })

            setDepartments(data?.departments)
        } catch(error) { console.error(error) }
    }

    const handleTime = () => {
        let time = getValues('timing')

        if( !time?.day ) setError('timing.day', { message: 'Day is required'})
        if( !time?.open ) setError('timing.open', { message: 'Open time is required'})
        if( !time?.close ) setError('timing.close', { message: 'Close time is required'})

        let day = timing.find( t => t.day === time.day )
        if( !day && time?.day && time?.open && time?.close ){
            setTiming([ ...timing, JSON.parse(JSON.stringify(time)) ])
            setDays( old => old.filter( d => d.value !== time.day ))
            reset({ timing: { day: '', open: '', close: ''}})
        }
    }

    const handleDelete = (time) => {
        setTiming( old => old.filter( t => t.day !== time.day ))
        setDays( old => ([ DAYS.find( d => d.value === time.day ), ...old].sort((a, b) => a.value - b.value )))
    }   

    const submit = async (fromData) => {
        try{    
            fromData['timing'] = timing
            fromData['organizationId'] = organizationId
            let { data } = await axiosInstance.post('/doctor/create-department', fromData )
            setTiming([])
            setDays(DAYS)
            reset({ name: '', room: '' })
            getDepartments()
            toasty.success(data?.message)
        } catch(error){ console.error(error) }
    }

    const deleteDepartment = async ( _id ) => {
        try {
            let { data } = await axiosInstance.post('/doctor/delete-department', { _id })
            setDepartments( old => old.filter( department => String(department._id) !== String(_id)) )
            toasty.success(data?.message)
        } catch(error) { console.error(error) }
    }

    
    return (
        <>
            <div className="row">
                { departments.length > 0 && departments.map( (department, i) => <div className="col-6" key={i}>
                    <div className="border-primary" onClick={() => deleteDepartment(department._id)}>Department{`--- ${i+1} =====>>>>>> `} {department.name}-{ department.room }</div>
                </div>)}
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div className='row'>
                    <div className="col-md-6 mb-3">
                        <label >Name of Department</label>
                        <div className="input-group">
                            <input type="text"
                                className={`form-control ${errors?.department ? 'border-danger' : ''}`} 
                                placeholder="Cardio"
                                {...register('name', {
                                    required: 'Department is required'
                                })}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className=''>Room No.</label>
                        <div className="input-group">
                            <input type="number"
                                    className={`form-control ${errors?.room ? 'border-danger' : ''}`} 
                                placeholder="Eg: 45"
                                {...register('room', {
                                    required: 'Room is required'
                                })}
                            />
                        </div>
                    </div>
                    
                    { days?.length > 0 && <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className=''>Timming</label>
                            <div className='row' style={{ paddingRight: 0 }}>
                                <div className="col">
                                    <label htmlFor="">Days</label>
                                    <select name="days" 
                                        className={`form-control ${errors?.timing?.day ? 'border-danger' : ''}`} 
                                        {...register('timing.day')} >
                                        {days.map((day) => <option value={day.value} >{day.day}</option>)}
                                    </select>
                                </div>
                                <div className='col '>
                                    <label htmlFor="#open">Open</label>
                                    <input type="time"
                                        id='open'
                                        className={`form-control ${errors?.timing?.open ? 'border-danger' : ''}`} 
                                        placeholder="morning 10am to 12pm"
                                        {...register('timing.open')}
                                    />
                                </div>
                                <div className='col '>
                                    <label className=''>Close</label>
                                    <input type="time"
                                        className={`form-control ${errors?.timing?.close ? 'border-danger' : ''}`} 
                                        placeholder="morning 10am to 12pm"
                                        {...register('timing.close')}
                                    />
                                </div>
                                <div className='col-1'>
                                    <button type='button' style={{ minWidth: "60px" }} className='btn btn-1 btn-primary mt-4 p-1 px-1 shadow-none' onClick={() => handleTime()}> Add</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    <div className="alert alert-info alert-outline p-2 mb-2 mt-4">
                        <div className="d-flex justify-content-around">
                            <div>Day</div>
                            <div>Open</div>
                            <div>Close</div>
                            <div>Action</div>
                        </div>
                    </div>
                    { timing?.length > 0 && 
                        timing.map( time => <div className="alert alert-info p-2">
                        <div className="d-flex justify-content-around">
                            <div>{ time.day }</div>
                            <div>{ time.open }</div>
                            <div>{ time.close }</div>
                            <div><button className="ms-btn-icon btn-primary" onClick={() =>  handleDelete(time)}>D</button></div>
                        </div>
                    </div>)}
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn1 btn-primary ">Save</button>
                    <button type="submit" className="btn btn1 btn-primary mx-3" onClick={() => setTab('STEP4')} disabled={!Boolean(departments?.length)}>Next</button>
                </div>
            </form>
        </>
    )
}
export default DepartmentRegistration;