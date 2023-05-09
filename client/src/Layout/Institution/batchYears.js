import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import Axios from 'axios';
import React,{useState,useEffect} from "react"
export default function BatchYears() {
  const[Institution,setInstitution]=useState("");

  const[createInstitution,setcreateInstitution]=useState("");
  const[createBatchyear,setcreateBatchyear]=useState("");


  const handleSubmit = () => {
    const data = { createInstitution,createBatchyear};
    Axios.post('http://localhost:3001/createBatchyears', data)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };


  const handleSubmits = () => {
    const data = { Institution};
    Axios.post('http://localhost:3001/Batchyears', data)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };
  return (
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
                        Create Batch Year
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
                          <select
                            _ngcontent-qfm-c181=""
                            name="institution"
                            class="form-control default-input ng-pristine ng-valid ng-touched"
                            onChange={(e)=>setcreateInstitution(e.target.value)}

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
                          <label for="Batch-Year" class="form-label">
                            Batch-Year
                            <span class="text-danger"> *</span>
                          </label>
                          <input
                            type="text"
                            id="Batch-year"
                            class="form-control"
                            placeholder="Enter Your Batch Year"
                            onChange={(e)=>setcreateBatchyear(e.target.value)}

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
                      <button type="button" class="btn btn-primary" onClick={handleSubmit}
>
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4 d-flex justify-content-between align-items-center">
              <span>Filter - Batch Years</span> 
              <button type="button" class="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#modalCenter">
              + Create Batch Year</button>
            </h4>



                
              
                <div class="card mb-4">
                  <h5 class="card-header">Select Institution :</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md">
                        <select
                          _ngcontent-qfm-c181=""
                          name="institution"
                          class="form-control default-input ng-pristine ng-valid ng-touched"
                          onChange={(e)=>setInstitution(e.target.value)}

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
                          onClick={handleSubmits}
s
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
