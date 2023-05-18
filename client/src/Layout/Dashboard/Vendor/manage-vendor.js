import Sidebar from "../../includes/sidebar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function ManageVendor() {
  let id = 0;
  const navigate = useNavigate();
  const [Uid, setId] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/manage-vendor")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  
  const UpdateVendorComponent = (data) => {
    navigate('/update-vendor',{state:{data}});
  };

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              {/* #contents */}
       
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="d-flex align-items-center justify-content-between">
                  <h4 class="fw-bold py-3 mb-4">
                    <span class="text-muted fw-light">Manage Vendors </span>
                  </h4>
                </div>
                <div class="card">
                  <h5 class="card-header">List of Vendors</h5>
                  <div class="table-responsive text-nowrap">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Business Name</th>
                          <th>Phone</th>
                          <th>email</th>
                          <th> Status</th>
                          <th> Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                        {Array.isArray(data) &&
                          data.map((batch, index) => {
                            return (
                              <tr key={index}>
                                <td>{batch.uid+1}</td>
                                <td>{batch.businessname}</td>
                                <td>{batch.phone}</td>
                                <td>{batch.email}</td>
                                <td>
                                  <span class="badge bg-label-success me-1">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <div class="dropdown">
                                    <button
                                      type="button"
                                      class="btn p-0 dropdown-toggle hide-arrow"
                                      data-bs-toggle="dropdown"
                                     
                                    >
                                      <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                      <button
                                        class="dropdown-item"
                                        onClick={() => {UpdateVendorComponent(data[batch.uid])}
                                       }
                                      >
                                        <i class="bx bx-edit-alt me-1"></i> Edit 
                                      </button>
                                      <a
                                        class="dropdown-item"
                                        // onClick={() => {UpdateVendorComponent(data)}}
                                      >
                                        <i class="bx bx-trash me-1"></i> Delete
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        <div style={{ marginBottom: "100px" }}></div>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
