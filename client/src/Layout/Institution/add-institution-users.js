import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import axios from 'axios';
import React,{useState,useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function AddInstitutionUser() {


  const [singleCreateValues, setsingleCreateValues] = useState({
    Institution:'',
    BatchYear:'',
    Batch:'',
    firstname:'',
    lastname:'',
    email:'',
    regid:'',
    mobile:'',
    password:'',
    AccessPeriod:''
}); 

const [multiCreateValues, setmultiCreateValues] = useState({
  Institution:'',
  BatchYear:'',
  Batch:'',
  AccessPeriod:'',
  file: null
  
}); 
console.log(multiCreateValues,multiCreateValues.file);
const [data, setData] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3000/')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
},[])


  const handleFileChange = (e) => {
    setmultiCreateValues( {...multiCreateValues ,file:e.target.files[0]} );
  };
  const handleSubmits = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('Institution', multiCreateValues.Institution);
    data.append('BatchYear', multiCreateValues.BatchYear);
    data.append('Batch', multiCreateValues.Batch);
    data.append('AccessPeriod', multiCreateValues.AccessPeriod);
    data.append('file', multiCreateValues.file);
    console.log(data);

 axios.post("http://localhost:3001/multiuser",data , {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})   
       .then((res) => {
        if (res.data.Status === 'Success') {
          toast.success('multi user created successfully');
          navigate('/users')
  
        } else {
          alert('Error');
        }
      })
      .catch((err) => console.log(err));

  };


  const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(singleCreateValues);
  axios.post('http://localhost:3001/institution-single-user', singleCreateValues)
    .then((res) => {
      if (res.data.Status === 'Success') {
        toast.success('single user created successfully');
        navigate('/institution')

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
              <div class="page-content mt-4">
                <div class="row justify-content-center">
                  <div class="col-md-11">
                    <ul ngbnav="" class="nav nav-tabs" role="tablist">
                      <li class="nav-item">
                        <a
                          data-toggle="tab"
                          href="#ngb-nav-8-panel"
                          ngbnavlink=""
                          id="ngb-nav-8"
                          role="tab"
                          aria-controls="ngb-nav-8-panel"
                          aria-selected="true"
                          aria-disabled="false"
                          class="nav-link active"
                        >
                          Single User
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          data-toggle="tab"
                          href="#ngb-nav-9-panel"
                          ngbnavlink=""
                          id="ngb-nav-9"
                          role="tab"
                          aria-selected="false"
                          aria-disabled="false"
                          class="nav-link"
                        >
                          Multi Users
                        </a>
                      </li>
                    </ul>
                    <div class="mt-2 tab-content">
                      <div
                        class="tab-pane fade show active"
                        id="ngb-nav-8-panel"
                        role="tabpanel"
                        aria-labelledby="ngb-nav-8"
                      >
                        <div class="row">
                          <div class="col-md-12">
                            <div class="card">
                              <div class="card-body">
                                  <div class="row form-group">
                                    <div class="col-md-4">
                                      <label>Institution</label>
                                      <select
                                        name="_institute"
                                        id="_institute"
                                        formcontrolname="institute"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, Institution:e.target.value})}

                                      >
                                        <option value="" selected="">
                                          --Select Institution --
                                        </option>
                                        <option>
                                          Coign_Practise
                                        </option>
                                        <option>
                                          AITS_2023
                                        </option>
                                        <option >VNR</option>
                                      </select>
                                    </div>
                                    <div class="col-md-4">
                                      <label>Batch Year</label>
                                      <select
                                        name="_batch_year"
                                        id="_batch_year"
                                        formcontrolname="batch_year"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, BatchYear:e.target.value})}

                                      >
                                        <option value="" selected="">
                                          --Select Batch Year--
                                        </option>
                                        <option>
                                          Coign_Practise
                                        </option>
                                      </select>
                                    </div>
                                    <div class="col-md-4">
                                      <label>Batch</label>
                                      <select
                                        name="_batch"
                                        id="_batch"
                                        formcontrolname="batch"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, Batch:e.target.value})}

                                      >
                                        <option value="" selected="">
                                          --Select Batch --
                                        </option>
                                        <option>
                                          Coign_Practise
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-6">
                                      <label>First Name</label>
                                      <input
                                        type="text"
                                        placeholder="First Name"
                                        name="_first_name"
                                        id="_first_name"
                                        formcontrolname="first_name"
                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, firstname:e.target.value})}

                                      />
                                    </div>
                                    <div class="col-md-6">
                                      <label>Last Name</label>
                                      <input
                                        type="text"
                                        placeholder="Last Name"
                                        formcontrolname="last_name"
                                        name="_last_name"
                                        id="_last_name"
                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, lastname:e.target.value})}

                                      />
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-12">
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        name="_email"
                                        id="_email"
                                        placeholder="Email"
                                        formcontrolname="email"
                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, email:e.target.value})}

                                      />
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-6">
                                      <label>Regd ID</label>
                                      <input
                                        type="text"
                                        name="_regd"
                                        id="_regd"
                                        placeholder="Regd / HallTicket No."
                                        formcontrolname="regd"
                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, regid:e.target.value})}

                                      />
                                    </div>
                                    <div class="col-md-6">
                                      <label>Mobile</label>
                                      <input
                                        type="number"
                                        placeholder="Mobile"
                                        name="_mobile"
                                        id="_mobile"
                                        formcontrolname="mobile"
                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, mobile:e.target.value})}

                                      />
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-6">
                                      <label>Password</label>
                                      <input
                                        type="password"
                                        name="_password"
                                        id="_password"
                                        placeholder="Password"
                                        formcontrolname="password"
                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, password:e.target.value})}

                                      />
                                    </div>
                                    <div class="col-md-6">
                                      <label>Access Period</label>
                                      <select
                                        name="_access_period"
                                        id="_access_period"
                                        formcontrolname="access_period"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setsingleCreateValues({...singleCreateValues, AccessPeriod:e.target.value})}

                                      >
                                        <option value="" selected="">
                                          --Select Access Period --
                                        </option>
                                        <option value="3 Days">3 Days</option>
                                        <option value="15 Days">15 Days</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="mt-3 text-center">
                                    <button
                                      type="submit"
                                      class="btn btn-primary mr-2 mb-2 mb-md-0"
                                      onClick={handleSubmit}
                                    >
                                      Create User
                                    </button>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane active"
                        id="ngb-nav-9-panel"
                        role="tabpanel"
                        aria-labelledby="ngb-nav-9"
                      >
                        <div class="row">
                          <div class="col-md-12">
                            <div class="card">
                              <div class="card-body">
                                <div class="row pb-3">
                                  <div class="col-md-6">
                                    <h6>
                                      <strong>Upload Users</strong>
                                    </h6>
                                  </div>
                                  <div class="col-md-6 text-right">
                                    <button
                                      type="button"
                                      class="btn btn-warning float-right"
                                    >
                                      <i class="feather icon-download"></i>{" "}
                                      Download Format
                                    </button>
                                  </div>
                                </div>
                                  <div class="row form-group">
                                    <div class="col-md-4">
                                      <label>Institution</label>
                                      <select
                                        name="_institute"
                                        id="_institute"
                                        formcontrolname="institute"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setmultiCreateValues({...multiCreateValues, Institution:e.target.value})}

                                     >
                                        <option
                                          selected=""
                                          disabled=""
                                        >
                                          -- Select Institution --
                                        </option>
                                        <option >Coign_Practise</option>
                                        <option >VIEW_2024_POs</option>
                                        <option >GPCET</option>
                                        <option >AITS_2023 POs</option>
                                        <option >VNR</option>
                                        <option >AITS_KADAPA</option>
                                      </select>
                                    </div>
                                    <div class="col-md-4">
                                      <label>Batch Year</label>
                                      <select
                                        name="_batch_year"
                                        id="_batch_year"
                                        formcontrolname="batch_year"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setmultiCreateValues({...multiCreateValues,BatchYear:e.target.value})}

                                      >
                                        <option
                                          selected=""
                                          disabled=""
                                        >
                                          -- Select Batch Year --
                                        </option>
                                      </select>
                                    </div>
                                    <div class="col-md-4">
                                      <label>Batch</label>
                                      <select
                                        name="_batch"
                                        id="_batch"
                                        formcontrolname="batch"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setmultiCreateValues({...multiCreateValues, Batch:e.target.value})}

                                      >
                                        <option
                                          selected=""
                                          disabled=""
                                        >
                                          -- Select Batch --
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-6">
                                      <label>Access Period</label>
                                      <select
                                        name="_access_period"
                                        id="_access_period"
                                        formcontrolname="access_period"
                                        class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                        onChange={(e)=>setmultiCreateValues({...multiCreateValues, AccessPeriod:e.target.value})}

                                      >
                                        <option
                                          selected=""
                                          disabled=""
                                        >
                                          -- Select Access Period --
                                        </option>
                                        <option >3 Days</option>
                                        <option >15 Days</option>
                                      </select>
                                    </div>
                                    <div class="col-md-6">
                                      <label for="exampleInputPassword1">
                                        Users File
                                      </label>

                                      <input
                                        type="file"
                                        required=""
                                        name="_userFile"
                                        id="_userFile"
                                        formcontrolname="user_file"
                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                        onChange={handleFileChange}
                                      />
                                    </div>
                                  </div>
                                  <div class="mt-3 text-center">
                                    <button
                                      type="submit"
                                      class="btn btn-primary mr-2 mb-2 mb-md-0"
                                      onClick={handleSubmits}

                                    >
                                      Create Users
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
