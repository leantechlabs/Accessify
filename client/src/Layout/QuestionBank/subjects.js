import Sidebar from "../includes/sidebar";
import Header from "../includes/header";



export default function Subjects() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper">
                            <div  className="page-content mt-4">
                                <div  contentanimate>
                                    <router-outlet  />
                                   
                                        <div  className="row justify-content-center">
                                            <div  className="col-md-11 stretch-card">
                                                <div  className="card">
                                                    <div  className="card-body">
                                                        <div  className="row pb-3">
                                                            <div  className="col-md-6">
                                                                <h6  className="font-weight-bold">
                                                                    <strong >Subjects</strong>
                                                                </h6>
                                                            </div>
                                                            <div  className="col-md-6 text-right">
                                                                <button
                                                                    
                                                                    type="button"
                                                                    className="btn btn-primary"
                                                                >
                                                                    <i  className="feather icon-plus" />{' '}
                                                                    Create Subject{' '}
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div  className="template-body tab-bg">
                                                            <div >
                                                                <div
                                                                    id="DataTables_Table_0_wrapper"
                                                                    className="dataTables_wrapper no-footer"
                                                                >
                                                                    <div
                                                                        className="dataTables_length"
                                                                        id="DataTables_Table_0_length"
                                                                    >
                                                                        <label>
                                                                            Show{' '}
                                                                            <select
                                                                                name="DataTables_Table_0_length"
                                                                                aria-controls="DataTables_Table_0"
                                                                                className
                                                                            >
                                                                                <option value={10}>10</option>
                                                                                <option value={25}>25</option>
                                                                                <option value={50}>50</option>
                                                                                <option value={100}>100</option>
                                                                            </select>{' '}
                                                                            entries
                                                                        </label>
                                                                    </div>
                                                                    <div
                                                                        id="DataTables_Table_0_filter"
                                                                        className="dataTables_filter"
                                                                    >
                                                                        <label>
                                                                            Search:
                                                                            <input
                                                                                type="search"
                                                                                className
                                                                                placeholder
                                                                                aria-controls="DataTables_Table_0"
                                                                            />
                                                                        </label>
                                                                    </div>
                                                                    <table
                                                                        
                                                                        datatable
                                                                        className="table table-bordered row-border dataTable no-footer"
                                                                        id="DataTables_Table_0"
                                                                        aria-describedby="DataTables_Table_0_info"
                                                                    >
                                                                        <thead  className="text-center">
                                                                            <tr >
                                                                                <th
                                                                                    
                                                                                    className="sorting sorting_asc"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_0"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-sort="ascending"
                                                                                    aria-label="S.No: activate to sort column descending"
                                                                                    style={{ width: '41.425px' }}
                                                                                >
                                                                                    S.No
                                                                                </th>
                                                                                <th
                                                                                    
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_0"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Name: activate to sort column ascending"
                                                                                    style={{ width: '269.25px' }}
                                                                                >
                                                                                    Name
                                                                                </th>
                                                                                <th
                                                                                    
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_0"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Tag: activate to sort column ascending"
                                                                                    style={{ width: '150.5px' }}
                                                                                >
                                                                                    Tag
                                                                                </th>
                                                                                <th
                                                                                    
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_0"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Chapters #: activate to sort column ascending"
                                                                                    style={{ width: '91.9875px' }}
                                                                                >
                                                                                    Chapters #
                                                                                </th>
                                                                                <th
                                                                                    
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_0"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Total Questions: activate to sort column ascending"
                                                                                    style={{ width: '134.312px' }}
                                                                                >
                                                                                    Total Questions
                                                                                </th>
                                                                                <th
                                                                                    
                                                                                    className="sorting"
                                                                                    tabIndex={0}
                                                                                    aria-controls="DataTables_Table_0"
                                                                                    rowSpan={1}
                                                                                    colSpan={1}
                                                                                    aria-label="Actions: activate to sort column ascending"
                                                                                    style={{ width: '107.925px' }}
                                                                                >
                                                                                    Actions
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody  className="text-center">
                                                                            {/**/}
                                                                            <tr  className="odd">
                                                                                <td  className="sorting_1">
                                                                                    1
                                                                                </td>
                                                                                <td >Zoho_1_verbal </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Verbal
                                                                                    </span>
                                                                                </td>
                                                                                <td >1</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="even">
                                                                                <td  className="sorting_1">
                                                                                    2
                                                                                </td>
                                                                                <td >Zoho _ C Fundamentals </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Others
                                                                                    </span>
                                                                                </td>
                                                                                <td >1</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="odd">
                                                                                <td  className="sorting_1">
                                                                                    3
                                                                                </td>
                                                                                <td >Zoho Advanced Programming</td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Programming
                                                                                    </span>
                                                                                </td>
                                                                                <td >1</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="even">
                                                                                <td  className="sorting_1">
                                                                                    4
                                                                                </td>
                                                                                <td >Zoho Basic Programming </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Programming
                                                                                    </span>
                                                                                </td>
                                                                                <td >1</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="odd">
                                                                                <td  className="sorting_1">
                                                                                    5
                                                                                </td>
                                                                                <td >Technical Practice </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        C-Programming
                                                                                    </span>
                                                                                </td>
                                                                                <td >14</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="even">
                                                                                <td  className="sorting_1">
                                                                                    6
                                                                                </td>
                                                                                <td >Dynamic Programming </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Programming
                                                                                    </span>
                                                                                </td>
                                                                                <td >1</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="odd">
                                                                                <td  className="sorting_1">
                                                                                    7
                                                                                </td>
                                                                                <td >Aptitude</td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Quantitative_Aptitude
                                                                                    </span>
                                                                                </td>
                                                                                <td >36</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="even">
                                                                                <td  className="sorting_1">
                                                                                    8
                                                                                </td>
                                                                                <td >Verbal </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Verbal
                                                                                    </span>
                                                                                </td>
                                                                                <td >23</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="odd">
                                                                                <td  className="sorting_1">
                                                                                    9
                                                                                </td>
                                                                                <td >Technical Mcq </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Python_Programming
                                                                                    </span>
                                                                                </td>
                                                                                <td >1</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr  className="even">
                                                                                <td  className="sorting_1">
                                                                                    10
                                                                                </td>
                                                                                <td >
                                                                                    Capgemini_mock Test Papers{' '}
                                                                                </td>
                                                                                <td >
                                                                                    <span
                                                                                        
                                                                                        className="badge badge-pill badge-primary p-2"
                                                                                    >
                                                                                        Others
                                                                                    </span>
                                                                                </td>
                                                                                <td >5</td>
                                                                                <td  />
                                                                                <td >
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-edit-2"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        
                                                                                        className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    >
                                                                                        <i
                                                                                            
                                                                                            className="feather icon-trash-2"
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div
                                                                        className="dataTables_info"
                                                                        id="DataTables_Table_0_info"
                                                                        role="status"
                                                                        aria-live="polite"
                                                                    >
                                                                        Showing 1 to 10 of 93 entries
                                                                    </div>
                                                                    <div
                                                                        className="dataTables_paginate paging_simple_numbers"
                                                                        id="DataTables_Table_0_paginate"
                                                                    >
                                                                        <a
                                                                            className="paginate_button previous disabled"
                                                                            aria-controls="DataTables_Table_0"
                                                                            data-dt-idx={0}
                                                                            tabIndex={-1}
                                                                            id="DataTables_Table_0_previous"
                                                                        >
                                                                            Previous
                                                                        </a>
                                                                        <span>
                                                                            <a
                                                                                className="paginate_button current"
                                                                                aria-controls="DataTables_Table_0"
                                                                                data-dt-idx={1}
                                                                                tabIndex={0}
                                                                            >
                                                                                1
                                                                            </a>
                                                                            <a
                                                                                className="paginate_button "
                                                                                aria-controls="DataTables_Table_0"
                                                                                data-dt-idx={2}
                                                                                tabIndex={0}
                                                                            >
                                                                                2
                                                                            </a>
                                                                            <a
                                                                                className="paginate_button "
                                                                                aria-controls="DataTables_Table_0"
                                                                                data-dt-idx={3}
                                                                                tabIndex={0}
                                                                            >
                                                                                3
                                                                            </a>
                                                                            <a
                                                                                className="paginate_button "
                                                                                aria-controls="DataTables_Table_0"
                                                                                data-dt-idx={4}
                                                                                tabIndex={0}
                                                                            >
                                                                                4
                                                                            </a>
                                                                            <a
                                                                                className="paginate_button "
                                                                                aria-controls="DataTables_Table_0"
                                                                                data-dt-idx={5}
                                                                                tabIndex={0}
                                                                            >
                                                                                5
                                                                            </a>
                                                                            <span className="ellipsis">…</span>
                                                                            <a
                                                                                className="paginate_button "
                                                                                aria-controls="DataTables_Table_0"
                                                                                data-dt-idx={6}
                                                                                tabIndex={0}
                                                                            >
                                                                                10
                                                                            </a>
                                                                        </span>
                                                                        <a
                                                                            className="paginate_button next"
                                                                            aria-controls="DataTables_Table_0"
                                                                            data-dt-idx={7}
                                                                            tabIndex={0}
                                                                            id="DataTables_Table_0_next"
                                                                        >
                                                                            Next
                                                                        </a>
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
