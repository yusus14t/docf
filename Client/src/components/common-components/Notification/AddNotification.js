import Modal from "../Modal";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
import { PRIORITY } from "../../../constants/constant";
import useToasty from '../../../hooks/toasty';
import { useEffect, useState } from "react";
import { axiosInstance, getAuthHeader } from "../../../constants/utils";

const Add = ({isOpen, setIsOpen}) => {
    const toasty = useToasty()
    const [doctors, setDoctors] = useState([]);
    const { register, handleSubmit, formState:{ errors }, control } = useForm({ onChange: true });

    useEffect(() => {
        fetchDoctors();
    },[])

    const fetchDoctors = async () => {
        try {
            let { data } = await axiosInstance.get('/common/appointment-doctors', getAuthHeader());
            setDoctors(data?.doctors || [])
        } catch(error){ 
            toasty.error(error?.messgae)
            console.log(error) 
        }
    }

    return(
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            closeButton={false}
            submitButton={false}
            title='Add New Notification'
        >
            <form className="ms-form-wizard style1-wizard wizard form-content" onSubmit={handleSubmit((data) => console.log(data))} role="application">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label >Send to:  </label>
                        <div className="">
                            <Controller
                                control={control}
                                name="related"
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti
                                        options={doctors}
                                        className="p-0"
                                        classNamePrefix="select"
                                        getOptionLabel={({fullName}) => fullName}
                                        getOptionValue={({_id}) => _id}
                                        formatOptionLabel={(option, meta) => 
                                            <div className='d-flex justify-content-between'>
                                                <div><span>{option.fullName}</span></div>
                                                <div><span style={{fontWeight:'bold', letterSpacing:'1.2px', color:'#4e81ff'}}>{option.clinic}</span></div>
                                                <div></div>
                                            </div>
                                        }
                                    />
                                )}
                            />
                        </div>{console.log('>>>>>>', doctors)}
                        { errors?.related && <div className="text-danger ">{errors?.related.message}</div>}
                    </div>
                    <div className="col-8 mb-3">
                        <label className=''>Title</label>
                        <div className="input-group">
                            <input type="text"
                                className="form-control "
                                placeholder="Something"
                                {...register('otherRelated', {
                                    required: 'Query title must be required'
                                })}
                            />
                        </div>
                        {errors?.address && <div className="text-danger ">{errors?.address.message}</div>}

                    </div>
                    <div className="col-md-4 mb-3">
                        <label >Priority  </label>
                        <div className="">
                            <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti={false}
                                        defaultValue={[{label:'Low', value: 'low'}]}
                                        options={PRIORITY}
                                        className="p-0"
                                        classNamePrefix="select"
                                    />
                                )}
                            />{console.log(PRIORITY)}
                        </div>
                        { errors?.doctor && <div className="text-danger ">{errors?.doctor.message}</div>}
                    </div>
                    <div className="col-md-12 ">
                        <div className="row input-group">
                            <div className="col"><label >Active</label></div>
                            <label class="ms-switch">
                                <input type="checkbox" value={'checked'} />
                                <span class="ms-switch-slider round"></span>
                            </label>
                        </div>
                        { errors?.parking && <div className="text-danger ">{errors?.parking.message}</div>}

                    </div>
                    <div className="col-md-12 mb-3">
                        <label >Description: </label>
                        <div className="input-group">
                        <textarea type="text"
                            className="form-control"
                            placeholder="description"
                            rows={7}
                            {...register(`description`, {
                            required: 'Qualification is required'
                            })}
                        />
                        </div>
                        { errors?.qualification && <div className="text-danger ">{errors?.qualification.message}</div>}

                    </div>
                </div>
                <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={() => setIsOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary shadow-none mx-2" onClick={() => {  }}>Save</button>
            </form>
        </Modal>
    )
}
export default Add;