import React from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../constants/utils'

const LogIn = () => {
   const { register, handleSubmit } = useForm({ onChange: true })

   const submit = async (formData) => {
      let data = await axiosInstance.post('/login', formData)
   }
  return (
    <div>
      <div className="box"></div>
      <div class="ms-content-wrapper ms-auth">
            <div class="ms-auth-container">
               <div class="ms-auth-col">
                  <div class="ms-auth-bg"></div>
               </div>
               {/* <div class="spinner spinner-7">
                  <div class="bounce1"></div>
                  <div class="bounce2"></div>
                  <div class="bounce3"></div>
               </div> */}
               <div class="ms-auth-col">
                  <div class="ms-auth-form">
                     <form onSubmit={handleSubmit(submit)} >
                        <h1>Login to Account</h1>
                        <p>Please enter your email and password to continue</p>
                        <div class="mb-3">
                           <label for="validationCustom08">Email Address</label>
                           <div class="input-group">
                              <input 
                                 type="email" 
                                 class="form-control" 
                                 placeholder="Email Address" 
                                 { ...register('email',{
                                    required: 'Email is required'
                                 })}
                              />
                              
                           </div>
                        </div>
                        <div class="mb-2">
                           <label for="validationCustom09">Password</label>
                           <div class="input-group">
                              <input 
                                 type="password" 
                                 class="form-control" 
                                 placeholder="Password" 
                                 {...register('password', {
                                    required: 'Password is required'
                                 })}
                              />
                              
                           </div>
                        </div>
                        <div class="form-group ml-2">
                           <label class="ms-checkbox-wrap">
                           <input class="form-check-input" type="checkbox" {...register('remember')} />
                           <i class="ms-checkbox-check"></i>
                           </label>
                           <span>Remember Password </span>
                           <label class="d-block mt-3"><a href="/" class="btn-link" data-bs-toggle="modal" data-bs-target="#modal-12">Forgot Password?</a></label>
                        </div>
                        <button class="btn btn-primary mt-4 d-block w-100 spinner spinner-7" type="submit">Sign In</button>
                        
                        <p class="mb-0 mt-3 text-center">Don't have an account? <a class="btn-link" href="default-register.html">Create Account</a> </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Forgot Password Modal --> */}
         <div class="modal fade" id="modal-12" tabindex="-1" role="dialog" aria-labelledby="modal-12">
            <div class="modal-dialog modal-dialog-centered modal-min" role="document">
               <div class="modal-content">
                  <div class="modal-body text-center">
                     <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <i class="flaticon-secure-shield d-block"></i>
                     <h1>Forgot Password?</h1>
                     <p> Enter your email to recover your password </p>
                     <form method="post">
                        <div class="ms-form-group has-icon">
                           <input type="text" placeholder="Email Address" class="form-control" name="forgot-password" value=""/>
                           <i class="material-icons">email</i>
                        </div>
                        <button type="submit" class="btn btn-primary shadow-none">Reset Password</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>

    </div>
  )
}

export default LogIn