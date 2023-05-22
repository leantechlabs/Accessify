import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
export default function SearchUsers() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper p-4">
                            <div className="page-content mt-4">
                                <div contentanimate>
                                    <router-outlet />
                                    <div className="row justify-content-center my-2">
                                        <div className="col-md-12 stretch-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row pb-3">
                                                        <div className="col-md-6">
                                                            <h6>
                                                                <strong>Download Users</strong>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div

                                                        className="input-group justify-content-center"
                                                    >
                                                        <div className="col pr-2">
                                                            <button

                                                                type="button"
                                                                className="btn btn-primary"
                                                            >
                                                                {' '}
                                                                Download{' '}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 stretch-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row pb-3">
                                                        <div className="col-md-6">
                                                            <h6>
                                                                <strong>Search User:</strong>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div

                                                        className="input-group justify-content-center"
                                                    >
                                                        <div

                                                            className="form-outline form-group w-50"
                                                        >
                                                            <input

                                                                type="search"
                                                                id="search"
                                                                placeholder="Search Here"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <button

                                                                type="button"
                                                                className="btn btn-primary mx-3"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                                </svg>
                                                            </button>
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
