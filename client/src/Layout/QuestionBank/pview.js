import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import React,{useState,useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Pview() {
    const [values, setValues] = useState({
      subject:'',
      chapter:'',
      difficulty:'',
      reference:''

  
  }); 
    const [data, setData] = useState([])
useEffect(()=>{
  console.log("h");

  axios.get('http://localhost:3001/pview')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
},[])

    const handleSubmits = (e) => {
      e.preventDefault();
      const { subject, chapter, difficulty, reference } = values;
      axios.get(`http://localhost:3001/pview/${subject}/${chapter}/${difficulty}/${reference}`)
        .then(res => {
          setData(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    return (

    <>
                  <ToastContainer />
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              <div class="mt-5">
                <div class="page-content">
                  <div class="row justify-content-center">
                    <div class="col-md-11 stretch-card">
                      <div class="card row">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-6">
                              <h6>
                                <strong>Filter Paragraph Questions:</strong>
                              </h6>
                            </div>
                          </div>
                          <form
                            action=""
                            class="row ng-untouched ng-pristine ng-invalid"
                          >
                            <div class="col-md form-group">
                              <select
                                formcontrolname="subject"
                                name="_subject"
                                id="_subject"
                                class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                onChange={(e)=>setValues({...values, subject:e.target.value})}
                              >
                                <option value="" selected="">
                                  -- Select Subject --
                                </option>
                                {Array.isArray(data) &&
                          data.map((pacreate, index) => {
                            return (
                              <>
                              <option value={pacreate.subjects}>{pacreate.subjects}</option>
                              </>
                            );
                          })}
                              </select>
                              <small>
                                <strong>Select Subject</strong>
                              </small>
                            </div>
                            <div class="col-md form-group">
                              <select
                                formcontrolname="selectchapter"
                                name="selectchapter"
                                id="selectchapter"
                                class="form-select default-input ng-untouched ng-pristine ng-invalid"
                                onChange={(e)=>setValues({...values, chapter:e.target.value})}
                              >
                                <option  selected="">
                                  -- Select-Chapter --
                                </option>
                                {Array.isArray(data) &&
                          data.map((pacreate, index) => {
                            return (
                              <>
                              <option value={pacreate.chapters}>{pacreate.chapters}</option>
                              </>
                            );
                          })}
                              </select>
                              <small>
                                <strong>Select Chapter</strong>
                              </small>
                            </div>
                            <div class="col-md form-group">
                              <select
                                formcontrolname="difficulty"
                                name="_difficulty"
                                id="_difficulty"
                                class="form-select default-input ng-untouched ng-pristine ng-valid"
                                onChange={(e)=>setValues({...values, difficulty:e.target.value})}
                              >
                                <option >-- Select Difficulty --</option>
                                {Array.isArray(data) &&
                          data.map((pacreate, index) => {
                            return (
                              <>
                              <option value={pacreate.difficulty}>{pacreate.difficulty}</option>
                              </>
                            );
                          })}
                              </select>
                              <small>
                                <strong>Select Difficulty</strong>
                              </small>
                            </div>
                            <div class="col-md form-group">
                            <input class="form-control" 
                            type="text" id="_name" 
                            name="_name" placeholder="Reference Name"
                            onChange={(e)=>setValues({...values, reference:e.target.value})}
                            >
                            </input>
                              <small>
                                <strong>Reference</strong>
                              </small>
                            </div>
                            <div class="col-md form-group">
                              <button
                                type="submit"
                                class="btn btn-primary mx-2"
                                onClick={handleSubmits}
                              >
                                Go 
                              </button>
                              &nbsp;&nbsp;
                              <button  
                              type="button" 
                              className="btn btn-outline-danger mx-2">
                               Clear Filter </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center mt-2">
                    <div class="col-md-11 stretch-card">
                      <div class="card row">
                        <div class="card-body">
                        <div class="col-md-6">
                              <h6>
                                <strong>Paragraph Questions:</strong>
                              </h6>
                            </div>
                          <table
                            datatable=""
                            class="table table-bordered row-border hover"
                          >
                            <thead
                              class="text-center"
                              style={{backgroundColor: "#D0D2D5"}}
                            >
                              <tr>
                                <th name="_sno" id="_sno">
                                  S.NO
                                </th>
                                <th name="_name" id="_id">
                                  ID
                                </th>
                                <th name="_email" id="_module">
                                  MODULE
                                </th>
                                <th name="_regd" id="_chapter">
                                  CHAPTER
                                </th>
                                <th name="_mobile" id="_paragraph">
                                  PARAGRAPH
                                </th>
                                <th name="_status" id="_difficult">
                                  DIFFICULTY
                                </th>

                                <th name="_status" id="_reference">
                                  REFERENCE
                                </th>
                                <th name="_status" id="_question">
                                  QUESTION#
                                </th>
                                <th name="_actions" id="_actions">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            {Array.isArray(data) && data.map((pacreate, index)=>{
                                      return <tr key={index}>
                                          <td>{index + 1}</td>
                                          <td>{index + 1}</td>
                                          <td>{pacreate.subjects}</td>
                                          <td>{pacreate.chapters}</td>
                                          <td>{pacreate.difficulty}</td>
                                          <td>{pacreate.reference}</td>


                                          
                                      </tr>
                                    })}
                            
                          </table>
                        </div>
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
