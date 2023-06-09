

export default function AdminDashboard() {

  return (
    <>
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
          <div class="col-lg-12 mb-4 order-0">
            <div class="card">
              <div class="d-flex align-items-end row">
                <div class="col-sm-7">
                  <div class="card-body">
                    <h5 class="card-title text-primary">Congratulations 🎉</h5>
                    <p class="mb-4">
                      You have done <span class="fw-bold">72%</span> More Users
                      today. Check your new users.
                    </p>

                    <a
                      href="javascript:;"
                      class="btn btn-sm btn-outline-primary"
                    >
                      View Users
                    </a>
                  </div>
                </div>
                <div class="col-sm-5 text-center text-sm-left">
                  <div class="card-body pb-0 px-0 px-md-4">
                    <img
                      src="../../assets/img/illustrations/man-with-laptop-light.png"
                      height="140"
                      alt="View Badge User"
                      data-app-dark-img="illustrations/man-with-laptop-dark.png"
                      data-app-light-img="illustrations/man-with-laptop-light.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
            <div class="card">
              <div class="row row-bordered g-0">
                <div class="col-md-8">
                  <h5 class="card-header m-0 me-2 pb-3">Total Users</h5>
                  <div id="totalRevenueChart" class="px-2"></div>
                </div>
                <div class="col-md-4">
                  <div class="card-body">
                    <div class="text-center">
                      <div class="dropdown">
                        <button
                          class="btn btn-sm btn-outline-primary dropdown-toggle"
                          type="button"
                          id="growthReportId"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          2022
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-end"
                          aria-labelledby="growthReportId"
                        >
                          <a class="dropdown-item" href="javascript:void(0);">
                            2021
                          </a>
                          <a class="dropdown-item" href="javascript:void(0);">
                            2020
                          </a>
                          <a class="dropdown-item" href="javascript:void(0);">
                            2019
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="growthChart"></div>
                  <div class="text-center fw-semibold pt-3 mb-2">
                    62% Company Growth
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
            <div class="row">
              <div class="col-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="card-title d-flex align-items-start justify-content-between">
                      <div class="avatar flex-shrink-0">
                        <img
                          src="../../assets/img/icons/unicons/vendor.png"
                          alt="Credit Card"
                          class="rounded"
                        />
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn p-0"
                          type="button"
                          id="cardOpt4"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardOpt4"
                        >
                          <a class="dropdown-item" href="javascript:void(0);">
                            View Vendors
                          </a>
                        </div>
                      </div>
                    </div>
                    <span class="d-block mb-1">Total Vendors</span>
                    <h3 class="card-title text-nowrap mb-2">202</h3>
                    <small class="text-success fw-semibold">
                      <i class="bx bx-up-arrow-alt"></i> +8.14%
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="card-title d-flex align-items-start justify-content-between">
                      <div class="avatar flex-shrink-0">
                        <img
                          src="../../assets/img/icons/unicons/tutor.png"
                          alt="Credit Card"
                          class="rounded"
                        />
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn p-0"
                          type="button"
                          id="cardOpt1"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="cardOpt1">
                          <a class="dropdown-item" href="javascript:void(0);">
                            View Tutors
                          </a>
                        </div>
                      </div>
                    </div>
                    <span class="fw-semibold d-block mb-1">Tutors</span>
                    <h3 class="card-title mb-2">43</h3>
                    <small class="text-success fw-semibold">
                      <i class="bx bx-up-arrow-alt"></i> +1.14%
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-12 mb-4">
                <div class="card">
                  <div class=" ">
                    <div class="card h-100">
                      <div class="card-header d-flex align-items-center justify-content-between pb-0">
                        <div class="card-title mb-0">
                          <h5 class="m-0 me-2">Assesments Statistics</h5>
                          <small class="text-muted">42K Total Assesments</small>
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="orederStatistics"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="orederStatistics"
                          >
                            <a class="dropdown-item" href="javascript:void(0);">
                              Refresh
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Share
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <div class="d-flex flex-column align-items-center gap-1">
                            <h2 class="mb-2">8,258</h2>
                            <span>Completed Assesments</span>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul class="p-0 m-0">
                          <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                              <span class="avatar-initial rounded bg-label-primary">
                                <i class="bx bx-abacus"></i>
                              </span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Aptitude</h6>
                              </div>
                              <div class="user-progress">
                                <small class="fw-semibold">10k</small>
                              </div>
                            </div>
                          </li>

                          <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                              <span class="avatar-initial rounded bg-label-success">
                                <i class="bx bx-book-reader"></i>
                              </span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Reasoning</h6>
                              </div>
                              <div class="user-progress">
                                <small class="fw-semibold">10k</small>
                              </div>
                            </div>
                          </li>
                        </ul>
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
