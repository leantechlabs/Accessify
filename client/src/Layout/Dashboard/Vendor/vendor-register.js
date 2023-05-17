import Sidebar from "../../includes/sidebar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import urls from "../../../CorsUrls";
import axios from "axios";
axios.defaults.withCredentials = true;
export default function VendorRegister() {
  const [values, setValues] = useState({
    logo: "",
    fullname: "",
    email: "",
    businessname: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    language: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form validation
    if (!values.fullname || !values.email || !values.businessname || !values.phone || !values.address || !values.state || !values.city || !values.zip || !values.language || !values.password) {
      setError("Please fill in all required fields");
      return;
    }
    try{
      axios
      .post('http://localhost:3001/vendor-register', values)
      .then((res) => {
        if (res.data.Status === "Success") {
          setError("Vendor Registered Successfully");
        } else {
          setError(res.data.Error);
        }
      })
      .then((err) => console.log(err));
    }
    catch(error){
        setError("Server Error ");
        return;
    }
   
  };
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
                <h4 class="fw-bold py-3 mb-4">
                  <span class="text-muted fw-light">Vendor Register </span>
                </h4>

                <div class="row">
                  <div class="col-md-12">
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
                            {/* <div class="mb-3 col-md-12">
                              <label
                                for="_logo"
                                class="btn btn-primary me-2 mb-4"
                                tabindex="0"
                              >
                                <span class="d-none d-sm-block">
                                  Upload new photo
                                </span>
                                <i class="bx bx-upload d-block d-sm-none"></i>
                                <input
                                  type="file"
                                  name="_logo"
                                  id="_logo"
                                  class="account-file-input"
                                  accept="image/png, image/jpeg"
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      logo: e.target.files,
                                    })
                                  }
                                />
                              </label>
                              <p class="text-muted mb-0">
                                Allowed JPG, GIF or PNG. Max size of 800K
                              </p>
                            </div> */}
                            <div class="mb-3 col-md-12">
                              <label for="fulltName" class="form-label">
                                Full Name
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                id="_name"
                                name="_name"
                                placeholder="Vendor Name"
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    fullname: e.target.value,
                                  })
                                }
                                autofocus
                                required
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
                                placeholder="VendorName@example.com"
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    email: e.target.value,
                                  })
                                }
                                required
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
                                placeholder="Business Name"
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    businessname: e.target.value,
                                  })
                                }
                                required
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
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      phone: e.target.value,
                                    })
                                  }
                                  required
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
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    address: e.target.value,
                                  })
                                }
                                required
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
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    state: e.target.value,
                                  })
                                }
                                required
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
                                onChange={(e) =>
                                  setValues({ ...values, city: e.target.value })
                                }
                                required
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
                                onChange={(e) =>
                                  setValues({ ...values, zip: e.target.value })
                                }
                                required
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
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    language: e.target.value,
                                  })
                                }
                                required
                              >
                                <option value="">Select Language</option>
                                <option value="en">English</option>
                              </select>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="language" class="form-label">
                                Password
                              </label>
                              <input
                                id="_password"
                                name="_password"
                                class="form-control"
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    password: e.target.value,
                                  })
                                }
                                required
                              ></input>
                            </div>
                          </div>
                          <br></br>
                          {error && (
                            <div className="alert alert-danger">{error}</div>
                          )}
                          <br></br>
                          <div class="mt-2">
                            <button
                              type="submit"
                              onClick={handleSubmit}
                              class="btn btn-primary me-2"
                            >
                              Register Vendor
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
