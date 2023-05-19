import React, { useState,useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [user,setUser] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(res => setUser(res.data))
    .catch(err => console.log(err));
},[])




  const navigate = useNavigate()
    const handleDelete = () => {
    axios.get('http://localhost:3001/logout')
    .then(res => {
        navigate('/')
    }).catch(err=> console.log(err));
}

  return (
    <>
      <nav
        class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i class="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div
          class="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <div class="navbar-nav align-items-center">
            <div class="nav-item d-flex align-items-center">
              <i class="bx bx-search fs-4 lh-0"></i>
              <input
                type="text"
                class="form-control border-0 shadow-none"
                placeholder="Search..."
                aria-label="Search..."
              />
            </div>
          </div>

          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                class="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <div class="avatar avatar-online">
                  {user.filename ? (
                    <>
                    <img
                    src={`http://localhost:3001/images/`+ user.filename} 
                    alt
                    className="w-px-40  rounded-circle"
                    style={{height:'2.5rem'}}
                  />
                  </>
                  ):(
                    <>
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt
                    class="w-px-40 h-auto rounded-circle"
                  />
                  </>
                  )}
                  
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <span class="fw-semibold d-block">{user.name}</span>
                        <small class="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>  
                <li>
                  <Link class="dropdown-item" to="/profile/staff-profile">
                    <i class="bx bx-user me-2"></i>
                    <span class="align-middle">My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/staff-profile">
                    <i class="bx bx-cog me-2"></i>
                    <span class="align-middle">Settings</span>
                  </Link>
                </li>

                <li>
                  <div class="dropdown-divider"></div>
                </li>
                <li>
                  <a class="dropdown-item">
                    <i class="bx bx-power-off me-2"></i>
                    <span class="align-middle">
                      <input
                        type="button"
                        value="Logout"
                        class=" btn primary-bg"
                        onClick={handleDelete}
                      />
                      
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
