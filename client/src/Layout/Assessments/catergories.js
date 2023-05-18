/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer"
import axios from 'axios';
import React,{useState,useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function Catergories() {


    const [values, setValues] = useState({
        name:'',
        description:'',
        tag:'',
        accessType:'',
        accessPlan:'',
        display:'',
    
    }); 

const [data, setData] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/categories')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
},[])


const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(values);
  axios.post('http://localhost:3001/categorie', values)
    .then((res) => {
      if (res.data.Status === 'Success') {
        toast.success('categories created successfully');
        navigate('/catergories')

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
                            <div className="page-wrapper m-3">
                                <div className="page-content mt-4">
                                    <div contentanimate>
                                        <router-outlet />
                                        <div className="row">
                                            <div className="col-md-12 stretch-card">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row pb-3">
                                                            <div className="col-md-6">
                                                                <h6>
                                                                    <strong>Categories</strong>
                                                                </h6>
                                                            </div>
                                                            <div className="p-2 d-flex flex-row justify-content-end">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#basicModal"
                                                                >
                                                                    + Add Category
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
                                                                                <h5 className="modal-title font-weight-bold" id="exampleModalLabel1">
                                                                                    Create Category
                                                                                </h5>
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn-close"
                                                                                    data-bs-dismiss="modal"
                                                                                    aria-label="Close"
                                                                                />
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <form
                                                                                    _ngcontent-hsj-c160
                                                                                    autoComplete="off"
                                                                                    ngnativevalidate
                                                                                    className="forms-sample ng-pristine ng-invalid ng-touched"
                                                                                >
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="exampleInputName">
                                                                                            Name
                                                                                            <sup className="text-danger">
                                                                                                *
                                                                                            </sup>
                                                                                        </label>
                                                                                        <input
                                                                                            _ngcontent-hsj-c160
                                                                                            type="text"
                                                                                            required
                                                                                            name="name"
                                                                                            placeholder="Name"
                                                                                            pattern="^[a-zA-Z0-9 _-]([._ -!@#$%^&*()+-](?![._ -!@#$%^&*()+-][0-9])|[a-zA-Z0-9]){1,25}[ a-zA-Z0-9]$"
                                                                                            className="form-control ng-untouched ng-pristine ng-invalid"
                                                                                            onChange={(e)=>setValues({...values, name:e.target.value})}
                                                                                        />
                                                                                        <div _ngcontent-hsj-c160>
                                                                                            {/**/}
                                                                                            {/**/}
                                                                                        </div>
                                                                                        {/**/}
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label _ngcontent-hsj-c160>
                                                                                            Description
                                                                                            <sup className="text-danger">
                                                                                                *
                                                                                            </sup>
                                                                                        </label>
                                                                                        <textarea
                                                                                            _ngcontent-hsj-c160
                                                                                            rows={4}
                                                                                            type="text"
                                                                                            required
                                                                                            placeholder
                                                                                            name="description"
                                                                                            className="form-control w-100 pl-2 ng-pristine ng-invalid ng-touched"
                                                                                            style={{ height: 109 }}
                                                                                            defaultValue={''}
                                                                                            onChange={(e)=>setValues({...values, description:e.target.value})}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="exampleInputName">
                                                                                            Tag
                                                                                            <sup className="text-danger">
                                                                                                *
                                                                                            </sup>
                                                                                        </label>
                                                                                        <input
                                                                                            _ngcontent-hsj-c160
                                                                                            list="tags"
                                                                                            required
                                                                                            placeholder="Tag"
                                                                                            name="tag"
                                                                                            className="form-control ng-untouched ng-pristine ng-invalid"
                                                                                            onChange={(e)=>setValues({...values, tag:e.target.value})}
                                                                                        />
                                                                                        <datalist id="tags">
                                                                                            <option value="App Development" />
                                                                                            <option value="Aptitude" />
                                                                                            <option value="Banking" />
                                                                                            <option value="Biology" />
                                                                                            <option value="BITSAT" />
                                                                                            <option value="CA-Final" />
                                                                                            <option value="CAT" />
                                                                                            {/**/}
                                                                                        </datalist>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="exampleInputHead">
                                                                                            Access Type
                                                                                            <sup className="text-danger">
                                                                                                *
                                                                                            </sup>
                                                                                        </label>
                                                                                        <select
                                                                                            _ngcontent-hsj-c160
                                                                                            required
                                                                                            name="type"
                                                                                            className="form-control default-input ng-untouched ng-pristine ng-invalid"
                                                                                            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                                                                            onChange={(e)=>setValues({...values, accessType:e.target.value})}
                                                                                        >
                                                                                            <option value selected disabled>
                                                                                                Access Type
                                                                                            </option>
                                                                                            <option >
                                                                                                All
                                                                                            </option>
                                                                                            <option >
                                                                                                Restricted
                                                                                            </option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="exampleInputHead">
                                                                                            Access Plan
                                                                                            <sup className="text-danger">
                                                                                                *
                                                                                            </sup>
                                                                                        </label>
                                                                                        <select
                                                                                            _ngcontent-hsj-c160
                                                                                            required
                                                                                            name="accessplan"
                                                                                            className="form-control default-input ng-untouched ng-pristine ng-invalid"
                                                                                            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                                                                            onChange={(e)=>setValues({...values, accessPlan:e.target.value})}
                                                                                        >
                                                                                            <option value selected disabled>
                                                                                                Access Plan
                                                                                            </option>
                                                                                            <option >
                                                                                                Free
                                                                                            </option>
                                                                                            <option >
                                                                                                Retail
                                                                                            </option>
                                                                                        </select>
                                                                                    </div>
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="exampleInputHead">
                                                                                            Display
                                                                                            <sup className="text-danger">
                                                                                                *
                                                                                            </sup>
                                                                                        </label>
                                                                                        <select
                                                                                            _ngcontent-hsj-c160
                                                                                            required
                                                                                            name="type"
                                                                                            className="form-control default-input ng-untouched ng-pristine ng-invalid"
                                                                                            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                                                                            onChange={(e)=>setValues({...values, display:e.target.value})}
                                                                                        >
                                                                                            <option value selected disabled>
                                                                                                status
                                                                                            </option>
                                                                                            <option >
                                                                                                No
                                                                                            </option>
                                                                                            <option >
                                                                                                Yes
                                                                                            </option>
                                                                                        </select>
                                                                                        <small className="text-danger d-none">
                                                                                            Vendor Type is required
                                                                                        </small>
                                                                                    </div>
                                                                                    <div className="mt-3 text-center">
                                                                                        <button
                                                                                            _ngcontent-hsj-c160
                                                                                            type="submit"
                                                                                            className="btn btn-primary mr-2 mb-2 mb-md-0"
                                                                                            onClick={handleSubmit}
                                                                                        >
                                                                                            Submit
                                                                                        </button>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>;

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="template-body tab-bg">
                                                            <div className="table-responsive">
                                                                <div
                                                                    id="DataTables_Table_4_wrapper"
                                                                    className="dataTables_wrapper no-footer"
                                                                >
                                                                    <table

                                                                        datatable
                                                                        className="table table-bordered row-border dataTable no-footer"
                                                                        id="DataTables_Table_4"
                                                                        aria-describedby="DataTables_Table_4_info"
                                                                    >
                                                                        <thead

                                                                            className="text-center thead-instacks"
                                                                        >
                                                                            <tr>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="sorting sorting_asc"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_4"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-sort="ascending"
                                                                                    aria-label="S.No: activate to sort column descending"
                                                                                    style={{ width: '54.15px' }}
                                                                                >
                                                                                    S.No
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_4"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Category: activate to sort column ascending"
                                                                                    style={{ width: '259.075px' }}
                                                                                >
                                                                                    Category
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_4"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Access Type: activate to sort column ascending"
                                                                                    style={{ width: '117.662px' }}
                                                                                >
                                                                                    Access Type
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_4"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Assessments #: activate to sort column ascending"
                                                                                    style={{ width: '143.887px' }}
                                                                                >
                                                                                    Assessments #
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_4"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Display: activate to sort column ascending"
                                                                                    style={{ width: '81.075px' }}
                                                                                >
                                                                                    Display
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_4"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Actions: activate to sort column ascending"
                                                                                    style={{ width: '242.15px' }}
                                                                                >
                                                                                    Actions
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="text-center">
                                  {Array.isArray(data) && data.map((categories, index)=>{
                                      return <tr key={index}>
                                              <td>{index + 1}</td>
                                          <td>{categories.name}</td>
                                          <td>{categories.accessType}</td>
                                          <td>{index + 1}</td>
                                          <td>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`updateStatus${index}`}
            checked={categories.display === "Yes"} 
          />
          <label
            className="custom-control-label"
            htmlFor={`updateStatus${index}`}
          />
        </div>
      </td>
<td>
<a
    className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1"
    href="#"
>
    Access
</a>
<a
    className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
    style={{ cursor: 'pointer' }}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
    </svg>
</a>
<a
    className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
    style={{ cursor: 'pointer' }}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
    </svg>
</a>
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
                            </div>;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}