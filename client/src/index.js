import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Layout/login';
import Dashboard from './Layout/Dashboard/dashboard'
import VendorRegister from './Layout/Dashboard/Vendor/vendor-register';
import ManageVendor from './Layout/Dashboard/Vendor/manage-vendor';
import Institution from './Layout/Institution/institution';
import BatchYears from './Layout/Institution/batchYears';
import InstitutionUsers from './Layout/Institution/users';
import AddInstitutionUser from './Layout/Institution/add-institution-users';
import Batches from './Layout/Institution/batch'
import Subjects from './Layout/QuestionBank/subjects';
import Register from './Layout/register';
import PCreate from './Layout/QuestionBank/pacreate';
import Pview from './Layout/QuestionBank/pview';
import Createcodingques from './Layout/QuestionBank/createcodingques';
import Viewcodingques from './Layout/QuestionBank/viewcodingques';
import Chapters from './Layout/QuestionBank/chapters';
import UpdateVendor from  './Layout/Dashboard/Vendor/update-vendor';
import Catergories from './Layout/Assessments/catergories';
import Assessments from './Layout/Assessments/assessments';
import StaffProfile from './Layout/profile/staffProfile';
import CreateAssessment from './Layout/Assessments/create-assessment';
import Assessmentreport from './Layout/Reports/assessmentreport';
import Participationreport from './Layout/Reports/participationreport';
import Pcategories from './Layout/Practice/pcategories';
import Ptopics from './Layout/Practice/ptopics';
import Ptests from './Layout/Practice/ptests';
import PasswordReset from './Layout/profile/passwordReset'
import Access from './Layout/LearningPath/access'
import AddLearningPath from './Layout/LearningPath/add-learning-path'
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          {/* All routes or redirects*/}
          <Route path="/register" element={<Register />} />
         <Route index element={<Login />} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/vendor-register" element={<VendorRegister/>} />
         <Route path="/manage-vendor" element={<ManageVendor/>} />
         <Route path="/institution" element={<Institution/>} />
         <Route path="/batch-years" element={<BatchYears/>} />
         <Route path="/institution-users" element={<InstitutionUsers/>} />
         <Route path="/add-institution-users" element={<AddInstitutionUser/>} />
         <Route path="/batch" element={<Batches/>} />
         <Route path="/subjects" element={<Subjects/>}/>
         <Route path="/pcreate" element={<PCreate/>}/>
         <Route path="/pview" element={<Pview/>}/>
         <Route path="/createcodingques" element={<Createcodingques/>}/>
         <Route path="/viewcodingques" element={<Viewcodingques/>}/>
         <Route path="/chapters" element={<Chapters/>}/>
         <Route path="/catergories" element={<Catergories/>}/>
         <Route path="/assessments" element={<Assessments/>}/>
         <Route path="/profile/staff-profile" element={<StaffProfile/>}/>
         <Route path="/update-vendor" element={<UpdateVendor/>}/>
         <Route path="/create-assessment" element={<CreateAssessment/>}/>
         <Route path="/assessmentreport" element={<Assessmentreport/>}/>
         <Route path="/participationreport" element={<Participationreport/>}/>
         <Route path="/pcategories" element={<Pcategories/>}/>
         <Route path="/ptopics" element={<Ptopics/>}/>
         <Route path="/ptests" element={<Ptests/>}/>
         <Route path="/password-reset" element={<PasswordReset/>}/>
         <Route path="/access" element={<Access/>}/>
         <Route path="/add-learning-path" element={<AddLearningPath/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

   </>
  );
}


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
