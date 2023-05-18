import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import axios from 'axios';
import React,{useState, useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function Institution() {
  const [values, setValues] = useState({
      institutionName:'',
      headOfInstitution:'',
      primaryEmail:'',
      primaryContact:'',
      secondaryEmail:'',
      secondaryContact:'',
      address:'',
      city:'',
      state:'',
      instituteCode:'',
      instituteType:'',
      password:'',
  }); 

  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/institution')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
},[])

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.post('http://localhost:3001/institution', values)
      .then((res) => {
        if (res.data.Status === 'Success') {
          toast.success('Batch created successfully');
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
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              

              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                  <div className="inline-flexbox">
                    <h5 className="card-header">Institutions</h5>
                    <div className="modal-footer">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="mt-12">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#basicModal"
                            style={{float:"right"}}
                          >
                            + Create Institution
                          </button>
                          <form action="" onSubmit={handleSubmit} >
                          <div
                            className="modal fade"
                            id="basicModal"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                
                                <div className="modal-body">
                                  <div className="">
                                    <h4
                                      className="card-header"
                                    //   style={{color:"black"}}
                                    >
                                      Create Institution
                                    </h4>
                                    <div className="card-body my-2">
                                      <div className="row">
                                        <div className="mb-3 col-md-12">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b>
                                              Institution Name<sup>*</sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_instituteName"
                                            name="_instituteName"
                                            required={true}
                                            autoFocus
                                            placeholder="Institution Name"
                                            onChange={(e) =>
                                              setValues({ ...values, institutionName: e.target.value })
                                            }

                                          />
                                        </div>
                                        <div className="mb-3 col-md-12">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b >
                                              Head of Institution Name
                                              <sup>
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_headOfInstitute"
                                            name="_headOfInstitute"
                                            required="true"
                                            autoFocus
                                            placeholder="Head of Institution Name"
                                            onChange={e=>setValues({...values, headOfInstitution:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b >
                                              Primary Email
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_primaryEmail"
                                            name="_primaryEmail"
                                            required="true"
                                            autoFocus
                                            placeholder="Primary Email"
                                            onChange={e=>setValues({...values, primaryEmail:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b >
                                              Primary Contact
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_primaryContact"
                                            name="_primaryContact"
                                            required="true"
                                            autoFocus
                                            placeholder="Primary Contact"
                                            onChange={e=>setValues({...values, primaryContact:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b >
                                              Secondary Email
                                              <sup>
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_secondaryEmail"
                                            name="_secondaryEmail"
                                            required="true"
                                            autoFocus
                                            placeholder="Secondary Email"
                                            onChange={e=>setValues({...values, secondaryEmail:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b>
                                              Secondary Contact
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_secondaryContact"
                                            name="_secondaryContact"
                                            required="true"
                                            autoFocus
                                            placeholder="Secondary Contact"
                                            onChange={e=>setValues({...values, secondaryContact:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-12">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b >
                                              Address
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_address"
                                            name="_address"
                                            required="true"
                                            autoFocus
                                            placeholder="Address"
                                            onChange={e=>setValues({...values, address:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b >
                                              City
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_city"
                                            name="_city"
                                            required="true"
                                            autoFocus
                                            placeholder="City"
                                            onChange={e=>setValues({...values, city:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b >
                                              State
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_state"
                                            name="_state"
                                            required="true"
                                            autoFocus
                                            placeholder="State"
                                            onChange={e=>setValues({...values, state:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b>
                                              Institution Code
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_instituteCode"
                                            name="_instituteCode"
                                            required="true"
                                            autoFocus
                                            placeholder="Institution Code"
                                            onChange={e=>setValues({...values, instituteCode:e.target.value})}

                                          />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                          <label
                                            for="instituteType"
                                            className="form-label"
                                          >
                                            <b>
                                              Institution Type
                                            </b>
                                          </label>
                                          <select
                                            className="form-select"
                                            id="instituteType"
                                            aria-label="Default select example"
                                            defaultValue="selected"
                                            onChange={e=>setValues({...values, instituteType:e.target.value})}
                                          >
                                            <option value="selected">
                                              --Institution Type--
                                            </option>
                                            <option value="School">
                                              School
                                            </option>
                                            <option value="College">
                                              College
                                            </option>
                                            <option value="Education_Society">
                                              Education Society
                                            </option>
                                            <option value="University">
                                              University
                                            </option>
                                            <option value="Training_Institute">
                                              Training Institute
                                            </option>
                                            <option value="NGO">NGO</option>
                                          </select>
                                        </div>
                                        <div className="mb-3 col-md-10">
                                          <label
                                            for="tutorname"
                                            className="form-label"
                                          >
                                            <b>
                                              Password<sup>*</sup>
                                            </b>
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="_password"
                                            name="_password"
                                            required="true"
                                            autoFocus
                                            placeholder="Password"
                                            onChange={e=>setValues({...values, password:e.target.value})}

                                          />
                                        </div>

                                        <div className="mt-2">
                                          <button 
                                            type="submit"
                                            className="btn btn-primary me-2">
                                            Create
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </form>
                        </div>
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
                                  <strong>SL NO</strong>
                                </th>
                                <th>
                                  <strong>Name</strong>
                                </th>
                                <th>
                                  <strong>Email</strong>
                                </th>
                                <th>
                                  <strong>Head</strong>
                                </th>
                                <th>
                                  <strong>Users</strong>
                                </th>
                                <th>
                                  <strong>Code</strong>
                                </th>
                                <th>
                                  <strong>Actions</strong>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                  {Array.isArray(data) &&data.map((institutions, index)=>{
                                      return <tr key={index}>
                                          <td>{index + 1}</td>
                                          <td>{institutions.institutionName}</td>
                                          <td>{institutions.primaryEmail}</td>
                                          <td>{institutions.headOfInstitution}</td>
                                          <td>{institutions.primaryEmail}</td>
                                          <td>{institutions.instituteCode}</td>
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
                                        // onClick={() => {UpdateVendorComponent(data[--id])}}
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
          <Footer />
          </div>

        </div>
      </div>
    </>
  );
}