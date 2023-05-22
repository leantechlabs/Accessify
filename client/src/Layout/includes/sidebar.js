/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
export default function Sidebar() {
  const [user,setUser] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(res => setUser(res.data))
    .catch(err => console.log(err));
},[])
  
const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleSubMenuToggle = (event) => {
    const submenu = event.target.nextElementSibling;
    if (submenu) {
      submenu.style.display = submenu.style.display === "none" ? "block" : "none";
    }
  };

  return (  

    <aside
      id="layout-menu"
      className={`layout-menu menu-vertical menu bg-menu-theme ${
        collapsed ? "collapsed" : ""
      }`}
      style={{
        // Add your custom CSS styles here
        /* Define the styles for the collapsed state */
        ".collapsed .menu-submenu": {
          display: "none",
        },
      }}
    >
      <div className="app-brand demo">
        <a href="#" class="app-brand-link">
          <span class="app-brand-logo demo"> </span>
          <span class="app-brand-text demo menu-text fw-bolder ms-2">
            Accessify
          </span>
        </a>

        <Link
          to="javascript:void(0);"
          class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          onClick={handleToggle}
        >
          <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </Link>
      </div>

      <div class="menu-inner-shadow"></div>
      
      <ul className="menu-inner py-1">
        <li className="menu-item active">
          <Link className="menu-link menu-toggle" to="/dashboard">
            <i class="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
        </Link>
        </li>
      
        {user.isAdmin ? (
        <>
        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Vendor</span>
        </li>
        <li className="menu-item">
          <a className="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Vendor</div>
          </a>
          <ul className="menu-submenu">
              <li className="menu-item">
                <Link class="menu-link " to="/vendor-register"> 
                    <div data-i18n="vendor/vendor-register">Register Vendor</div>
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link " to="/manage-vendor"> 
                    <div data-i18n="Manage Vendor">Manage Vendor</div>
                </Link>
              </li>
          </ul>
        </li>
        </>
        ):(
        <>
        {/* <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Institution</div>
          </a>
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
            <Link class="menu-link " to="/Participationreport"> 
                <div data-i18n="Reports/participationreport.js">Participation Report</div>
            </Link></li>
         </li>
         <li class="menu-item">
          <a class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Practice</div>
          </a>
            <li class="menu-item">
            <Link class="menu-link " to="/Pcategories"> 
                <div data-i18n="Practice/pcategories.js">Categories</div>
            </Link></li>
            <li class="menu-item">
            <Link class="menu-link " to="/Ptopics"> 
                <div data-i18n="Practice/ptopics.js">Topics</div>
            </Link></li>
            <li class="menu-item">
            <Link class="menu-link " to="/Ptests"> 
                <div data-i18n="Practice/ptests.js">Tests</div>
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
        </li> */}
        <li className="menu-item">
              <Link
                className={`menu-link menu-toggle ${collapsed ? "collapsed" : ""}`}
                onClick={handleSubMenuToggle}
              >
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements" >Institution</div>
              </Link>
              <ul className={`menu-submenu ${collapsed ? "collapsed" : ""}`}>
                <li className="menu-item">
                  <Link className="menu-link" to="/institution">
                    <div data-i18n="Register Vendor">Institution</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/batch-years">
                    <div data-i18n="Register Vendor">Batch Years</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/batch">
                    <div data-i18n="Register Vendor">Batches</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/institution-users">
                    <div data-i18n="Register Vendor">Users</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    <div data-i18n="Manage Vendor">Manage Institution</div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
            <Link
                className={`menu-link menu-toggle ${collapsed ? "collapsed" : ""}`}
                onClick={handleSubMenuToggle}
              >
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">QUESTION BANK</div>
              </Link>
              <ul className={`menu-submenu ${collapsed ? "collapsed" : ""}`}>
                <li class="menu-item">
                  <Link class="menu-link" to="/Subjects">
                    <div data-i18n="QuestionBank/subjects.js">Subjects</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link" to="/PCreate">
                    <div data-i18n="QuestionBank/pcreate.js">Paragraph MCQ Create</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link" to="/Pview">
                    <div data-i18n="QuestionBank/pview.js">Paragraph MCQ View</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link" to="/Createcodingques">
                    <div data-i18n="QuestionBank/createcodingques.js">Create Coding Questions</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link" to="/Viewcodingques">
                    <div data-i18n="QuestionBank/viewcodingques.js">View Coding Questions</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link" to="/chapters">
                    <div data-i18n="QuestionBank/chapters.js">Chapters</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item">
            <Link
                className={`menu-link menu-toggle ${collapsed ? "collapsed" : ""}`}
                onClick={handleSubMenuToggle}
              >
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">ASSESSMENTS</div>
              </Link>
              <ul className={`menu-submenu ${collapsed ? "collapsed" : ""}`}>
                <li class="menu-item">
                  <Link class="menu-link" to="/catergories">
                    <div data-i18n="Assessments/catergories.js">Categories</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link" to="/assessments">
                    <div data-i18n="Assessments/assessments.js">Assessments</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item">
            <Link
                className={`menu-link menu-toggle ${collapsed ? "collapsed" : ""}`}
                onClick={handleSubMenuToggle}
               >
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">Reports</div>
              </Link>
              <ul className={`menu-submenu ${collapsed ? "collapsed" : ""}`}>
                <li class="menu-item">
                  <Link class="menu-link" to="/Assessmentreport">
                    <div data-i18n="Reports/assessmentreport.js">Assessment Report</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link" to="/Participationreport">
                    <div data-i18n="Reports/participationreport.js">Participation Report</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item">
            <Link
                className={`menu-link menu-toggle ${collapsed ? "collapsed" : ""}`}
                onClick={handleSubMenuToggle}
               >
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">Learning Path</div>
              </Link>
              <ul className={`menu-submenu ${collapsed ? "collapsed" : ""}`}>
                <li class="menu-item">
                  <Link class="menu-link" to="/access">
                    <div data-i18n="LearningPath/access.js">Access</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item">
            <Link
                className={`menu-link menu-toggle ${collapsed ? "collapsed" : ""}`}
                onClick={handleSubMenuToggle}
              >
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">Vendor Utils</div>
              </Link>
              <ul class="menu-submenu">
                <li class="menu-item">
                  <Link class="menu-link menu-toggle" to="">
                    <div data-i18n="Form Elements">Tutor</div>
                  </Link>
                  <ul className={`menu-submenu ${collapsed ? "collapsed" : ""}`}>
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
                  </ul>
                </li>
                <li class="menu-item">
                <Link
                className={`menu-link menu-toggle ${collapsed ? "collapsed" : ""}`}
                onClick={handleSubMenuToggle}
              >
                    <div data-i18n="Form Elements">User</div>
                  </Link>
                  <ul className={`menu-submenu ${collapsed ? "collapsed" : ""}`}>
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
        </li>
        </>
        )}
      </ul>
    </aside>
  
  );
}
