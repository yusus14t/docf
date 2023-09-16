import { useEffect, useState } from "react";
import { axiosInstance, getAuthHeader } from "../../../constants/utils";
import { useForm } from "react-hook-form";
import useToasty from "../../../hooks/toasty";

const Payment = () => {
    const [ price, setPrice ] = useState([])
    const toasty = useToasty();
    const { register, reset, handleSubmit, watch } = useForm({ onChange: true })
    const paymentType = [ 'month', 'quater', 'halfYear', 'year' ]

    useEffect(() => {
        getPaymentSetting()
    }, [])

    const getPaymentSetting = async () => {
        try{
            let { data } = await axiosInstance.get('/plans', getAuthHeader())

            let patientPayment = data.paymentSetting.find( ({data}) => data.organization === 'patient' )
            setPrice(patientPayment.data.price)

            let payment = { clinic: {}, hospital: {} }
            data.paymentSetting.map( ({ data }) => {
                if( data.organization === 'clinic' ){
                    payment.clinic[data.type] = {price: data.price, discount: data.discount}
                }
                else if( data.organization === 'hospital' ){
                    payment.hospital[data.type] = { price: data.price, discount: data.discount }
                }
            })
            reset(payment)
        } catch(error){ console.error(error) }
    }

    const submit = async ( values ) => {
        console.log('value', values)
        try{
            await axiosInstance.post('/super-admin/organization-price', values, getAuthHeader())
            toasty.success('Price update successfully.')
        } catch(error){ 
            console.log(error) 
            toasty.error('Something went wrong.')
        }
    }

    const savePatientPrice = async () => {
        try{
            let { data } = await axiosInstance.post('/super-admin/patient-price', { price }, getAuthHeader())
            toasty.success( data.message )
        } catch(error){ 
            console.log(error) 
            toasty.error('Something went wrong.')
        }
    }

    return(
        <div>
            <div className="user-payment-card mb-3 ">
                <div className="">
                    <h4>Patient</h4>
                </div>
                <div className="row my-2 align-items-end py-2" >
                    <div className="col-md-3">
                        <h6>Fee</h6>
                    </div>
                    <div className="col-md-3">
                        <label>Price</label>
                        <input className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-info shadow-none" onClick={() => savePatientPrice()}>Save</button>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="user-payment-card mb-3 ">
                    <div className="">
                        <h4>Clinic</h4>
                    </div>
                    { paymentType.map( (type, i) => (
                        <div className="row my-2 align-items-center py-2" key={i}>
                            <div className="col-md-3">
                                <h6>{ type }</h6>
                            </div>
                            <div className="col-md-3">
                                <label>Price</label>
                                <input 
                                    className="form-control"
                                    {...register(`clinic.${type}.price`, {
                                        required: 'Price must be required'
                                    })} 
                                />
                            </div>
                            <div className="col-md-3">
                                <label>Discount</label>
                                <input 
                                    className="form-control"
                                    {...register(`clinic.${type}.discount`, {
                                        required: 'Discount must be required'
                                    })} 
                                />
                            </div>
                            <div className="col-md-3">
                                <label>Total</label>
                                <h5>₹{ +watch(`clinic.${type}.price`) - +watch(`clinic.${type}.discount`) }</h5>
                            </div>
                        </div>
                    ))}

                    <div className="mt-2 d-flex justify-content-end">
                        <button type="submit" className="btn btn-info shadow-none">Save</button>
                    </div>
                </div>
                <div className="user-payment-card mb-3 ">
                    <div className="">
                        <h4>Hospital</h4>
                    </div>
                    { paymentType.map( (type, i) => (
                        <div className="row my-2 align-items-center py-2" key={i}>
                            <div className="col-md-3">
                                <h6>{ type }</h6>
                            </div>
                            <div className="col-md-3">
                                <label>Price</label>
                                <input 
                                    className="form-control"
                                    {...register(`hospital.${type}.price`, {
                                        required: 'Price must be required'
                                    })} 
                                />
                            </div>
                            <div className="col-md-3">
                                <label>Discount</label>
                                <input 
                                    className="form-control"
                                    {...register(`hospital.${type}.discount`, {
                                        required: 'Discount must be required'
                                    })} 
                                />
                            </div>
                            <div className="col-md-3">
                                <label>Total</label>
                                <h5>₹{ +watch(`hospital.${type}.price`) - +watch(`hospital.${type}.discount`) }</h5>
                            </div>
                        </div>
                    ))}

                    <div className="mt-2 d-flex justify-content-end">
                        <button type="submit" className="btn btn-info shadow-none">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Payment;