import React, { useState, useEffect } from 'react';
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function StaffProfile() {
  const [user,setUser] = useState([])
  
  const [values, setValues] = useState({
    password:'',
    confirmPassword:'',
  });


  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadedImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    const formData = new FormData();
    
    formData.append('avatar', selectedFile);
    formData.append('email',user.email)

    axios.post('http://localhost:3001/upload', formData)
    .then((res) => {
        if(res.data.Status === "Success"){
          console.log("Succeded")
          toast.success(res.data.Message)
        }else{
          console.log("Failed")
        }
    })
    .catch((error) => {
      console.error(error);
    });}


    const handleChangePassword = (e) => {
      e.preventDefault();
      if (values.password !== values.confirmPassword) {
        toast.warning('Passwords do not match');
        return;
      }

      axios
        .post('http://localhost:3001/changePassword', {
          email: user.email,
          password: values.password,
        })
        .then((response) => {
          toast.success(response.data.message);
          const timeout = setTimeout(() => {
            window.location.reload();
          }, 5000); // Reload after 5 seconds
      
          return () => clearTimeout(timeout);
        })
        .catch((error) => {
          console.error('Error updating password: ', error);
          toast.warning('An error occurred while updating the password');
        });
    };


  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(res => setUser(res.data))
    .catch(err => console.log(err));
},[])



  return (
    <> <ToastContainer />
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
      <Sidebar />
      <div class="layout-page">
              <Header />
              <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
        
              <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account Settings /</span>  {user.isAdmin ? (<>Admin</>):(<>Vendor</>)}</h4>
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-4">
                    <h5 class="card-header">Profile Details</h5>
                    <div class="card-body">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                      {uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="user-avatar"
                          className="d-block rounded"
                          height="100"
                          width="100"
                        />
                        ) : (
                          user.filename ? (
                            <img
                              src={`http://localhost:3001/images/`+ user.filename}
                              alt="user-avatar"
                              className="d-block rounded"
                              height="100"
                              width="100"
                            />
                          ) : (
                            <img
                              src="../assets/img/avatars/1.png"
                              alt="default-avatar"
                              className="d-block rounded"
                              height="100"
                              width="100"
                            />
                          )
                        )}
                        <div className="button-wrapper">
                        <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex="0">
                          <span className="d-none d-sm-block">Upload new photo</span>
                          <i className="bx bx-upload d-block d-sm-none"></i>
                          <input
                              type="file"
                              id="upload"
                              className="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                              onChange={handleFileChange}
                            />
                        </label>
                        <button type="button"  disabled={!selectedFile} onClick={handleUpload} className="btn btn-success me-2 mb-4">
                          <i className="bx bx-reset d-block d-sm-none"></i>
                          <span className="d-none d-sm-block">Save</span>
                        </button>

                        <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                      </div>
                    </div>
                    <hr class="my-0"/>
                    <div class="card-body">
                      
                    {user.isAdmin ? (
                          <form id="formAccountSettings">
                          <div class="row">
                            <div class="mb-3 col-md-6">
                              <label for="firstName" class="form-label">First Name</label>
                              <input class="form-control" type="text" id="firstName" name="firstName" value={user.name} autofocus="" />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="lastName" class="form-label">Last Name</label>
                              <input class="form-control" type="text" name="lastName" id="lastName" value=""/>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="email" class="form-label">E-mail</label>
                              <input class="form-control" type="text" id="email" name="email" value={user.email} placeholder="" disabled/>
                            </div>
                            
                            <div class="mb-3 col-md-6">
                              <label class="form-label" for="phoneNumber">Phone Number</label>
                              <div class="input-group input-group-merge">
                                <span class="input-group-text">IND (+91)</span>
                                <input type="text" id="phoneNumber" name="phoneNumber" class="form-control" placeholder="202 555 0111"/>
                              </div>
                            </div>
                            <div class="mb-3 col-md-12">
                              <label for="address" class="form-label">Address</label>
                              <input type="text" class="form-control" id="address" name="address" placeholder="Address"/>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="state" class="form-label">State</label>
                              <input class="form-control" type="text" id="state" name="state" placeholder="California"/>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="zipCode" class="form-label">Zip Code</label>
                              <input type="text" class="form-control" id="zipCode" name="zipCode" placeholder="231465" maxlength="6"/>
                            </div>
                          </div>
                          <div class="mt-2">
                            <button type="submit" class="btn btn-primary me-2">Save changes</button>
                          </div>
                        </form>
                        ) : (
                          <form id="formAccountSettings">
                          <div class="row">
                            <div class="mb-3 col-md-6">
                              <label for="firstName" class="form-label">First Name</label>
                              <input class="form-control" type="text" id="firstName" name="firstName" value={user.name} autofocus="" />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="lastName" class="form-label">Last Name</label>
                              <input class="form-control" type="text" name="lastName" id="lastName" value=""/>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="email" class="form-label">E-mail</label>
                              <input class="form-control" type="text" id="email" name="email" value={user.email} placeholder="" disabled/>
                            </div>
                            
                            <div class="mb-3 col-md-6">
                              <label class="form-label" for="phoneNumber">Phone Number</label>
                              <div class="input-group input-group-merge">
                                <span class="input-group-text">IND (+91)</span>
                                <input type="text" id="phoneNumber" name="phoneNumber" class="form-control" placeholder="202 555 0111"/>
                              </div>
                            </div>
                            <div class="mb-3 col-md-12">
                              <label for="address" class="form-label">Address</label>
                              <input type="text" class="form-control" id="address" name="address" placeholder="Address"/>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="state" class="form-label">State</label>
                              <input class="form-control" type="text" id="state" name="state" placeholder="California"/>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="zipCode" class="form-label">Zip Code</label>
                              <input type="text" class="form-control" id="zipCode" name="zipCode" placeholder="231465" maxlength="6"/>
                            </div>
                          </div>
                          <div class="mt-2">
                            <button type="submit" class="btn btn-primary me-2">Save changes</button>
                          </div>
                        </form>
                        )}
                    </div>

                  </div>
                  
                </div>
                <div class="col-md-6">
                <div class="card mb-4">
                <h5 class="card-header">Change Password</h5>
                <div class="card-body">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                      <form id="formAccountSettings">
                        <div class="row">
                          <div class="mb-3 col-md-12">
                            <label for="password" class="form-label">password</label>
                            <input class="form-control" type="password" id="password" name="password" value={values.password} placeholder="Password" autofocus=""
                            onChange={e=>setValues({...values, password:e.target.value})}/>
                          </div>
                          
                          <div class="mb-3 col-md-12">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input class="form-control" type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} placeholder="Confirm Password"
                            onChange={e=>setValues({...values, confirmPassword:e.target.value})}/>
                          </div>
                          </div>
                          <div class="mt-2">
                          <button type="submit" class="btn btn-primary me-2" onClick={handleChangePassword}>Change Password</button>
                        </div>
                      </form>
                      </div>
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
