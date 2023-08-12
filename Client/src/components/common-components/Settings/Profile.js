import { useForm } from 'react-hook-form';
import { NumberFormat, axiosInstance, getAuthHeader, updateUser } from '../../../constants/utils';
import ImgUpload from '../Imgupload';
import  useToasty  from '../../../hooks/toasty';
import { useEffect, useState } from 'react';

const Profile = ({ source, setIsOpen, refresh = () => {} }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ onchange: true })
    const [ selectedFile, setSelectedFile ] = useState({})
    const toasty =  useToasty()
    const userInfo = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        let obj = {}
        if( ['HL', 'CL', 'DP'].includes(userInfo.userType)){
            obj = {
                name: userInfo.organizationId.name,
                phone: userInfo.phone,
                email: userInfo.organizationId.email,
                fee: userInfo.organizationId.fee,
                address: userInfo.organizationId.address,
            }
        } else { obj = { ...userInfo }}

        reset(obj)
    }, [])

    const submit = async (values) => {

        let formData = new FormData()
        formData.append('data', JSON.stringify(values))
        formData.append('image', selectedFile )

        let header = getAuthHeader()
        header.headers['Content-Type'] = 'multipart/form-data'  
        
        
        let response = null
        if( source === 'addMR' ){
            response = await axiosInstance.post('/super-admin/mr', formData, header) 
            refresh()
        } else {
            response = await axiosInstance.post('/hospital/edit-profile', formData, header)
        }

        await updateUser()
        toasty.success(response?.data?.message)
        setIsOpen(false)
    }
    return(
        <div className={`ms-panel-body ${ source === 'addMR' ? 'p-0' : 'content-height' }`}>
            <div className="content ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 ">< ImgUpload source={'clinic'} file={(image) => { setSelectedFile(image) }} /></div>
                </div>
                <form onSubmit={handleSubmit(submit)} >
                    <div className="row my-3 ">
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
                                <input type="text"
                                    className={`form-control ${errors?.phone ? 'border-danger' : ''}`}
                                    placeholder="Enter Phone Number"
                                    onInput={(e) => NumberFormat(e)}
                                    maxLength={10}
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
                        { source !== 'addMR' && ['HL', 'CL', 'DP' ].includes(userInfo.userType) && <div className="col-md-6 mb-3">
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
                        </div>}
                        {source === 'addMR' &&
                            <>
                                <div className="col-md-6 mb-3">
                                    <label >Age</label>
                                    <div className="input-group">
                                        <input
                                            {...register('age', {
                                                required: 'Age is required'
                                            })}
                                            type="number"
                                            className={`form-control ${errors.age ? 'border-danger' : ''}`}
                                            placeholder="Enter Age"
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6 mb-3'>
                                    <label >Gender</label>
                                    <select style={{ padding: '.475rem .75rem' }} className={`form-control mb-2 col-2 w-100  ${errors?.gender ? 'border-danger' : ''}`} {...register('gender', { required: 'Gender is required' })}>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </div>
                            </>
                        }
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
                    { source === 'addMR' && <button className='btn btn-light btn-md mx-2' onClick={() => setIsOpen(false) }>Cancel</button>}
                    <button className='btn btn-primary btn-md shadow-none' type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}
export default Profile;