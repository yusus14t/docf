import React from "react";
// import "../../assets/css/style.css";
// import "../../assets/css/bootstrap.min.css"
import "../../assets.app/css/jquery-ui.min.css";

function SignUp(props) {
  return (
    <div>
      {/* <!-- Main Content --> */}
      <main class="body-content">
        {/* <!-- Navigation Bar --> */}

        {/* <!-- Body Content Wrapper --> */}
        <div class="ms-content-wrapper ms-auth">
          <div class="ms-auth-container">
            <div class="ms-auth-col">
              <div class="ms-auth-bg"></div>
            </div>
            <div class="ms-auth-col">
              <div class="ms-auth-form">
                <form>
                  <h1>Create Account</h1>
                  <p>Please enter personal information to continue</p>
                  <div class="row">
                    <div class="col-md-6 ">
                      <label for="/">First name</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="/"
                          placeholder="First name"
                          value="John"
                          required=""
                        />
                        
                      
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <label for="/">Last name</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="/"
                          placeholder="Last name"
                          value="Doe"
                          required=""
                        />
                        
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 ">
                      <label for="/">Email Address</label>
                      <div class="input-group">
                        <input
                          type="email"
                          class="form-control"
                          id="/"
                          placeholder="Email Address"
                          required=""
                        />

                      </div>
                    </div>
                    <div class="col-md-12 ">
                      <label for="/">Password</label>
                      <div class="input-group">
                        <input
                          type="password"
                          class="form-control"
                          id="/"
                          placeholder="Password"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check ps-0">
                      <label class="ms-checkbox-wrap">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          required=""
                        />
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Agree to terms and conditions </span>
                    </div>
                  </div>
                  <button
                    class="btn btn-primary mt-4 d-block w-100"
                    type="submit"
                  >
                    Create Account
                  </button>
                  <span class="d-block text-center my-4">Or</span>

                  <p class="mb-0 mt-3 text-center">
                    Already have an account?{" "}
                    <a class="btn-link" href="default-login.html">
                      Login
                    </a>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
