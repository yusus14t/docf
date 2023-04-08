import React from "react";
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../constants/utils'


function SignUp(props) {
  const { register, handleSubmit } = useForm({ onChange: true })

  const submit = async ( data ) => {
    await axiosInstance.post('/signup', data );
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
              <div className="col-lg-12 col-sm-6">
                <div className="md-3 ">
                  <label htmlFor="/">First name</label>
                  <div className="input-group">
                    <input
                      {...register("firstName", {
                        required: "First name is required.",
                      })}
                      className="form-control an"
                      placeholder="First name"
                    />
                  </div>
                </div>
                
                {/* { errors } */}
                <div className="md-3 ">
                  <label htmlFor="/">Last name</label>
                  <div className="input-group">
                    <input
                      {...register("lastName", {
                        required: "last name is required.",
                      })}
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="md-6 ">
                <label htmlFor="/">Mobile Number</label>
                <div className="input-group">
                  <input
                    {...register("mobileNumber", {
                      required: "Mobile Number is required.",
                    })}
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="md-6 sm-3 ">
                <label htmlFor="/">Age</label>
                <div className="input-group">
                  <input
                    {...register("Age", {
                      required: "Age Number is required.",
                    })}
                    className="form-control"
                    placeholder="Age"
                  />
                </div>
              </div>
              <div className="md-6 sm-3 ">
                <label htmlFor="/">Gender</label>
                <div className="input-group">
                  <input
                    {...register("Gender", {
                      required: "Gender is required.",
                    })}
                    className="form-control"
                    placeholder="Gender"
                  />
                </div>
              </div>
              <div className="row">
                <div className="md-12 ">
                  <label htmlFor="/">Email Address</label>
                  <div className="input-group">
                    <input
                      {...register("email", {
                        required: "Email is required.",
                      })}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <label htmlFor="/">Password</label>
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
                </div>
                <div className="col-md-6 ">
                  <label htmlFor="/">Confirm Password</label>
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
