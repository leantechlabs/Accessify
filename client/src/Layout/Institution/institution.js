import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function Institution() {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              <div class="card-body" id="alert-model">
                <div class="alert alert-danger alert-dismissible" role="alert">
                  <span></span>

                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>

              <div class="container-xxl flex-grow-1 container-p-y mx-4 my-4" style={{marginTop:"20%"}}>
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Institution Name"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Head of Institution Name"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Primary Email"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Primary Contact"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Secondary Email"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Secondary Contact"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Address"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="City"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="State"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Institution Code"
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
                                            value=""
                                            required="true"
                                            autofocus
                                            placeholder="Password"
                                          />
                                        </div>

                                        <div class="mt-2">
                                          <button
                                            type="submit"
                                            class="btn btn-primary me-2"
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
