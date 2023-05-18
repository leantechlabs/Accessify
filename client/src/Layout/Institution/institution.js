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
    axios.get('http://localhost:3001/institutions')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
},[])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.post('http://localhost:3001/institution', values)
      .then((res) => {
        if (res.data.Status === 'Success') {
            toast.success('Batch created successfully');
            const timeout = setTimeout(() => {
              window.location.reload();
            }, 5000); // Reload after 5 seconds
        
            return () => clearTimeout(timeout);
        } else {
              alert('College Already Exists');
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
                        <div className="mt-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#basicModal"
                            
                          >
                            Create Institution
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
<a
    className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1"
    href="#"
>
    Access
</a>
<a
    className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
    style={{ cursor: 'pointer' }}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
    </svg>
</a>
<a
    className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
    style={{ cursor: 'pointer' }}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
    </svg>
</a>
</td>
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
          <Footer />
          </div>

        </div>
      </div>
    </>
  );
}