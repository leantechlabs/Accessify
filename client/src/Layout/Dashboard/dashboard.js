import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import AdminDashboard from "./Admin/admindash";

export default function Dashboard() {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              {/* #contents */}
              
              <AdminDashboard />    
              

              <div class="content-backdrop fade"></div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
