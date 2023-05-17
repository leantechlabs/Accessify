import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import axios from 'axios';
import React,{useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';



export default function BatchYears() {
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState({
    institutionName:'',
    year:''
}); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/createInstitutions');
        setOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const [error, setError] = useState('');
  const navigate = useNavigate()

  // const handleClick = (e) => {
  //   e.preventDefault();
    
  //   console.log(values);
  //   axios.post('http://localhost:3001/batchYear', values)
  //     .then((res) => {
  //       if (res.data.Status === 'Success') {
  //         navigate('/batch-years') 
  //         window.location.reload()
  //       } else {
  //         setError(res.data.Error);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }
  const handleClick = async () => {
    // Perform form validation
    const validationErrors = {};
    if (!values.institutionName) {
      validationErrors.institutionName = 'Institution is required';
    }
    if (!values.year) {
      validationErrors.year = 'Batch-Year is required';
    }

    // If there are validation errors, set the errors state and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    // Clear any previous errors
    setError({});

    try {
      await axios.post('http://localhost:3001/batchYear', values);
      console.log('Record created successfully');
      // Reset the form values
      setValues({
        institutionName: '',
        year: ''
      });
    } catch (error) {
      console.error('Error creating record: ', error);
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
                        Create Batch Year
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                    <div class="row g-2">
                        <div class="col mb-0">
                          <label
                            for="nameWithTitle"
                            class="form-label"
                            required
                          >
                            Institution
                            <span class="text-danger"> *</span>{" "}
                          </label>
                          <select
                            
                            class="form-control default-input ng-pristine ng-valid ng-touched"
                            onChange={e=>setValues({...values, institutionName:e.target.value})}
                          >
                            <option value="selected">
                              -- Select Institution --
                            </option>
                            {options.map(option => (
                            <option key={option.id} value={option.institutionName}>{option.institutionName}</option>
                            ))}
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
                            name="year"
                            required
                            class="form-control"
                            placeholder="Enter Your Batch Year"
                            onChange={e=>setValues({...values, year:e.target.value})}
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
                      <button type="button" class="btn btn-primary"  onClick={handleClick}
>
                        Create
                      </button>
                    </div>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>
              </div>
              <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4 d-flex justify-content-between align-items-center">
              <span>Filter - Batch Years</span> 
              <button type="button" class="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#modalCenter">
              + Create Batch Year</button>
            </h4>



                
              
                <div class="card mb-4">
                  <h5 class="card-header">Select Institution :</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md">
                      <select
                            defaultValue="selected"
                            class="form-control default-input ng-pristine ng-valid ng-touched"
                            onChange={e=>setValues({...values, institutionName:e.target.value})}
                          >
                            <option value="selected">
                              -- Select Institution --
                            </option>
                            {options.map(option => (
                            <option key={option.id} value={option.institutionName}>{option.institutionName}</option>
                            ))}
                          </select>
                      </div>
                      <div _ngcontent-qfm-c181="" class="col-md">
                        <button
                          _ngcontent-qfm-c181=""
                          type="button"
                          class="btn btn-primary mx-2"
s
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
