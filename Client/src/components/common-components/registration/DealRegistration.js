import { useForm } from "react-hook-form";


const DealRegistration = ({ tab }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ onChange: true })
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="row">
                <div className="col-md-3 mb-3"></div>
                <div className="col-md-6 mb-3">
                    <label className=''>Deal Price</label>
                    <div className="input-group">
                        <input type="text"
                            className="form-control "
                            placeholder="Eg: 900/m"
                            {...register('dealprice', {
                                required: 'Deal price is required'
                            })}
                        />
                    </div>
                    {errors?.dealprice && <div className="text-danger ">{errors?.dealprice.message}</div>}

                </div>
                <div className="col-md-3 mb-3"></div>
                <div className="col-md-3 mb-3"></div>

                <div className="col-md-6 mb-3">
                    <label className=''>Details</label>
                    <div className="input-group">
                        <textarea type="text"
                            className="form-control "
                            placeholder="Eg: 1500/m"
                            {...register('details', {
                                required: 'Details are required'
                            })}
                        />
                    </div>
                    {errors?.details && <div className="text-danger ">{errors?.details.message}</div>}

                </div>
                <div className="col-md-3 mb-3"></div>

            </div>
        </form>
    )
}
export default DealRegistration;