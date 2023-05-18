import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

export default function Login() {
  const [values, setValues] = useState({
    email:'',
    password:'',
    rememberMe:''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/login', values)
    .then(res => {
        if(res.data.Status === "Success"){
            navigate('/dashboard')
        }else{
            setError(res.data.Error);
        }
    })
    .then(err => console.log(err));
}

  return (
   
    <div>

      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="#" className="app-brand-link gap-2">
                    <h1 className="logo primary">
                      <span className="logo text-body fw-bolder">Accessify</span>
                    </h1>
                  </a>
                </div>

                <h4 className="mb-2">Welcome to Accessify! 👋</h4>
                <p className="mb-4">Please sign-in to your account</p>

                <form
                  id="formAuthentication"
                  className="mb-3"
                  action="/"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label  className="form-label">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="_email"
                      name="_email"
                      placeholder="Enter your email or username"
                      onChange={e=>setValues({...values, email:e.target.value})}
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" >
                        Password
                      </label>
                      <a href="#">
                        <small>Forgot Password?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="_password"
                        className="form-control"
                        name="_password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        value={values.password}
                        onChange={e=>setValues({...values, password:e.target.value})}
                      />
                      <span className="input-group-text cursor-pointer" onClick={handleTogglePassword}>
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <div id="validate"></div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                        value="checked"
                        onChange={e=>setValues({...values, rememberMe:e.target.value})}
                      />
                      <label className="form-check-label" >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-grid w-100"
                      type="submit"
                      name="_submit"
                    >
                      Sign in
                    </button>
                  </div>
                  {error && <div classNameName="alert alert-danger">{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
