import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function Learningpath() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper">
                            <div className="container-sm"><router-outlet
                                _ngcontent-bhs-c132=""></router-outlet><app-learning-path _nghost-bhs-c154="">
                                    <div class="row">
                                        <div class="col-md-12 stretch-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row pb-3">
                                                        <div class="col-md-6">
                                                            <h6 class="card-title">Learning Path</h6>
                                                        </div>
                                                        <div class="col-md-6 text-right-col text-right">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button
                                                                type="button" routerlinkactive="router-link-active" class="btn btn-primary"
                                                                tabindex="0"><i class="feather icon-plus"></i>  Add
                                                                Learning Path </button></div>
                                                    </div>
                                                    <div class="template-body tab-bg">
                                                        <div class="table-responsive">
                                                            <div id="DataTables_Table_4_wrapper" class="dataTables_wrapper no-footer">
                                                                <div class="dataTables_length" id="DataTables_Table_4_length"><label>Show
                                                                    <select name="DataTables_Table_4_length"
                                                                        aria-controls="DataTables_Table_4" class="">
                                                                        <option value="10">10</option>
                                                                        <option value="25">25</option>
                                                                        <option value="50">50</option>
                                                                        <option value="100">100</option>
                                                                    </select> entries</label></div>
                                                                <div id="DataTables_Table_4_filter" class="dataTables_filter">
                                                                    <label>Search:<input type="search" class="" placeholder=""
                                                                        aria-controls="DataTables_Table_4" /></label></div>
                                                                <table datatable=""
                                                                    class="table table-bordered dataTable no-footer" id="DataTables_Table_4"
                                                                    aria-describedby="DataTables_Table_4_info">
                                                                    <thead class="text-center">
                                                                        <tr >
                                                                            <th class="sorting sorting_asc" tabindex="0"
                                                                                aria-controls="DataTables_Table_4" rowspan="1" colspan="1"
                                                                                aria-sort="ascending"
                                                                                aria-label="S.No: activate to sort column descending"
                                                                                style={{width: '40.65px'}}>S.No</th>
                                                                            <th class="sorting" tabindex="0"
                                                                                aria-controls="DataTables_Table_4" rowspan="1" colspan="1"
                                                                                aria-label="Name: activate to sort column ascending"
                                                                                style={{width: '275.062'}}>Name</th>
                                                                            <th class="sorting" tabindex="0"
                                                                                aria-controls="DataTables_Table_4" rowspan="1" colspan="1"
                                                                                aria-label="Topics: activate to sort column ascending"
                                                                                style={{width: '55.45'}}>Topics</th>
                                                                            <th class="sorting" tabindex="0"
                                                                                aria-controls="DataTables_Table_4" rowspan="1" colspan="1"
                                                                                aria-label="Last Updated: activate to sort column ascending"
                                                                                style={{width: '109.162'}}>Last Updated</th>
                                                                            <th class="sorting" tabindex="0"
                                                                                aria-controls="DataTables_Table_4" rowspan="1" colspan="1"
                                                                                aria-label="Publish: activate to sort column ascending"
                                                                                style={{width: '65.525'}}>Publish</th>
                                                                            <th class="sorting" tabindex="0"
                                                                                aria-controls="DataTables_Table_4" rowspan="1" colspan="1"
                                                                                aria-label="Subscription: activate to sort column ascending"
                                                                                style={{width: '108.275'}}>Subscription</th>
                                                                            <th class="sorting" tabindex="0"
                                                                                aria-controls="DataTables_Table_4" rowspan="1" colspan="1"
                                                                                aria-label="Actions: activate to sort column ascending"
                                                                                style={{width: '260.675px'}}>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody class="text-center">
                                                                        <tr class="odd">
                                                                            <td class="sorting_1">1</td>
                                                                            <td >HTML5</td>
                                                                            <td >1</td>
                                                                            <td >2 months ago</td>
                                                                            <td ><label
                                                                                class="switch"><input
                                                                                    type="checkbox" /><span
                                                                                        class="slider round"></span></label></td>
                                                                            <td >Free</td>
                                                                            <td ><button
                                                                                type="submit" queryparamshandling="merge"
                                                                                routerlinkactive="router-link-active"
                                                                                class="btn btn-warning mx-1 line-height" tabindex="0">
                                                                                Topics </button>
                                                                                <a ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)',transform: 'msFilter'}}><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"></path></svg></a>
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
                                                                        <tr class="even">
                                                                            <td class="sorting_1">2</td>
                                                                            <td >C Programming for beginners</td>
                                                                            <td >26</td>
                                                                            <td >2 months ago</td>
                                                                            <td ><label
                                                                                class="switch"><input
                                                                                    type="checkbox" /><span
                                                                                        class="slider round"></span></label></td>
                                                                            <td >Free</td>
                                                                            <td ><button
                                                                                type="submit" queryparamshandling="merge"
                                                                                routerlinkactive="router-link-active"
                                                                                class="btn btn-warning mx-1 line-height" tabindex="0">
                                                                                Topics </button>
                                                                                <a ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)',transform: 'msFilter'}}><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"></path></svg></a>
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
                                                                        <tr class="odd">
                                                                            <td class="sorting_1">3</td>
                                                                            <td >Python Programming for Beginners</td>
                                                                            <td >36</td>
                                                                            <td >1 month ago</td>
                                                                            <td ><label
                                                                                class="switch"><input
                                                                                    type="checkbox" /><span
                                                                                        class="slider round"></span></label></td>
                                                                            <td >Free</td>
                                                                            <td ><button
                                                                                type="submit" queryparamshandling="merge"
                                                                                routerlinkactive="router-link-active"
                                                                                class="btn btn-warning mx-1 line-height" tabindex="0">
                                                                                Topics </button>
                                                                                <a ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)',transform: 'msFilter'}}><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"></path></svg></a>
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
                                                                        <tr class="even">
                                                                            <td class="sorting_1">4</td>
                                                                            <td >HTML Course for beginners</td>
                                                                            <td >11</td>
                                                                            <td >1 month ago</td>
                                                                            <td ><label
                                                                                class="switch"><input
                                                                                    type="checkbox" /><span
                                                                                        class="slider round"></span></label></td>
                                                                            <td >Free</td>
                                                                            <td ><button
                                                                                type="submit" queryparamshandling="merge"
                                                                                routerlinkactive="router-link-active"
                                                                                class="btn btn-warning mx-1 line-height" tabindex="0">
                                                                                Topics </button>
                                                                                <a ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)',transform: 'msFilter'}}><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"></path></svg></a>
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
                                </app-learning-path></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
