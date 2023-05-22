/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
   
  return (
    <aside
      id="layout-menu"
      class="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div class="app-brand demo">
        <a href="#" class="app-brand-link">
          <span class="app-brand-logo demo"> </span>
          <span class="app-brand-text demo menu-text fw-bolder ms-2">
            Accessify
          </span>
        </a>

        <a
          href="javascript:void(0);"
          class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner py-1">
     
        <li class="menu-item active">
        <Link class="menu-link menu-toggle" to="/dashboard"> 
            <i class="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
        </Link>
        </li>
        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Vendor</span>
        </li>

        <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Vendor</div>
          </a>
         
            <li class="menu-item">
            <Link class="menu-link " to="/vendor-register"> 
                <div data-i18n="vendor/vendor-register">Register Vendor</div>
            </Link>
            </li>
            <li class="menu-item">
            <Link class="menu-link " to="/manage-vendor"> 
                <div data-i18n="Manage Vendor">Manage Vendor</div>
            </Link>
            </li>
         
        </li>

        <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Institution</div>
          </a>
         {/*  comments */}
            <li class="menu-item">
            <Link class="menu-link " to="/institution"> 
                <div data-i18n="Register Vendor">Institution</div>
            </Link>
            </li>
            <li class="menu-item">
            <Link class="menu-link " to="/batch-years"> 
                <div data-i18n="Register Vendor">Batch Years</div>
            </Link>
            </li>
            <li class="menu-item">
            <Link class="menu-link " to="/batch"> 
                <div data-i18n="Register Vendor">Batches</div>
            </Link>
            </li>
            <li class="menu-item">
            <Link class="menu-link " to="/institution-users"> 
                <div data-i18n="Register Vendor">Users</div>
            </Link>
            </li>

            <li class="menu-item">
              <a href="#" class="menu-link">
                <div data-i18n="Manage Vendor">Manage Institution</div>
              </a>
            </li>
        <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">QUESTION BANK</div>
          </a>
         
            <li class="menu-item">
            <Link class="menu-link " to="/Subjects"> 
                <div data-i18n="QuestionBank/subjects.js">Subjects</div>
            </Link>

         </li>
         <li class="menu-item">
            <Link class="menu-link " to="/PCreate"> 
                <div data-i18n="QuestionBank/pcreate.js">Paragraph MCQ Create</div>
            </Link>
           </li>
           <li class="menu-item">
            <Link class="menu-link " to="/Pview"> 
                <div data-i18n="QuestionBank/pview.js">Paragraph MCQ View</div>
            </Link>
           </li>
           <li class="menu-item">
            <Link class="menu-link " to="/Createcodingques"> 
                <div data-i18n="QuestionBank/createcodingques.js">Create Coding Questions</div>
            </Link>
           </li>
           <li class="menu-item">
            <Link class="menu-link " to="/Viewcodingques"> 
                <div data-i18n="QuestionBank/viewcodingques.js">View Coding Questions</div>
            </Link>
           </li>

            </li>
            <li class="menu-item">
            <Link class="menu-link " to="/chapters"> 
                <div data-i18n="QuestionBank/chapters.js">Chapters</div>
            </Link>
            </li>
        </li>
        <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">ASSESSMENTS</div>
          </a>
         
            <li class="menu-item">
            <Link class="menu-link " to="/catergories"> 
                <div data-i18n="Assessments/catergories.js">Categories</div>
            </Link>
            </li>
            <li class="menu-item">
            <Link class="menu-link " to="/assessments"> 
                <div data-i18n="Assessments/assessments.js">Assessments</div>
            </Link>
            </li>
        </li>
        <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Reports</div>
          </a>
         
            <li class="menu-item">
            <Link class="menu-link " to="/Assessmentreport"> 
                <div data-i18n="Reports/assessmentreport.js">Assessment Report</div>
            </Link></li>
            <li class="menu-item">
            <Link class="menu-link " to="/Assessmentreport"> 
                <div data-i18n="Reports/assessmentreport.js">Participation Report</div>
            </Link></li>
            <li class="menu-item">
            <Link class="menu-link " to="/Learningpath"> 
                <div data-i18n="Learningpath/Learningpath.js">Learning path</div>
            </Link></li>
            <li class="menu-item">
            <Link class="menu-link " to="/Viedofolders"> 
                <div data-i18n="Learningpath/Viedofolders.js">Viedo folders</div>
            </Link></li>
         </li>
         <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Learningpath</div>
          </a>
            <li class="menu-item">
            <Link class="menu-link " to="/Learningpath"> 
                <div data-i18n="Learningpath/Learningpath.js">Learning path</div>
            </Link></li>
            <li class="menu-item">
            <Link class="menu-link " to="/Viedofolders"> 
                <div data-i18n="Learningpath/Viedofolders.js">Viedo folders</div>
            </Link></li>
         </li>
        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Vendor Utils</span>
        </li>
        <li class="menu-item">
          <Link class="menu-link menu-toggle" to="/batches">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Tutor</div>
          </Link>
          <div class="menu-sub">
            <li class="menu-item">
              <a href="tutor-register" class="menu-link">
                <div data-i18n="Register Vendor">Register Tutor</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="vendor-manage" class="menu-link">
                <div data-i18n="Manage Vendor">Manage Tutor</div>
              </a>
            </li>
          </div>
        </li>
        <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">User</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="#" class="menu-link">
                <div data-i18n="Register Vendor">Register User</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <div data-i18n="Manage Vendor">Manage User</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
