import Sidebar from "../../includes/sidebar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
export default function VendorRegister() {
  return (
    <>
     <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              {/* #contents */}
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

      <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4">
          <span class="text-muted fw-light">Vendor Register /</span> Vendor
        </h4>

        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-pills flex-column flex-md-row mb-3">
              <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);">
                  <i class="bx bx-user me-1"></i> Vendor
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="pages-account-settings-notifications.html"
                >
                  <i class="bx bx-bell me-1"></i> Notifications
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="pages-account-settings-connections.html"
                >
                  <i class="bx bx-link-alt me-1"></i> Connections
                </a>
              </li>
            </ul>
            <div class="card mb-4">
              <h5 class="card-header">Vendor Details</h5>

              <div class="card-body"></div>
              <hr class="my-0" />
              <div class="card-body">
                <form
                  id="formAccountSettings"
                  method="POST"
                  action="/vendor-register"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="mb-3 col-md-12">
                      <label
                        for="_logo"
                        class="btn btn-primary me-2 mb-4"
                        tabindex="0"
                      >
                        <span class="d-none d-sm-block">Upload new photo</span>
                        <i class="bx bx-upload d-block d-sm-none"></i>
                        <input
                          type="file"
                          name="_logo"
                          id="_logo"
                          class="account-file-input"
                          accept="image/png, image/jpeg"
                        />
                      </label>
                      <p class="text-muted mb-0">
                        Allowed JPG, GIF or PNG. Max size of 800K
                      </p>
                    </div>
                    <div class="mb-3 col-md-12">
                      <label for="fulltName" class="form-label">
                        Full Name
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        id="_name"
                        name="_name"
                        value=""
                        placeholder="Vendor Name"
                        required="true"
                        autofocus
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="email" class="form-label">
                        E-mail
                      </label>
                      <input
                        class="form-control"
                        type="email"
                        id="_email"
                        name="_email"
                        value=""
                        placeholder="VendorName@example.com"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="BusinessName" class="form-label">
                        Business name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="_bname"
                        name="_bname"
                        value=""
                        placeholder="Business Name"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label class="form-label" for="phoneNumber">
                        Phone Number
                      </label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text">In (+91)</span>
                        <input
                          type="text"
                          id="_phone"
                          name="_phone"
                          class="form-control"
                          placeholder="9876543210"
                        />
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="address" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="_address"
                        name="_address"
                        placeholder="Address"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="state" class="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        id="_state"
                        name="_state"
                        class="form-control"
                        placeholder="State Name"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="state" class="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        id="_city"
                        name="_city"
                        class="form-control"
                        placeholder="City Name"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="zipCode" class="form-label">
                        Zip Code
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="_zipCode"
                        name="_zipCode"
                        placeholder="500321"
                        maxlength="6"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="language" class="form-label">
                        Language
                      </label>
                      <select
                        id="_language"
                        name="_language"
                        class="select2 form-select"
                      >
                        <option value="">Select Language</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-2">
                    <button type="submit" class="btn btn-primary me-2">
                      Register Vendor
                    </button>
                    <button type="reset" class="btn btn-outline-secondary">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

              <div class="content-backdrop fade"></div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
     
    </>
  );
}
