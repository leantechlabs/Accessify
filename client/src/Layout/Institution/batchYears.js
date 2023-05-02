import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function BatchYears() {
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
                      <div class="row">
                        <div class="col mb-3">
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
                      <button type="button" class="btn btn-primary">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">Filter-Batch Years </h4>

                <div class="card mb-4">
                  <h5 class="card-header">Select Institution :</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md">
                        <select
                          _ngcontent-qfm-c181=""
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
