import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import axios from 'axios';
import React,{useState,useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Subjects() {

    const [searchTerm, setSearchTerm] = useState('');

    const [values, setValues] = useState({
        name:'',
        description:'',
        subjectTag:''
    
    }); 
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/subject')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
      },[])

      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post('http://localhost:3001/subject', values)
          .then((res) => {
            if (res.data.Status === 'Success') {
              toast.success('subject created successfully');
              navigate('/subjects')
      
            } else {
              alert('Error');
            }
          })
          .catch((err) => console.log(err));
      };

    return (
        <>
                      <ToastContainer />
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper">

                            <div className="card m-5">

                                <h5 className="card-header">Subjects</h5>

                                <div className="p-2 d-flex flex-row justify-content-end">

                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#basicModal"
                                    >
                                        + Create Subject
                                    </button>

                                    {/* Modal */}
                                    <div
                                        className="modal fade"
                                        id="basicModal"
                                        tabIndex={-1}
                                        style={{ display: 'none' }}
                                        aria-hidden="true"
                                     >
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel1">
                                                        Create Subject
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    />
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col mb-3">
                                                            <label htmlFor="nameBasic" className="form-label">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="nameBasic"
                                                                className="form-control"
                                                                placeholder="Enter Name"
                                                                onChange={(e)=>setValues({...values, name:e.target.value})}

                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="emailBasic" className="form-label">
                                                                Description
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="DescriptionBasic"
                                                                className="form-control"
                                                                placeholder="Description"
                                                                onChange={(e)=>setValues({...values, description:e.target.value})}

                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="dobBasic" className="form-label">
                                                                Subjects Tag
                                                            </label>
                                                            <select
                                                                name="institution"
                                                                class="form-control default-input ng-pristine ng-valid ng-touched"
                                                                onChange={(e)=>setValues({...values, subjectTag:e.target.value})}

                                                            >
                                                                <option value="" selected="" disabled="">
                                                                    -- Select Institution --
                                                                </option>
                                                                <option>Programming</option>
                                                                <option>Java_Programming</option>
                                                                <option>JavaScript</option>
                                                                <option>Python_Programming</option>
                                                                <option>Variables</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer d-flex flex-row justify-content-center">
                                                    <button type="button" className="btn btn-primary text-center"
                                                                           onClick={handleSubmit}
                                                                           >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                        <div class="input-group">
                                        <span class="input-group-text"><i class="tf-icons bx bx-search"></i></span>
                                         <input type="text" class="form-control" placeholder="Search..." 
                                            value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
                                         />
                                        </div>
                                <div className="table-responsive text-nowrap">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Chapters</th>
                                                <th>Tag</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-border-bottom-0">
                                        {Array.isArray(data) && data.map((subject, index)=>{
                                                if (searchTerm && !subject.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                    return null; // Skip rendering if search term is provided but does not match
                                                  }
                                      return (<tr key={index}>
                                          <td>{subject.name}</td>
                                          <td>1</td>
                                          <td><span className="badge bg-label-primary me-1">{subject.subjectTag}</span></td>
                                          <td>
                                                    <div className="dropdown">
                                                        <button
                                                            type="button"
                                                            className="btn p-0 dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="bx bx-dots-vertical-rounded" />
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="javascript:void(0);">
                                                                <i className="bx bx-edit-alt me-1" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="javascript:void(0);">
                                                                <i className="bx bx-trash me-1" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                          
                                      </tr>
                                        );
                                    })}
                                            
                                           
                                                
                                        </tbody>
                                    </table>
                                </div>
                            </div>;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}