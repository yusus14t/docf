import React from "react";
import { Link } from "react-router-dom";
import {  useForm } from 'react-hook-form';
import { axiosInstance,  numberValidator } from '../../constants/utils'
import useToasty from '../../hooks/toasty';
import { userRoutes } from "../../constants/constant";


const SignUp = () => {
  const toasty = useToasty();
  const { register, handleSubmit, formState:{ errors }, reset, watch, getValues, setError, setFocus } = useForm({ onChange: true })

  const submit = async ( formData ) => {
    try{ 
      if(watch('confirmPassword') !== getValues('password')){
        setError('confirmPassword', { message: 'Incorrect Password'})
        setFocus('confirmPassword')
        return
      }
      formData['registrationType'] = 'CLINIC'
      let { data }= await axiosInstance.post('/signup', formData );
      toasty.success(data.message)

      localStorage.setItem('token', JSON.stringify(data?.token))
      localStorage.setItem('user', JSON.stringify(data?.user))
      console.log(userRoutes[data?.user?.userType].path)
      window.location.replace(`${userRoutes[data?.user?.userType].path}`)
    } catch(error) { 
      console.error(error) 
      toasty.error(error.message)
    }
  }

  return (
    <div className="parent">
      <div className="ms-content-wrapper ms-auth   ">
        <div className="ms-auth-container ">
          <div className="ms-auth-col ">
            <div className="ms-auth-bg"></div>
          </div>
          <div className="ms-auth-col bg-form">

          <div className="ms-auth-form ">
            <form onSubmit={handleSubmit(submit)}>
              <h1>Create Account</h1>
              <p>Please enter personal information to continue</p>
              <div className="row">
 
                <div className=" col-12">
                  <label htmlFor="/">Full Name<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("fullName", {
                        required: "First name is required.",
                      })}
                      type="text"
                      className={`form-control an ${errors?.fullName && 'border-danger'}`}
                      placeholder="First name"  
                    />
                  </div>
                  { errors?.firstName && <div className="text-danger">{errors?.firstName.message}</div>}
                </div>

              </div>
              <div className="md-6">
                <label htmlFor="/">Mobile Number<span className="text-danger"> *</span></label>
                <div className="input-group">
                  <input
                    {...register("phone", {
                      required: "Mobile Number is required.",
                    })}
                    onChange={(event) => numberValidator(event)}
                    type="number"
                    className={`form-control an ${errors?.phone && 'border-danger'}`}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="row">
                <div className="md-12 ">
                  <label htmlFor="/">Email Address</label>
                  <div className="input-group">
                  <input
                      {...register("email")}
                      type={"email"}
                      className={`form-control an `}
                      placeholder="dexter@mail.com"
                    />
                  </div>
                </div>
                <div className="col-6 ">
                  <label htmlFor="/">Password<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("password", {
                        required: "Password is required.",
                      })}
                      type={"password"}
                      className={`form-control an ${errors?.password && 'border-danger'}`}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-6 ">
                  <label htmlFor="/">Confirm Password<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("confirmPassword", {
                        required: "Confirm Password is required.",
                      })}
                      type={"password"}
                      className={`form-control an ${errors?.confirmPassword && 'border-danger'}`}
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check ps-0">
                  <label className="ms-checkbox-wrap">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      required=""
                    />
                    <i className="ms-checkbox-check"></i>
                  </label>
                  <span> Agree to terms and conditions </span>
                </div>
              </div>
              <button
                className="btn btn-primary mt-4 d-block w-100"
                type="submit"
              >
                Create Account
              </button>
              <span className="d-block text-center my-4">Or</span>

              <p className="mb-0 mt-3 text-center">
                Already have an account?{" "}
                <Link className="btn-link" to={'/login'}>
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
