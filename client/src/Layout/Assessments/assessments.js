/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import { Link } from "react-router-dom";
export default function Assessments() {
    return (
        <>
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
                                                                    <strong>Assessment List</strong>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-6 d-flex flex-row justify-content-end">
                                                                <Link type="button" className="btn btn-primary" to="/create-assessment">
                                                                    + Create Assessment
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="template-body tab-bg">
                                                            <div className="table-responsive">
                                                                <div
                                                                    id="DataTables_Table_7_wrapper"
                                                                    className="dataTables_wrapper no-footer"
                                                                >
                                                                    <table
                                                                        datatable
                                                                        className="table table-bordered row-border dataTable no-footer"
                                                                        id="DataTables_Table_7"
                                                                        aria-describedby="DataTables_Table_7_info"
                                                                    >
                                                                        <thead className="text-center">
                                                                            <tr>
                                                                                <th

                                                                                    className="sorting sorting_asc"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-sort="ascending"
                                                                                    aria-label="S.No: activate to sort column descending"
                                                                                    style={{ width: '28.5625px' }}
                                                                                >
                                                                                    S.No
                                                                                </th>
                                                                                <th

                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Exam ID: activate to sort column ascending"
                                                                                    style={{ width: '50.375px' }}
                                                                                >
                                                                                    Exam ID
                                                                                </th>
                                                                                <th

                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Exam Series: activate to sort column ascending"
                                                                                    style={{ width: '176.312px' }}
                                                                                >
                                                                                    Exam Series
                                                                                </th>
                                                                                <th

                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Exam Name: activate to sort column ascending"
                                                                                    style={{ width: '268.462px' }}
                                                                                >
                                                                                    Exam Name
                                                                                </th>
                                                                                <th

                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Password: activate to sort column ascending"
                                                                                    style={{ width: '75.1125px' }}
                                                                                >
                                                                                    Password
                                                                                </th>
                                                                                <th

                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Ques Selection: activate to sort column ascending"
                                                                                    style={{ width: '96.75px' }}
                                                                                >
                                                                                    Ques Selection
                                                                                </th>
                                                                                <th

                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Display: activate to sort column ascending"
                                                                                    style={{ width: '47.975px' }}
                                                                                >
                                                                                    Display
                                                                                </th>
                                                                                <th

                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_7"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Actions: activate to sort column ascending"
                                                                                    style={{ width: '234.5px' }}
                                                                                >
                                                                                    Actions
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="text-center">
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>l8a72vu5 </td>
                                                                                <td>ZOHO</td>
                                                                                <td>Test paper -1</td>
                                                                                <td />
                                                                                <td>Manual</td>
                                                                                <td>
                                                                                    <div

                                                                                        className="custom-control custom-switch"
                                                                                    >
                                                                                        <input

                                                                                            type="checkbox"
                                                                                            className="custom-control-input"
                                                                                            id="updateStatusl8a72vu5"
                                                                                        />
                                                                                        <label

                                                                                            className="custom-control-label"
                                                                                            htmlFor="updateStatusl8a72vu5"
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-warning text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/view-assessment/l8a72vu5"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-secondary text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/download-assessment/l8a72vu5"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l8a72vu5/edit"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l81bb594/l8a72vu5/access"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        data-toggle="modal"
                                                                                        data-target="#deleteAdmin"
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>2</td>
                                                                                <td>l8nyei3j </td>
                                                                                <td>GRAND TEST</td>
                                                                                <td>GRAND TEST_SET 1</td>
                                                                                <td />
                                                                                <td>Manual</td>
                                                                                <td>
                                                                                    <div

                                                                                        className="custom-control custom-switch"
                                                                                    >
                                                                                        <input

                                                                                            type="checkbox"
                                                                                            className="custom-control-input"
                                                                                            id="updateStatusl8nyei3j"
                                                                                        />
                                                                                        <label

                                                                                            className="custom-control-label"
                                                                                            htmlFor="updateStatusl8nyei3j"
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-warning text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/view-assessment/l8nyei3j"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-secondary text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/download-assessment/l8nyei3j"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l8nyei3j/edit"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l8nfd6k1/l8nyei3j/access"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        data-toggle="modal"
                                                                                        data-target="#deleteAdmin"
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>3</td>
                                                                                <td>l8o2ticd </td>
                                                                                <td>GRAND TEST</td>
                                                                                <td>GRAND TEST_SET 2</td>
                                                                                <td />
                                                                                <td>Manual</td>
                                                                                <td>
                                                                                    <div

                                                                                        className="custom-control custom-switch"
                                                                                    >
                                                                                        <input

                                                                                            type="checkbox"
                                                                                            className="custom-control-input"
                                                                                            id="updateStatusl8o2ticd"
                                                                                        />
                                                                                        <label

                                                                                            className="custom-control-label"
                                                                                            htmlFor="updateStatusl8o2ticd"
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-warning text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/view-assessment/l8o2ticd"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-secondary text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/download-assessment/l8o2ticd"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l8o2ticd/edit"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l8nfd6k1/l8o2ticd/access"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        data-toggle="modal"
                                                                                        data-target="#deleteAdmin"
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>4</td>
                                                                                <td>l8obk8gu </td>
                                                                                <td>GRAND TEST</td>
                                                                                <td>GRAND TEST 3</td>
                                                                                <td />
                                                                                <td>Manual</td>
                                                                                <td>
                                                                                    <div

                                                                                        className="custom-control custom-switch"
                                                                                    >
                                                                                        <input

                                                                                            type="checkbox"
                                                                                            className="custom-control-input"
                                                                                            id="updateStatusl8obk8gu"
                                                                                        />
                                                                                        <label

                                                                                            className="custom-control-label"
                                                                                            htmlFor="updateStatusl8obk8gu"
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-warning text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/view-assessment/l8obk8gu"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-secondary text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/download-assessment/l8obk8gu"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    {/**/}
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l8obk8gu/edit"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        target="_blank"
                                                                                        className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        href="/vendor/assessment/l8nfd6k1/l8obk8gu/access"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                                                        </svg>
                                                                                    </a>
                                                                                    <a

                                                                                        data-toggle="modal"
                                                                                        data-target="#deleteAdmin"
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                                        </svg>
                                                                                    </a>
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
