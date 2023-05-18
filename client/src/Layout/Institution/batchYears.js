import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import axios from 'axios';
import React,{useState,useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function BatchYears() {


  const [selectInstitution, setselectInstitution] = useState('');


const [createValues, setcreateValues] = useState({
  createInstitution:'',
  createBatchyear:''
}); 
const [Institutions, setInstitutions] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/institution')
  .then(res => setInstitutions(res.data))
  .catch(err => console.log(err));
},[])
const [data, setData] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/batchyears')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
},[])

const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();

  axios.get(`http://localhost:3001/batchyears/${selectInstitution}`)
    .then(res => {
      setData(res.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const handleSubmits = (e) => {
  e.preventDefault();
  console.log(createValues);
  axios.post('http://localhost:3001/createBatchyears', createValues)
    .then((res) => {
      if (res.data.Status === 'Success') {
        toast.success('Batch-years created successfully');
        navigate('/batch-years')

      } else {
        alert('Error');
      }
    })
    .catch((err) => console.log(err));
};



  return (
    <>
                 <ToastContainer />
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
                            onChange={(e)=>setcreateValues({...createValues, createInstitution:e.target.value})}
                            
                          >
                            <option value="" selected="" disabled="">
                              -- Select Institution --
                            </option>
                            {Array.isArray(Institutions) &&
                          Institutions.map((value, index) => {
                            return (
                              <>
                              <option value={value.institutionName}>{value.institutionName}</option>
                              </>
                            );
                          })}
                         
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
                            onChange={e=>setcreateValues({...createValues, createBatchyear:e.target.value})}

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
                      <button type="button" class="btn btn-primary" onClick={handleSubmits}>
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
                          onChange={(e) =>setselectInstitution(e.target.value)}

                        >
                          <option value="" selected="" disabled="">
                            -- Select Institution --
                          </option>
                          {Array.isArray(Institutions) &&
                          Institutions.map((value, index) => {
                            return (
                              <>
                              <option value={value.institutionName}>{value.institutionName}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <div _ngcontent-qfm-c181="" class="col-md">
                        <button
                          _ngcontent-qfm-c181=""
                          type="button"
                          class="btn btn-primary mx-2"
                          onClick={handleSubmit}
s
                        >
                          Go
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="container-md flex-grow-1 container-p-y">
                    <div className="card">
                      <div className="container-md flex-grow-1 container-p-y ">
                        <div className="table-responsive text-nowrap">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>
                                  <strong>instituion</strong>
                                </th>
                                <th>
                                  <strong>batchyear</strong>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                  {Array.isArray(data) && data.map((batchyear, index)=>{
                                      return <tr key={index}>
                                          <td>{batchyear.createinstitution}</td>
                                          <td>{batchyear.createBatchyear}</td>
                                          
                                      </tr>
                                    })}
                                        
                            </tbody>
                          </table>
                        </div>
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
