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
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="dobBasic" className="form-label">
                                                                Subjects Tag
                                                            </label>
                                                            <select
                                                                name="institution"
                                                                class="form-control default-input ng-pristine ng-valid ng-touched"
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
                                                    <button type="button" className="btn btn-primary text-center">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                            <tr>
                                                <td>
                                                    <i className="fab fa-angular fa-lg text-danger me-3" />{' '}
                                                    <strong>Verbal</strong>
                                                </td>
                                                <td>1</td>
                                                <td>
                                                    <span className="badge bg-label-primary me-1">Verbal</span>
                                                </td>
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
                                            <tr>
                                                <td>
                                                    <i className="fab fa-react fa-lg text-info me-3" />{' '}
                                                    <strong>Programming</strong>
                                                </td>
                                                <td>1</td>
                                                <td>
                                                    <span className="badge bg-label-success me-1">Programming</span>
                                                </td>
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
                                            <tr>
                                                <td>
                                                    <i className="fab fa-vuejs fa-lg text-success me-3" />{' '}
                                                    <strong>Variables</strong>
                                                </td>
                                                <td>1</td>
                                                <td>
                                                    <span className="badge bg-label-info me-1">Python_Programming</span>
                                                </td>
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
                                            <tr>
                                                <td>
                                                    <i className="fab fa-bootstrap fa-lg text-primary me-3" />{' '}
                                                    <strong>Validation Of Dob</strong>
                                                </td>
                                                <td>1</td>

                                                <td>
                                                    <span className="badge bg-label-warning me-1">Java_Programming</span>
                                                </td>
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