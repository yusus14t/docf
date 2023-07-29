import { useForm } from 'react-hook-form';
import { NumberFormat, axiosInstance, getAuthHeader } from '../../../constants/utils';
import ImgUpload from '../Imgupload';
import  useToasty  from '../../../hooks/toasty';
import { useState } from 'react';

const Profile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ onchange: true })
    const [ selectedFile, setSelectedFile ] = useState({})
    const toasty =  useToasty()

    const submit = async (values) => {

        let formData = new FormData()
        formData.append('data', JSON.stringify(values))
        formData.append('image', selectedFile )

        let header = getAuthHeader()
        header.headers['Content-Type'] = 'multipart/form-data'            
        let { data } = await axiosInstance.post('/hospital/edit-profile', formData, header)
        console.log(data)

        toasty.success(data?.message)
    }
    return(
        <div className="ms-panel-body content-height">
            <div className="content ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 ">< ImgUpload source={'clinic'} file={(image) => { setSelectedFile(image) }} /></div>
                </div>
                <form onSubmit={handleSubmit(submit)} >
                    <div className="row mt-3">
                        <div className="col-md-6 mb-3">
                            <label className=''>Name</label>
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
                    </div>
                    <button className='btn btn-primary btn-md' type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}
export default Profile;