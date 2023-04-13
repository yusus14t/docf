import React from "react";
import { Controller, useForm } from 'react-hook-form';
import { CustomInput } from "../../constants/customs";
import { axiosInstance, emailPattern, numberValidator } from '../../constants/utils'


function SignUp(props) {
  const { register, handleSubmit, formState:{ errors }, control } = useForm({ onChange: true })

  const submit = async ( data ) => {
    let check = await axiosInstance.post('/signup', data );
  }

  return (
    <div>
      {/* <!-- Body Content Wrapper --> */}
      <div className="box"></div>

      <div className="ms-content-wrapper ms-auth   ">
        <div className="ms-auth-container ">
          <div className="ms-auth-col">
            <div className="ms-auth-bg"></div>
          </div>

          <div className="ms-auth-form ">
            <form onSubmit={handleSubmit(submit)}>
              <h1>Create Account</h1>
              <p>Please enter personal information to continue</p>
              <div className="row">
 
                <div className=" col-6">
                  <label htmlFor="/">First name<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("firstName", {
                        required: "First name is required.",
                      })}
                      type="text"
                      className="form-control an"
                      placeholder="First name"
                    />
                  </div>
                  { errors?.firstName && <div className="text-danger">{errors?.firstName.message}</div>}
                </div>
                
                {/* { errors } */}
                <div className="md-3 col-6">
                  <label htmlFor="/">Last name<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("lastName", {
                        required: "last name is required.",
                      })}
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  { errors?.lastName && <div className="text-danger">{errors?.lastName.message}</div>}
                </div>

              </div>
              <div className="md-6">
                <label htmlFor="/">Mobile Number<span className="text-danger"> *</span></label>
                <div className="input-group">
                  <input
                    {...register("mobileNumber", {
                      required: "Mobile Number is required.",
                    })}
                    onChange={(event) => numberValidator(event)}
                    type="number"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                { errors?.mobileNumber && <div className="text-danger">{errors?.mobileNumber.message}</div>}
              </div>
              <div className="row">
                <div className="md-3 col-6 ">
                  <label htmlFor="/">Age<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("age", {
                        required: "Age Number is required.",
                      })}
                      type="number"
                      className="form-control"
                      placeholder="Age"
                    />
                  </div>
                  { errors?.age && <div className="text-danger">{errors?.age.message}</div>}
                </div>
                <div className="md-3 col-6 ">
                  <label htmlFor="/">Gender<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("gender", {
                        required: "Gender is required.",
                      })}
                      type="text"
                      className="form-control"
                      placeholder="Gender"
                    />
                  </div>
                  { errors?.gender && <div className="text-danger">{errors?.gender.message}</div>}
                </div>
              </div>
              <div className="row">
                <div className="md-12 ">
                  <label htmlFor="/">Email Address<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    {/* <input
                      {...register("email", {
                        required: "Email is required.",
                        pattern: emailPattern,
                      })}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    /> */}
                    <Controller
                          name={`email`}
                          control={control}
                          rules={{
                              required:"Email is required",
                              pattern: emailPattern,
                          }}
                          render={(field) => (
                              <CustomInput className="champ-form__cm-input" placeholder="Enter Email"
                                  {...field}
                                  errors={errors}
                  
                              />
                          )}
                      />
                  </div>
                  { errors?.email && <div className="text-danger">{errors?.email.message}</div>}
                </div>
                <div className="col-6 ">
                  <label htmlFor="/">Password<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("password", {
                        required: "Password is required.",
                      })}
                      type={"password"}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  { errors?.password && <div className="text-danger">{errors?.password.message}</div>}
                </div>
                <div className="col-6 ">
                  <label htmlFor="/">Confirm Password<span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input
                      {...register("confirmPassword", {
                        required: "Confirm Password is required.",
                      })}
                      type={"password"}
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  { errors?.confirmPassword && <div className="text-danger">{errors?.confirmPassword.message}</div>}
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
                <a className="btn-link" href="default-login.html">
                  Login
                </a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
