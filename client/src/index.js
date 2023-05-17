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
import ReadInstitute from './Layout/Institution/operationsInstitute/readInstitute';
import Register from './Layout/register';
import PCreate from './Layout/QuestionBank/pacreate';
import Pview from './Layout/QuestionBank/pview';
import Chapters from './Layout/QuestionBank/chapters';

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
          <Route path="/read/:institutionName" element={<ReadInstitute/>} />
          <Route path="/batch-years" element={<BatchYears/>} />
          <Route path="/institution-users" element={<InstitutionUsers/>} />
          <Route path="/add-institution-users" element={<AddInstitutionUser/>} />
          <Route path="/batch" element={<Batches/>} />
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/pcreate" element={<PCreate/>}/>
          <Route path="/pview" element={<Pview/>}/>
          <Route path="/chapters" element={<Chapters/>}/>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

