import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
Axios.defaults.withCredentials = true;

export default function Login() {
  // const nav = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [status,SetMyMessage] = useState("");
 // const [name,setName] = useState("");//hook
  
  const login = () => {

    if (email != "" && password != "") {
        if (email.length >=5) {
            Axios.post("http://localhost:3001/login", {
                email: email,
                password: password,
  
            }).then((response) => {
                if (response.data.message == "success") {
                    nav("/dashboard");
                }
                else {
                   SetMyMessage("Please Check Your Credentials");
  
                }
            });
        } else {
           SetMyMessage("Passwords Enter All the feilds");
        }
    }
  
  };

  return (
   
    <div>
      <div class="card-body" id="alert-model">
        <div class="alert alert-danger alert-dismissible" role="alert">
          <span></span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
           <input type="text" name="_textdemo" onChange={(e)=>{settext(e.target.value)}}/>
        </div>
      </div>

      <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <a href="#" class="app-brand-link gap-2">
                    <h1 class="logo primary">
                      <span class="logo text-body fw-bolder">Accessify</span>
                    </h1>
                  </a>
                </div>

                <h4 class="mb-2">Welcome to Accessify! 👋</h4>
                <p class="mb-4">Please sign-in to your account</p>

                {/* <form
                  id="formAuthentication"
                  class="mb-3"
                  action="/"
                  method="POST"
                > */}
                  <div class="mb-3">
                    <label  class="form-label">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="_email"
                      name="_email"
                      placeholder="Enter your email or username"
                      onChange={(e) => setemail(e.target.value)}
                     //onCanPlay={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                      <label class="form-label" >
                        Password
                      </label>
                      <a href="#">
                        <small>Forgot Password?</small>
                      </a>
                    </div>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="_password"
                        class="form-control"
                        name="_password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <div id="validate"></div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label class="form-check-label" >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <button
                      class="btn btn-primary d-grid w-100"
                      type="submit"
                      name="_submit"
                      onClick={() => login()}
                    >
                      Sign in
                    </button>
                  </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
