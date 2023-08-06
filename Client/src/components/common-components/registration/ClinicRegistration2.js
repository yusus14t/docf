import { Controller, useForm } from 'react-hook-form';
import Select from "react-select"
import ImgUpload from '../Imgupload';
import { useEffect, useState } from 'react';
import { axiosInstance, getAuthHeader } from '../../../constants/utils';
import useToasty from '../../../hooks/toasty';
import { SERVICES } from '../../../constants/constant'

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
                </div>
              <button type="submit" className="btn btn-primary shadow-none mx-2" >Save</button>
            </div>
        </form>
    )
}
export default CLiniRegistration2;