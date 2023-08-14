import { Controller, useForm } from 'react-hook-form';
import Select from "react-select"
import ImgUpload from '../Imgupload';
import { useEffect, useState } from 'react';
import { axiosInstance, getAuthHeader } from '../../../constants/utils';
import useToasty from '../../../hooks/toasty';
import { DAYS, SERVICES } from '../../../constants/constant'

const CLiniRegistration2 = ({ source, tab,setTab, organization = {} }) => {
    const { register, handleSubmit, control, formState: { errors }, setError, getValues, setValue, } = useForm({ onChange: true })
    const [selectedFile, setSelectedFile] = useState(null);
    const [specializations, setSpecializations] = useState([])
    const [ timing, setTiming ] = useState([]);
    const [ days, setDays ] = useState(DAYS)

    const toasty = useToasty();

    useEffect(() => {
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
            values['timing'] =  timing

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

    const handleTime = () => {
        let time = getValues('timing')

        if( !time?.day ) setError('timing.day', { message: 'Day is required'})
        if( !time?.open ) setError('timing.open', { message: 'Open time is required'})
        if( !time?.close ) setError('timing.close', { message: 'Close time is required'})

        let day = timing.find( t => t.day === time.day )
        if( !day && time?.day && time?.open && time?.close ){
            setTiming([ ...timing, JSON.parse(JSON.stringify(time)) ])
            setDays( old => old.filter( d => d.value !== time.day ))
            setValue('timing', { day: '', open: '', close: ''})
        }
    }

    const handleDelete = (time) => {
        setTiming( old => old.filter( t => t.day !== time.day ))
        setDays( old => ([ DAYS.find( d => d.value === time.day ), ...old].sort((a, b) => a.value - b.value )))
    }  


    return (
        <form onSubmit={handleSubmit(submit)} >
            <div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 ">< ImgUpload source={'clinic'} file={(image) => {setSelectedFile(image)}} /></div>
                </div>
                <div className="row mt-2">
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
                    <div className="col-md-6 mb-3">
                        <label >Services</label>
                        <div className="">
                            <Controller
                                control={control}
                                name="services"
                                rules={{ required: 'Query must be select' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti={true}
                                        options={SERVICES}
                                        getOptionLabel={({ name }) => name}
                                        getOptionValue={({id}) => id}
                                        className={`form-control p-0 ${errors.services ? 'border-danger' : ''}`}
                                        classNamePrefix="select"
                                    />
                                )}
                            />
                        </div>
                    </div>
                    {days?.length > 0 && <div className="row px-2">
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
                    <div className="px-2">
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
                </div>
              <button type="submit" className="btn btn-primary shadow-none mx-2" >Save</button>
            </div>
        </form>
    )
}
export default CLiniRegistration2;