import Sidebar from "../../includes/sidebar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
export default function ManageVendor() {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              {/* #contents */}
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="d-flex align-items-center justify-content-between">
                  <h4 class="fw-bold py-3 mb-4">
                    <span class="text-muted fw-light">Vendors /</span> Add &
                    Remove
                  </h4>
                  <button class="btn btn-primary" >
                    <strong>Add User</strong>
                  </button>
                </div>
                <div class="card">
                  <h5 class="card-header">List of Vendors</h5>
                  <div class="table-responsive text-nowrap">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th> Name</th>
                          <th>Role</th>
                          <th> Status</th>
                          <th> Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                        <tr>
                          <td>
                            <i class="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                            <strong>Rakesh</strong>
                          </td>
                          <td>Webdev</td>

                          <td>
                            <span class="badge bg-label-success me-1">
                              Completed
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
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-edit-alt me-1"></i> Edit
                                </a>
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
                        <tr>
                          <td>
                            <i class="fab fa-vuejs fa-lg text-success me-3"></i>{" "}
                            <strong>Vamsayya</strong>
                          </td>
                          <td>Pens Tester</td>
                          <td>
                            <span class="badge bg-label-info me-1">
                              Scheduled
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
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-edit-alt me-1"></i> Edit
                                </a>
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
                        <tr>
                          <td>
                            <i class="fab fa-bootstrap fa-lg text-primary me-3"></i>{" "}
                            <strong>Setuji</strong>
                          </td>
                          <td>Backer</td>
                          <td>
                            <span class="badge bg-label-warning me-1">
                              Pending
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
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-edit-alt me-1"></i> Edit
                                </a>
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
