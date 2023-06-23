import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function AssignedQB() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper">
                            <div className="container-sm"><router-outlet
                                _ngcontent-ahf-c132=""></router-outlet><app-question-bank-access _nghost-ahf-c205="">
                                    <div _ngcontent-ahf-c205="" class="row">
                                        <div _ngcontent-ahf-c205="" class="col-md-12 stretch-card">
                                            <div _ngcontent-ahf-c205="" class="card">
                                                <div _ngcontent-ahf-c205="" class="card-body">
                                                    <div _ngcontent-ahf-c205="" class="row pb-3">
                                                        <div _ngcontent-ahf-c205="" class="col-md-6">
                                                            <h5 _ngcontent-ahf-c205="" class="font-weight-bold">Question Bank Access</h5>
                                                        </div>
                                                    </div>
                                                    <div _ngcontent-ahf-c205="" class="template-body tab-bg">
                                                        <div _ngcontent-ahf-c205="" class="table-responsive">
                                                            <table _ngcontent-ahf-c205="" class="table table-bordered">
                                                                <tbody _ngcontent-ahf-c205="" class="text-center">
                                                                    <tr _ngcontent-ahf-c205="">
                                                                        <th _ngcontent-ahf-c205="">S.No</th>
                                                                        <th _ngcontent-ahf-c205="">Module Name</th>
                                                                        <th _ngcontent-ahf-c205="">Chapters #</th>
                                                                        <th _ngcontent-ahf-c205="">Questions #</th>
                                                                    </tr>
                                                                </tbody>
                                                                <tbody _ngcontent-ahf-c205="" class="text-center"></tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </app-question-bank-access></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
