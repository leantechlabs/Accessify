import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import Axios from 'axios';
import React,{useState,useEffect} from "react"
export default function Institution() {
    const [institutionName, setInstitutionName] = useState('');
    const [headofinstitution, setHeadOfInstitution] = useState('');
    const [primaryemail, setPrimaryEmaill] = useState('');
    const [primarycontact, setPrimaryContact] = useState('');
    const [secondarycontact, setSecondaryContact] = useState('');
    const [secondaryemail, setSecondaryEmail] = useState('');
    const [address, setAddress] = useState('');
    const [institutioncode, setInstitutionCode] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [InstitutionType, setInstitutionType] = useState('');

  
    const handleSubmit = () => {
      const data = { institutionName,headofinstitution,primarycontact,primaryemail,secondarycontact,secondaryemail,address,institutioncode,state,city,password,InstitutionType};
      Axios.post('http://localhost:3001/institution', data)
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
              

              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="card">
                  <div class="inline-flexbox">
                    <h5 class="card-header">Institutions</h5>
                    <div class="modal-footer">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="mt-3">
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#basicModal"
                          >
                            Create Institution
                          </button>

                          <div
                            class="modal fade"
                            id="basicModal"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <div class="">
                                    <h4
                                      class="card-header"
                                    //   style={{color:"black"}}
                                    >
                                      Create Institution
                                    </h4>

                                    <div class="card-body my-2">
                                      <div class="row">
                                        <div class="mb-3 col-md-12">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b>
                                              Institution Name<sup>*</sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_instituteName"
                                            name="_instituteName"
                                            required="true"
                                            autofocus
                                            placeholder="Institution Name"
                                            onChange={(e) =>setInstitutionName(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-12">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b >
                                              Head of Institution Name
                                              <sup>
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_headOfInstitute"
                                            name="_headOfInstitute"
                                            required="true"
                                            autofocus
                                            placeholder="Head of Institution Name"
                                            onChange={(e) =>setHeadOfInstitution(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b >
                                              Primary Email
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_primaryEmail"
                                            name="_primaryEmail"
                                            required="true"
                                            autofocus
                                            placeholder="Primary Email"
                                            onChange={(e) =>setPrimaryEmaill(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b >
                                              Primary Contact
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_primaryContact"
                                            name="_primaryContact"
                                            required="true"
                                            autofocus
                                            placeholder="Primary Contact"
                                            onChange={(e) =>setPrimaryContact(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b >
                                              Secondary Email
                                              <sup>
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_secondaryEmail"
                                            name="_secondaryEmail"
                                            required="true"
                                            autofocus
                                            placeholder="Secondary Email"
                                            onChange={(e) =>setSecondaryEmail(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b>
                                              Secondary Contact
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_secondaryContact"
                                            name="_secondaryContact"
                                            required="true"
                                            autofocus
                                            placeholder="Secondary Contact"
                                            onChange={(e) =>setSecondaryContact(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-12">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b >
                                              Address
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_address"
                                            name="_address"
                                            required="true"
                                            autofocus
                                            placeholder="Address"
                                            onChange={(e) =>setAddress(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b >
                                              City
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_city"
                                            name="_city"
                                            required="true"
                                            autofocus
                                            placeholder="City"
                                            onChange={(e) =>setCity(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b >
                                              State
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_state"
                                            name="_state"
                                            required="true"
                                            autofocus
                                            placeholder="State"
                                            onChange={(e) =>setState(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b>
                                              Institution Code
                                              <sup >
                                                *
                                              </sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_instituteCode"
                                            name="_instituteCode"
                                            required="true"
                                            autofocus
                                            placeholder="Institution Code"
                                            onChange={(e) =>setInstitutionCode(e.target.value)}

                                          />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                          <label
                                            for="instituteType"
                                            class="form-label"
                                          >
                                            <b>
                                              Institution Type
                                            </b>
                                          </label>
                                          <select
                                            class="form-select"
                                            id="instituteType"
                                            aria-label="Default select example"
                                            onChange={(e) =>setInstitutionType(e.target.value)}
                                          >
                                            <option selected>
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
                                        <div class="mb-3 col-md-10">
                                          <label
                                            for="tutorname"
                                            class="form-label"
                                          >
                                            <b>
                                              Password<sup>*</sup>
                                            </b>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            id="_password"
                                            name="_password"
                                            required="true"
                                            autofocus
                                            placeholder="Password"
                                            onChange={(e) =>setPassword(e.target.value)}

                                          />
                                        </div>

                                        <div class="mt-2">
                                          <button
                                            type="submit"
                                            class="btn btn-primary me-2"
                                            onClick={handleSubmit}
                                          >
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container-md flex-grow-1 container-p-y">
                    <div class="card">
                      <div class="container-md flex-grow-1 container-p-y ">
                        <div class="table-responsive text-nowrap">
                          <table class="table table-striped">
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
                            <tbody class="table-border-bottom-0">
                              <tr>
                                <td>1</td>
                                <td>ABC</td>
                                <td>Abc@gmail.com</td>
                                <td>ABC</td>
                                <td>10</td>
                                <td>
                                  <button type="button" class="btn btn-primary">
                                    abc
                                  </button>
                                </td>
                                <td>
                                  <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li class="mx-2">
                                      <button
                                        type="button"
                                        class="btn btn-info"
                                      >
                                        <i class="bx bx-show"></i>
                                      </button>
                                    </li>
                                    <li class="mx-2">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                      >
                                        <i class="bx bx-pencil"></i>
                                      </button>
                                    </li>
                                    <li class="mx-2">
                                      <button
                                        type="button"
                                        class="btn btn-danger"
                                      >
                                        <i class="bx bx-trash"></i>
                                      </button>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>ABC</td>
                                <td>Abc@gmail.com</td>
                                <td>ABC</td>
                                <td>10</td>
                                <td>
                                  <button type="button" class="btn btn-primary">
                                    abc
                                  </button>
                                </td>
                                <td>
                                  <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li class="mx-2">
                                      <button
                                        type="button"
                                        class="btn btn-info"
                                      >
                                        <i class="bx bx-show"></i>
                                      </button>
                                    </li>
                                    <li class="mx-2">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                      >
                                        <i class="bx bx-pencil"></i>
                                      </button>
                                    </li>
                                    <li class="mx-2">
                                      <button
                                        type="button"
                                        class="btn btn-danger"
                                      >
                                        <i class="bx bx-trash"></i>
                                      </button>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
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
