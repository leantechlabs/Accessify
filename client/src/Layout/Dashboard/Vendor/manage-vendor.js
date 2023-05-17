import Sidebar from "../../includes/sidebar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ManageVendor() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/manage-vendor")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              {/* #contents */}
              <div
                class="modal fade"
                id="modalCenter"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalCenterTitle">
                        Update Vendor Details 
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                    <div class="row g-2">
                        <div class="col mb-0">
                          <label
                            for="nameWithTitle"
                            class="form-label"
                            required
                          >
                            Institution
                            <span class="text-danger"> *</span>{" "}
                          </label>
                         
                        </div>
                      </div>
                      <div class="row g-2">
                        <div class="col mb-0">
                          <label for="Batch-Year" class="form-label">
                            Batch-Year
                            <span class="text-danger"> *</span>
                          </label>
                          <input
                            type="text"
                            id="Batch-year"
                            class="form-control"
                            placeholder="Enter Your Batch Year"
                          //  onChange={e=>setcreateValues({...createValues, createBatchyear:e.target.value})}

                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                        >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary" >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                          <th>Business Name</th>
                          <th>Phone</th>
                          <th>email</th>
                          <th> Status</th>
                          <th> Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0" >
                        {Array.isArray(data) &&
                          data.map((batch, index) => {
                            return (
                              <tr key={index}>
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
                                        data-bs-toggle="modal" 
                                        data-bs-target="#modalCenter"
                                      >
                                        <i class="bx bx-edit-alt me-1"></i> Edit
                                      </button>
                                      <a
                                        class="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i class="bx bx-trash me-1"></i> Delete
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                             
                            );
                          })}
                           <div style={{marginBottom:"100px"}}></div>
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
