/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import { Link } from "react-router-dom";
export default function Access() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper">
                            <div className="page-wrapper m-4">
                                <div className="page-content mt-4">
                                    {/**/}
                                    <router-outlet />
                                    <div className="row">
                                        <div className="col-md-12 stretch-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row pb-3">
                                                        <div className="col-md-6">
                                                            <h6 className="card-title">
                                                                Learning Path
                                                            </h6>
                                                        </div>
                                                        <div className="col-md-6 d-flex flex-row justify-content-end">
                                                            <Link

                                                                type="button"
                                                                routerlinkactive="router-link-active"
                                                                className="btn btn-primary"
                                                                tabIndex={0}
                                                                to="/add-learning-path"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                </svg>Add Learning Path
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="template-body tab-bg">
                                                        <div className="table-responsive">
                                                            <div
                                                                id="DataTables_Table_1_wrapper"
                                                                className="dataTables_wrapper no-footer"
                                                            >
                                                                <div
                                                                    className="dataTables_length"
                                                                    id="DataTables_Table_1_length"
                                                                >
                                                                    <label>
                                                                        Show{' '}
                                                                        <select
                                                                            name="DataTables_Table_1_length"
                                                                            aria-controls="DataTables_Table_1"
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
                                                                    id="DataTables_Table_1_filter"
                                                                    className="dataTables_filter d-flex flex-row justify-content-end"
                                                                >
                                                                    <label>
                                                                        Search:
                                                                        <input
                                                                            type="search"
                                                                            className
                                                                            placeholder
                                                                            aria-controls="DataTables_Table_1"
                                                                        />
                                                                    </label>
                                                                </div>
                                                                <table

                                                                    datatable
                                                                    className="table table-bordered dataTable no-footer mt-3"
                                                                    id="DataTables_Table_1"
                                                                    aria-describedby="DataTables_Table_1_info"
                                                                >
                                                                    <thead className="text-center">
                                                                        <tr>
                                                                            <th

                                                                                className="sorting sorting_asc"
                                                                                tabIndex={0}
                                                                                aria-controls="DataTables_Table_1"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                aria-sort="ascending"
                                                                                aria-label="S.No: activate to sort column descending"
                                                                                style={{ width: '291.8px' }}
                                                                            >
                                                                                S.No
                                                                            </th>
                                                                            <th

                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="DataTables_Table_1"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                aria-label="Name: activate to sort column ascending"
                                                                                style={{ width: '327.837px' }}
                                                                            >
                                                                                Name
                                                                            </th>
                                                                            <th

                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="DataTables_Table_1"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                aria-label="Actions: activate to sort column ascending"
                                                                                style={{ width: '407.962px' }}
                                                                            >
                                                                                Actions
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="text-center">
                                                                        {/**/}
                                                                        <tr className="odd">
                                                                            <td
                                                                                valign="top"
                                                                                colSpan={3}
                                                                                className="dataTables_empty"
                                                                            >
                                                                                No data available in table
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
                                    {/**/}
                                    {/**/}
                                </div>
                            </div>;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
