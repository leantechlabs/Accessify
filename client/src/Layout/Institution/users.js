import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
export default function InstitutionUsers() {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              <div class="mt-5">
                <div class="page-content">
                  <div class="row justify-content-center">
                    <div class="col-md-11 stretch-card">
                      <div class="card row">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-6">
                              <h6>
                                <strong>Filter Users:</strong>
                              </h6>
                            </div>
                            <div class="col-md-6 float-right">
                              <Link
                                class="btn btn-dark float-right"
                               to="/add-institution-users"
                              >
                                + Create Users
                              </Link>
                            </div>
                          </div>
                          <form
                            action=""
                            class="row ng-untouched ng-pristine ng-invalid"
                          >
                            <div class="col-md form-group">
                              <select
                                formcontrolname="institute"
                                name="_institution"
                                id="_institution"
                                class="form-select default-input ng-untouched ng-pristine ng-invalid"
                              >
                                <option value="" selected="">
                                  -- Select Institution --
                                </option>
                                <option value="">Coign_Practise</option>
                                <option value="">VIEW_2024_POs</option>
                              </select>
                              <small>
                                <strong>Select Institution</strong>
                              </small>
                            </div>
                            <div class="col-md form-group">
                              <select
                                formcontrolname="batch_year"
                                name="_batch_year"
                                id="_batch_year"
                                class="form-select default-input ng-untouched ng-pristine ng-invalid"
                              >
                                <option value="" selected="">
                                  -- Select Batch Year --
                                </option>
                              </select>
                              <small>
                                <strong>Select Batch Year</strong>
                              </small>
                            </div>
                            <div class="col-md form-group">
                              <select
                                formcontrolname="batch"
                                name="_batch"
                                id="_batch"
                                class="form-select default-input ng-untouched ng-pristine ng-valid"
                              >
                                <option value="">-- Select Batch --</option>
                              </select>
                              <small>
                                <strong>Select Batch</strong>
                              </small>
                            </div>
                            <div class="col-md form-group">
                              <button
                                type="submit"
                                class="btn btn-primary mx-2"
                              >
                                Go
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center mt-2">
                    <div class="col-md-11 stretch-card">
                      <div class="card row">
                        <div class="card-body">
                          <table
                            datatable=""
                            class="table table-bordered row-border hover"
                          >
                            <thead
                              class="text-center"
                              style={{backgroundColor: "#D0D2D5"}}
                            >
                              <tr>
                                <th name="_sno" id="_sno">
                                  S.No
                                </th>
                                <th name="_name" id="_name">
                                  Name
                                </th>
                                <th name="_email" id="_email">
                                  Email
                                </th>
                                <th name="_regd" id="_regd">
                                  Regd
                                </th>
                                <th name="_mobile" id="_mobile">
                                  Mobile
                                </th>
                                <th name="_status" id="_status">
                                  Status
                                </th>
                                <th name="_actions" id="_actions">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody class="text-center">
                              <td>1</td>
                              <td>Ravi</td>
                              <td>test@gmail.com</td>
                              <td>1453</td>
                              <td>98654310</td>
                              <td>Active</td>
                              <td>Hello</td>
                            </tbody>
                            <tbody class="text-center"></tbody>
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
