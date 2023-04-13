import React from 'react'
import { useForm } from 'react-hook-form'
import {  axiosInstance, getAuthHeader } from '../../constants/utils'
// import Store from '../../redux/Store';


const LogIn = () => {
   const { register, handleSubmit } = useForm({ onChange: true })

   const submit = async (formData) => {
      try{
         let { data } = await axiosInstance.post('/login', formData, getAuthHeader())
         // Store.dispatch({ type: 'SET_SESSION', payload: 'ITS WORK'})
         localStorage.setItem('user', JSON.stringify(data.user))
         localStorage.setItem('session', JSON.stringify(data.token))
      } catch(error){ console.log(error)}
   }
  return (
    <div>
      <div className="box"></div>
      <div className="ms-content-wrapper ms-auth">
            <div className="ms-auth-container">
               <div className="ms-auth-col">
                  <div className="ms-auth-bg"></div>
               </div>
               {/* <div className="spinner spinner-7">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
               </div> */}
               <div className="ms-auth-col">
                  <div className="ms-auth-form">
                     <form onSubmit={handleSubmit(submit)} >
                        <h1>Login to Account</h1>
                        <p>Please enter your email and password to continue</p>
                        <div className="mb-3">
                           <label for="validationCustom08">Email Address</label>
                           <div className="input-group">
                              <input 
                                 type="email" 
                                 className="form-control" 
                                 placeholder="Email Address" 
                                 { ...register('email',{
                                    required: 'Email is required'
                                 })}
                              />
                              
                           </div>
                        </div>
                        <div className="mb-2">
                           <label for="validationCustom09">Password</label>
                           <div className="input-group">
                              <input 
                                 type="password" 
                                 className="form-control" 
                                 placeholder="Password" 
                                 {...register('password', {
                                    required: 'Password is required'
                                 })}
                              />
                              
                           </div>
                        </div>
                        <div className="form-group ml-2">
                           <label className="ms-checkbox-wrap">
                           <input className="form-check-input" type="checkbox" {...register('remember')} />
                           <i className="ms-checkbox-check"></i>
                           </label>
                           <span>Remember Password </span>
                           <label className="d-block mt-3"><a href="/" className="btn-link" data-bs-toggle="modal" data-bs-target="/modal-12">Forgot Password?</a></label>
                        </div>
                        <button className="btn btn-primary mt-4 d-block w-100 spinner spinner-7" type="submit">Sign In</button>
                        
                        <p className="mb-0 mt-3 text-center">Don't have an account? <a className="btn-link" href="default-register.html">Create Account</a> </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Forgot Password Modal --> */}
         <div className="modal fade" id="modal-12" tabindex="-1" role="dialog" aria-labelledby="modal-12">
            <div className="modal-dialog modal-dialog-centered modal-min" role="document">
               <div className="modal-content">
                  <div className="modal-body text-center">
                     <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <i className="flaticon-secure-shield d-block"></i>
                     <h1>Forgot Password?</h1>
                     <p> Enter your email to recover your password </p>
                     <form method="post">
                        <div className="ms-form-group has-icon">
                           <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" value=""/>
                           <i className="material-icons">email</i>
                        </div>
                        <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>

    </div>
  )
}

export default LogIn