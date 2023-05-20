import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import axios from 'axios';
import React,{useState,useEffect} from "react"
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function PCreate() {
    const [values, setValues] = useState({
        subjects:'',
        chapters:'',
        difficulty:'',
        reference:'',
        question:'',
        file:null
    
    }); 
    const handleFileChange = (e) => {
        setValues( {...values ,file:e.target.files[0]} );
      };
      const navigate = useNavigate()
      const handleSubmits = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('subjects', values.subjects);
        formData.append('chapters', values.chapters);
        formData.append('difficulty', values.difficulty);
        formData.append('reference', values.reference);
        formData.append('question', values.question);
        formData.append('file', values.file);
    
        console.log(formData);
    
     axios.post("http://localhost:3001/pacreate",formData , {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })   
           .then((res) => {
            console.log(res);
            if (res.data.status === 'Success') {
              toast.success('pacreate created successfully');
              navigate('/pcreate')
      
            } else {
              alert('Error');
            }
          })
          .catch((err) => console.log(err));
    
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
                            
                                      <div  className="page-content mt-4">
                                      <div  contentanimate>
                                    
                                      <app-question-paragraph>
                                      <div  className="row justify-content-center">
                                      <div  className="col-md-11 stretch-card">
                                      <div  className="card">
                                    <div  className="card-body">
                                      <div  className="card-title">
                                        <strong >Create Paragraph</strong>
                                      </div>
                                      <div  className="form-group">
                                        <label  htmlFor><strong >Subjects <span  className="text-danger">*</span>
                                        </strong>
                                        </label>
                                        <select  name="module" formcontrolname="module_id" className="form-control ng-dirty ng-valid ng-touched"
                                        onChange={(e)=>setValues({...values, subjects:e.target.value})}
                                        >
                                        <option  value selected disabled>-- Select Subject --</option><option  value="l81c2xlj">Zoho_1_verbal </option>
                                        <option  >Zoho _ C Fundamentals </option>
                                        <option  >Zoho Advanced Programming</option>
                                        <option  >Zoho Basic Programming </option>
                                        <option  >Technical Practice </option>
                                        <option  >Dynamic Programming </option>
                                        <option  >Aptitude</option>
                                        </select>
                                        </div>
                                        <div  className="form-group">
                                        <br></br>
                                        <label  htmlFor><strong >Chapters <span  className="text-danger">*</span>
                                        </strong></label><select  name="type" formcontrolname="chapter_id" className="form-control ng-dirty ng-valid ng-touched"
                                        onChange={(e)=>setValues({...values, chapters:e.target.value})}
                                        >
                                        <option  value selected disabled>-- Select Chapter --</option>
                                        <option  > Fundamentals </option> </select>
                                        </div>
                                        <br></br>
                                        <div  className="form-group"><label  htmlFor><strong >Difficulty <span  className="text-danger">*</span>
                                         </strong></label><div  className="row"><div  className="col-md-4 col-12">
                                          <input  type="radio" 
                                          name="difficulty" 
                                          value="easy"
                                          formcontrolname="difficulty"
                                          id="easy" 
                                          checked={values.difficulty === 'easy'}
                                          className="ng-untouched ng-pristine ng-valid" 
                                          onChange={(e)=>setValues({...values, difficulty:e.target.value})}
                                          /> Easy 
                                          </div>
                                        <div  className="col-md-4 col-12">
                                            <input  type="radio" 
                                            name="difficulty"
                                            value="medium" 
                                            formcontrolname="difficulty" 
                                            id="medium" 
                                            checked={values.difficulty === 'medium'}
                                            className="ng-untouched ng-pristine ng-valid" 
                                            onChange={(e)=>setValues({...values, difficulty:e.target.value})}
                                            /> Medium 
                                        </div>
                                        <div  className="col-md-4 col-12"><input  type="radio" 
                                        name="difficulty" 
                                        formcontrolname="difficulty" 
                                        value="difficult"
                                        id="difficult" 
                                        checked={values.difficulty === 'difficult'}
                                        className="ng-untouched ng-pristine ng-valid" 
                                        onChange={(e)=>setValues({...values, difficulty:e.target.value})}
                                        /> Difficult 
                                        </div> </div></div>
                                        <br></br>
                                    <div  className="form-group"><label  htmlFor><strong >Reference</strong></label>
                                     <input  type="text" name="reference" placeholder="Reference" formcontrolname="reference" className="form-control ng-untouched ng-pristine ng-valid" 
                                        onChange={(e)=>setValues({...values, reference:e.target.value})}
                                     />
                                    </div>
                                    <br></br>
                                    <div  className="form-group"><label  htmlFor><strong >Question <span  className="text-danger">*</span></strong></label>
                                    <textarea id="ques" rows="10" cols="50"
                                    onChange={(e)=>setValues({...values, question:e.target.value})}
                                    > </textarea>

                                    <div  className="form-group pt-2"><label  htmlFor><strong >Question Image</strong></label>
                                    <br/>
                                    <input  id="question_image" type="file" formcontrolname="question_image" accept="image/*" className="form-control d-none ng-untouched ng-pristine ng-valid" 
                                    onChange={handleFileChange}
                                    />
                                     <label  htmlFor="question_image" className="btn btn-outline-primary">Choose Image</label></div></div><div  className="form-group">
                                    </div>
                                    <div  className="form-group my-3">
                                        <button  type="submit" className="btn btn-primary" onClick={handleSubmits}>Create</button>
                                    </div>
                                    
                                    </div></div></div></div>
                                    </app-question-paragraph></div></div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
