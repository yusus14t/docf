import { useState } from "react";
import Modal from "./Modal";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"

const NewTcket = ({isOpen, setIsOpen}) => {
    const { register, handleSubmit, watch, clearErrors ,formState:{ errors }, control } = useForm({ onChange: true });

    return(
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            closeButton={false}
            submitButton={false}
            title='New Ticket'
        >
            <form className="ms-form-wizard style1-wizard wizard form-content" onSubmit={handleSubmit((data) => console.log(data))} role="application">
                <div className="col-md-12 mb-3">
                    <label >Query related to : </label>
                    <div className="">
                        <Controller
                            control={control}
                            name="related"
                             render={({ field }) => (
                                 <Select
                                    {...field}
                                     isMulti={false}
                                     options={[{label: 'Other', value:'other'}]}
                                     className="p-0"
                                     classNamePrefix="select"
                                 />
                            )}
                        />
                    </div>
                    { errors?.doctor && <div className="text-danger ">{errors?.doctor.message}</div>}
                </div>
                {watch('related')?.value === 'other' && <div className="col-12 mb-3">
                    <label className=''>Query Title</label>
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

                </div>}
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
                <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={() => setIsOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary shadow-none mx-2" onClick={() => {  }}>Save</button>
            </form>
        </Modal>
    )
}
export default NewTcket;