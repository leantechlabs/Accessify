import React, { useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
axios.defaults.withCredentials = true;

export default function Login() {
  

  return (
   
    <div>
    <ToastContainer />
    <div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner py-4">
          <div class="card">
            <div class="card-body">
              <div class="app-brand justify-content-center">
                <Link to="/" class="app-brand-link gap-2">
                <h1 class="logo primary">
                      <span class="logo text-body fw-bolder">Accessify</span>
                    </h1>
                </Link>
              </div>
              <h4 class="mb-2">Forgot Password? 🔒</h4>
              <p class="mb-4">Enter your email and we'll send you instructions to reset your password</p>
              <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autofocus
                  />
                </div>
                <button class="btn btn-primary d-grid w-100">Send Reset Link</button>
              </form>
              <div class="text-center">
                <Link to="/" class="d-flex align-items-center justify-content-center">
                  <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
