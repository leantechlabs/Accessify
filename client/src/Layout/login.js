import React, { useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import urls from "../CorsUrls";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
axios.defaults.withCredentials = true;

export default function Login() {
  const [values, setValues] = useState({
    email:'',
    password:'',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(urls['login'], values)
    .then(res => {
        if(res.data.Status === "Success"){
          
            navigate('/dashboard')
        }else{

            toast.warning(res.data.Error);
        }
    })
    .then(err => console.log(err));
}

  return (
   
    <div>
    <ToastContainer />
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

                <form
                  id="formAuthentication"
                  class="mb-3"
                  action="/"
                  onSubmit={handleSubmit}
                >
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
                      onChange={e=>setValues({...values, email:e.target.value})}
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                      <label class="form-label" >
                        Password
                      </label>
                      <Link to="/password-reset">
                        <small>Forgot Password?</small>
                      </Link>
                    </div>
                    <div class="input-group input-group-merge">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="_password"
                        class="form-control"
                        name="_password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        value={values.password}
                        onChange={e=>setValues({...values, password:e.target.value})}
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide" onClick={toggleShowPassword}></i>
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
                    >
                      Sign in
                    </button>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
