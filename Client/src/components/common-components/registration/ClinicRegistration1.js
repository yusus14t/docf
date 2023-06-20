import { useForm } from 'react-hook-form';
import { NumberFormat, axiosInstance } from '../../../constants/utils';
import useToasty from '../../../hooks/toasty';

const ClinicRegistration = ({ source, tab, setTab, isSelfCreated }) => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm({ onChange: true })
    const toasty = useToasty()


    const submit = async (formData) => {
        try {
            formData['tab'] = tab
            let {data}  = await axiosInstance.post('/common/create-clinic', formData )
            reset({})
            setTab('STEP2')
            toasty.success(data?.message)
        } catch (error) { 
            toasty.error(error?.message)
            console.log(error)
        }
    }

    return (
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
                { !isSelfCreated && <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className=''>Password</label>
                        <div className="input-group">
                            <input type="password"
                                className={`form-control ${errors?.password ? 'border-danger' : ''}`}
                                placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required'
                                })}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className=''>Confirm Password</label>
                        <div className="input-group">
                            <input type="password"
                                className={`form-control ${errors?.confirmPassword ? 'border-danger' : ''}`}
                                placeholder="Confirm Password"
                                {...register('confirmPassword', {
                                    required: 'Confirm password is required'
                                })}
                                onChange={(event) => { }}
                            />
                        </div>
                    </div>
                </div>}
            </div>
            <button className='btn btn-primary btn-md' type='submit'>Save</button>
        </form>
    )
}

export default ClinicRegistration;