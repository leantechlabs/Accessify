import Sidebar from "../includes/sidebar";
import Header from "../includes/header";

export default function Chapters() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-11 stretch-card">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="row pb-3">
                                                <div className="col-md-6">
                                                    <h6>
                                                        <strong>Filter Modules:</strong>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="row pb-3 form-group">
                                                <div className="col-md">
                                                    <select
                                                        required
                                                        name="module"
                                                        className="form-control default-input ng-untouched ng-pristine ng-invalid"
                                                        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                                    >
                                                        <option value selected>
                                                            -- Select Module --
                                                        </option>
                                                        <option value="">
                                                            Zoho_1_verbal
                                                        </option>
                                                        <option value="">
                                                            Zoho _ C Fundamentals
                                                        </option>
                                                        <option value="">
                                                            Zoho Advanced Programming{' '}
                                                        </option>
                                                        <option value="">
                                                            Introduction
                                                        </option>
                                                        <option value="">
                                                            Java Programming{' '}
                                                        </option>
                                                        <option value="">
                                                            Python - R K
                                                        </option>
                                                        <option value="lcprej83">
                                                            Coding Assessments Q B
                                                        </option>

                                                        {/**/}
                                                    </select>
                                                    <small>
                                                        <strong>Select Module</strong>
                                                    </small>
                                                </div>
                                                <div className="col-md">
                                                    <button

                                                        type="button"
                                                        className="btn btn-primary mx-2"
                                                    >
                                                        Go
                                                    </button>
                                                    <button

                                                        type="button"
                                                        className="btn btn-outline-danger mx-2"
                                                    >
                                                        Clear Filter
                                                    </button>
                                                    <button

                                                        type="button"
                                                        className="btn btn-success mx-2"
                                                    >
                                                        Get All Chapters
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="pb-2">
                                                <strong>Chapters</strong>
                                                <div className="p-2 d-flex flex-row justify-content-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#basicModal"
                                                    >
                                                        + Create Chapter
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
                                                                                Subject
                                                                            </label>
                                                                            <select
                                                                                required
                                                                                name="module"
                                                                                className="form-control default-input ng-untouched ng-pristine ng-invalid"
                                                                                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                                                            >
                                                                                <option value selected>
                                                                                    -- Select Subject --
                                                                                </option>
                                                                                <option value="">
                                                                                    Zoho_1_verbal
                                                                                </option>
                                                                                <option value="">
                                                                                    Zoho _ C Fundamentals
                                                                                </option>
                                                                                <option value="">
                                                                                    Zoho Advanced Programming{' '}
                                                                                </option>
                                                                                <option value="">
                                                                                    Introduction
                                                                                </option>
                                                                                <option value="">
                                                                                    Java Programming{' '}
                                                                                </option>
                                                                                <option value="">
                                                                                    Python - R K
                                                                                </option>
                                                                                <option value="lcprej83">
                                                                                    Coding Assessments Q B
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="dobBasic" className="form-label">
                                                                                Chapter Tag
                                                                            </label>
                                                                            <select
                                                                                required
                                                                                name="module"
                                                                                className="form-control default-input ng-untouched ng-pristine ng-invalid"
                                                                                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                                                             >
                                                                                <option value selected>
                                                                                    -- Select Chapter --
                                                                                </option>
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
                                            </h6>
                                            <div className="template-body tab-bg">
                                                <div>
                                                    <table

                                                        datatable
                                                        className="table table-bordered row-border"
                                                    >
                                                        <thead className="text-center">
                                                            <tr>
                                                                <th>S.No</th>
                                                                <th>Module</th>
                                                                <th>Chapter Name</th>
                                                                <th>Tag</th>
                                                                <th>Questions #</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            {/**/}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>;
                                </div>
                            </div>;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}