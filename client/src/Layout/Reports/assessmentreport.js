import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
export default function Assessmentreport() {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div className="page-content mt-4"><div>
        <router-outlet />
        <app-assessment-report>
            <div  className="row mt-2 justify-content-center">
                <div  className="col-md-11 stretch card">
                    <div >
                        <div  className="card-body">
                        <div class="col-md-6">
                              <h6>
                                <strong>Assessment Reports:</strong>
                              </h6>
                            </div>
                            <hr></hr>
                            <div  className="template-body tab-bg">
                                <div  className="table-responsive">
                                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className>
                                                    <option value={10}>10</option>
                                                    <option value={25}>25</option>
                                                    <option value={50}>50</option>
                                                </select> entries</label></div>
                                        <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                        <br></br>
                                        <form class="d-flex">
                                        <div class="input-group">
                                        <span class="input-group-text"><i class="tf-icons bx bx-search"></i></span>
                                         <input type="text" class="form-control" placeholder="Search..." />
                                        </div>
                                        </form>
                                        </div>
                                        <br></br>
                                        <div id="DataTables_Table_0_processing" className="dataTables_processing" style={{display: 'none'}}>Processing...</div>
                                        <table  datatable className="table table-bordered row-border hover dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                            <thead  className="text-center" style={{backgroundColor: '#D0D2D5'}}>
                                                <tr >
                                                    <th  className="sorting sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{width: '34.2083px'}}>S.No</th>
                                                    <th  className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Category: activate to sort column ascending" style={{width: '194.615px'}}>Category</th>
                                                    <th  className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Assessment: activate to sort column ascending" style={{width: '294.677px'}}>Assessment</th>
                                                    <th  className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Attempts: activate to sort column ascending" style={{width: '69.3229px'}}>Attempts</th>
                                                    <th  className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Actions: activate to sort column ascending" style={{width: '59.5625px'}}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody  className="text-center"><tr  className="odd">
                                                    <td  className="sorting_1">1</td>
                                                    <td >ZOHO</td>
                                                    <td >Test paper -1</td>
                                                    <td >15</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="even">
                                                    <td  className="sorting_1">2</td>
                                                    <td >GRAND TEST</td>
                                                    <td >GRAND TEST_SET 1</td>
                                                    <td >418</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="odd">
                                                    <td  className="sorting_1">3</td>
                                                    <td >GRAND TEST</td>
                                                    <td >GRAND TEST_SET 2</td>
                                                    <td >323</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="even">
                                                    <td  className="sorting_1">4</td>
                                                    <td >GRAND TEST</td>
                                                    <td >GRAND TEST 3</td>
                                                    <td >38</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="odd">
                                                    <td  className="sorting_1">5</td>
                                                    <td >iBASIS</td>
                                                    <td >iBASIS_MOCK TEST_1 </td>
                                                    <td >136</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="even">
                                                    <td  className="sorting_1">6</td>
                                                    <td >CapGemini</td>
                                                    <td >CapGemini</td>
                                                    <td >285</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="odd">
                                                    <td  className="sorting_1">7</td>
                                                    <td >CapGemini</td>
                                                    <td >CAPGEMINI_SET 2_test 1</td>
                                                    <td >75</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="even">
                                                    <td  className="sorting_1">8</td>
                                                    <td >CapGemini</td>
                                                    <td >CAPGEMINI_SET 2- test 2</td>
                                                    <td >39</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="odd">
                                                    <td  className="sorting_1">9</td>
                                                    <td >AITS_K_Aptitude Assessments</td>
                                                    <td >Aptitude Assessment_1</td>
                                                    <td >237</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="#"><i  className="tf-icons bx bx-task" /></a></td>
                                                </tr>
                                                <tr  className="even">
                                                    <td  className="sorting_1">10</td>
                                                    <td >ANURAG Technical Assessment</td>
                                                    <td >Technical Assessment 1</td>
                                                    <td >53</td>
                                                    <td ><a  target="_blank" className="btn btn-info text-white mb-1 mb-md-0 btn-xs mx-1" style={{cursor: 'pointer'}} href="/vendor/assessment-report/ladg6ocu"><i  className="tf-icons bx bx-task" /></a></td>
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
        </app-assessment-report>
    </div></div>
            </div>
            </div>
          
      </div>
    </>
  );
}
