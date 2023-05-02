import Sidebar from "../includes/sidebar"
import Header  from "../includes/header"
import Footer from "../includes/footer"
import { useState } from "react";
export default function Batches(){
  const[Institution,setInstitution]=useState("");
  const[SetInstitution,setSelectinstitution]=useState("");
  const[Batchyear,setBatchyear]=useState("");
  const[Batchname,setBatchname]=useState("");


    return(
        <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
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
                        Create New Batch
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
                            id="institution"
                            class="form-label"
                            onChange={(e)=>setInstitution(e.target.value)}
                            required
                          >
                            Institution
                            <span class="text-danger"> *</span>{" "}
                          </label>
                          <select
                            
                            name="institution"
                            class="form-control default-input ng-pristine ng-valid ng-touched"
                          >
                            <option value="" selected="" disabled="">
                              -- Select Institution --
                            </option>
                            <option>IIT Hyderabad</option>
                            <option>AITS_HYD</option>
                            <option>IIT Kanpur</option>
                            <option>Stanford University</option>
                            <option>Harvard University</option>
                          </select>
                        </div>
                      </div>
                      <div class="row g-2">
                        <div class="col mb-0">
                          <label 
                           for="Batch-Year" 
                           class="form-label" 
                           id="batchyear"
                           onChange={(e)=>setBatchyear(e.target.value)}>
                            Batch-Year
                            <span class="text-danger"> *</span>
                          </label>
                          <select
                          
                            name="BatchYear"
                            class="form-control"
                          >
                            <option value="" selected="" disabled="">
                              -- Select Batch Year --
                            </option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                          </select>
                          
                        </div>
                      </div>
                      <div class="row g-2">
                        <div class="col mb-0">
                          <label for="Batch-Year" 
                           class="form-label" 
                           id="batchhname"
                           onChange={(e)=>setBatchname(e.target.value)}>
                            Batch-Name
                            <span class="text-danger"> *</span>
                          </label>
                          <input
                            type="text"
                            id="Batch-name"
                            class="form-control"
                            placeholder="Enter Your Batch Name"
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
                      <button type="button" class="btn btn-primary" id="Createbatch">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4 d-flex justify-content-between align-items-center">
              <span>Filter-Batches</span> 
              <button type="button" class="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#modalCenter">
              + Create Batch</button>
            </h4>
                <div class="card mb-4">
                  <h5 class="card-header">Select Institution :</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md">
                        <select
                          name="institution"
                          class="form-control default-input ng-pristine ng-valid ng-touched"
                          onChange={(e)=>setSelectinstitution(e.target.value)}
                        >
                          <option value="" selected="" disabled="">
                            -- Select Institution --
                          </option>
                          <option>IIT Hyderabad</option>
                          <option>AITS_HYD</option>
                          <option>IIT Kanpur</option>
                          <option>Stanford University</option>
                          <option>Harvard University</option>
                        </select>
                      </div>
                      <div _ngcontent-qfm-c181="" class="col-md">
                        <button
                          _ngcontent-qfm-c181=""
                          type="button"
                          class="btn btn-primary mx-2"
                        >
                          Go
                        </button>
                      </div>
                    </div>
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