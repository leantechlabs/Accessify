import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function Access() {
    return (
      <>
        <div class="layout-wrapper layout-content-navbar">
          <div class="layout-container">
            <Sidebar />
            <div class="layout-page">
              <Header />
              <div class="content-wrapper">
              <div className="container-sm"><router-outlet
            _ngcontent-rmw-c132=""></router-outlet><app-my-course-access _nghost-rmw-c194="">
            <div _ngcontent-rmw-c194="" class="row">
                <div _ngcontent-rmw-c194="" class="col-md-12 stretch-card">
                    <div _ngcontent-rmw-c194="" class="card">
                        <div _ngcontent-rmw-c194="" class="card-body">
                            <div _ngcontent-rmw-c194="" class="row pb-3">
                                <div _ngcontent-rmw-c194="" class="col-md-6">
                                    <h6 _ngcontent-rmw-c194="" class="card-title">Learning Path</h6>
                                </div>
                                <div _ngcontent-rmw-c194="" class="col-md-6 text-right">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <button _ngcontent-rmw-c194=""
                                        type="button" routerlinkactive="router-link-active" class="btn btn-primary"
                                        tabindex="0"><i _ngcontent-rmw-c194="" class="feather icon-plus"></i> Add
                                        Learning Path </button></div>
                            </div>
                            <div _ngcontent-rmw-c194="" class="template-body tab-bg">
                                <div _ngcontent-rmw-c194="" class="table-responsive">
                                    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
                                        <div class="dataTables_length" id="DataTables_Table_0_length"><label>Show
                                                <select name="DataTables_Table_0_length"
                                                    aria-controls="DataTables_Table_0" class="">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select> </label></div>
                                        <div id="DataTables_Table_0_filter" class="dataTables_filter">
                                            <label>Search:<input type="search" class="" placeholder=""
                                                    aria-controls="DataTables_Table_0"/></label></div>
                                        <table _ngcontent-rmw-c194="" datatable=""
                                            class="table table-bordered dataTable no-footer" id="DataTables_Table_0"
                                            aria-describedby="DataTables_Table_0_info">
                                            <thead _ngcontent-rmw-c194="" class="text-center">
                                                <tr _ngcontent-rmw-c194="">
                                                    <th _ngcontent-rmw-c194="" class="sorting sorting_asc" tabindex="0"
                                                        aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                        aria-sort="ascending"
                                                        aria-label="S.No: activate to sort column descending"
                                                        style={{width: '307.525px'}}>S.No</th>
                                                    <th _ngcontent-rmw-c194="" class="sorting" tabindex="0"
                                                        aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                        aria-label="Name: activate to sort column ascending"
                                                        style={{width: '345.275px'}}>Name</th>
                                                    <th _ngcontent-rmw-c194="" class="sorting" tabindex="0"
                                                        aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                        aria-label="Actions: activate to sort column ascending"
                                                        style={{width: '429.2px'}}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody _ngcontent-rmw-c194="" class="text-center">
                                                <tr class="odd">
                                                    <td valign="top" colspan="3" class="dataTables_empty">No data
                                                        available in table</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="dataTables_info" id="DataTables_Table_0_info" role="status"
                                            aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                        <div class="dataTables_paginate paging_simple_numbers"
                                            id="DataTables_Table_0_paginate"><a
                                                class="paginate_button previous disabled"
                                                aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="-1"
                                                id="DataTables_Table_0_previous"></a><span></span><a
                                                class="paginate_button next disabled" aria-controls="DataTables_Table_0"
                                                data-dt-idx="1" tabindex="-1" id="DataTables_Table_0_next"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </app-my-course-access></div>
      </div>
          </div>
          </div>
          </div>
          </>
    );
  }
  