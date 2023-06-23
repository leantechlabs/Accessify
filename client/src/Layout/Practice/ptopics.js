import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import React,{useState,useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function Ptopics() {
  const [values, setValues] = useState({
    categories:'',
    name:'',
    description:''

}); 
const [data, setData] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/ptopics')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
},[])

  const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(values);
  axios.post('http://localhost:3001/ptopics', values)
    .then((res) => {
      if (res.data.Status === 'Success') {
        toast.success('ptopics created successfully');
        navigate('/ptopics')

      } else {
        alert('Error');
      }
    })
    .catch((err) => console.log(err));
};
    return(
        <>
                   <ToastContainer />
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
                      <h6 class="row g-2" id="modalCenterTitle">
                        Create Topic :
                      </h6>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
            
                    <div class="modal-body">
                      <div class="row g-2">
                        <div class="form-group">
                        <label> Category <sup className="text-danger"> * </sup>
                        </label>
                        <select name="category" id="" formcontrolname="category_type" 
                         class="form-control ng-pristine ng-invalid ng-touched"
                         onChange={(e)=>setValues({...values, categories:e.target.value})}
                         >
                            <option value="Access_Daily" selected="">accessify_DAILY</option>
                            <option value="accessify_yearly">accessify_YEARLY</option>
                            </select>
                        </div>
                    <div className="form-group">
                        <label> Name <sup className="text-danger"> * </sup>
                        </label>
                        <input
                            type="text"
                            id="name"
                            class="form-control"
                            placeholder="Name"
                            onChange={(e)=>setValues({...values, name:e.target.value})}

                          />
                          </div>
                          <br></br>
                    <div className="form-group">
                        <label> Description <sup className="text-danger"> * </sup>
                        </label>
                        <textarea  rows={4} type="text" required placeholder name="description" className="form-control w-100 pl-2 ng-pristine ng-invalid ng-touched" style={{ height: 109 }}
                        onChange={(e)=>setValues({...values, description:e.target.value})}
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
                      <button type="button" class="btn btn-primary" id="Submit"
                       onClick={handleSubmit}
                       >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4 d-flex justify-content-between align-items-center">
              <span>Topics: </span> 
              <button type="button" class="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#modalCenter">
              + Add Topic</button>
            </h4>
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row">
                      
                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
                                         <div className="dataTables_length" id="DataTables_Table_0_length">
                                            <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className>
                                                     <option value={10}>10</option>
                                                     <option value={25}>25</option>
                                                     <option value={50}>50</option>
                                                     <option value={100}>100</option>
                                                 </select> entries</label></div>
                                         <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                         <br></br><label>Search:<input type="search" className placeholder aria-controls="DataTables_Table_0" /></label>
                                         
                                         </div>
                                         <br></br>
                                         <table  datatable className="table table-bordered row-border dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                             <thead  className="text-center thead-instacks">
                                                 <tr >
                                                     <th  scope="col" className="sorting sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{width: '32.4583px'}}>S.No</th>
                                                     <th  scope="col" className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Category : activate to sort column ascending" style={{width: '305.083px'}}>Category</th>
                                                     <th  scope="col" className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Topic Name: activate to sort column ascending" style={{width: '170.208px'}}>Topic Name</th>
                                                     <th  scope="col" className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Actions: activate to sort column ascending" style={{width: '160.729px'}}>Actions</th>
                                                 </tr>
                                             </thead>
                                             <tbody  className="text-center">
                                             {Array.isArray(data) && data.map((Pcategories, index)=>{
                                      return <tr key={index}>
                                          <td>{index + 1}</td>
                                          <td>{Pcategories.categories}</td>
                                          <td>{Pcategories.name}</td>
                                          <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td> 
                                          
                                      </tr>
                                    })} 
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
        </>
    );
}