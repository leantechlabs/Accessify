import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
export default function PCreate() {
    return (
        <>
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
                                      <form  noValidate action className="ng-invalid ng-dirty ng-touched">
                                      <div  className="form-group">
                                        <label  htmlFor><strong >Subjects <span  className="text-danger">*</span>
                                        </strong>
                                        </label>
                                        <select  name="module" formcontrolname="module_id" className="form-control ng-dirty ng-valid ng-touched">
                                        <option  value selected disabled>-- Select Subject --</option><option  value="l81c2xlj">Zoho_1_verbal </option>
                                        <option  value="l88nu6lx">Zoho _ C Fundamentals </option><option  value="l88wfgw1">Zoho Advanced Programming</option>
                                        <option  value="l89x3921">Zoho Basic Programming </option>
                                        <option  value="l8e4c1yf">Technical Practice </option>
                                        <option  value="l8n1iaps">Dynamic Programming </option>
                                        <option  value="l8n9ullv">Aptitude</option>
                                        </select>
                                        </div>
                                        <div  className="form-group">
                                        <br></br>
                                        <label  htmlFor><strong >Chapters <span  className="text-danger">*</span>
                                        </strong></label><select  name="type" formcontrolname="chapter_id" className="form-control ng-dirty ng-valid ng-touched">
                                        <option  value selected disabled>-- Select Chapter --</option><option  value="l88nvymz"> Fundamentals </option> </select>
                                        </div>
                                        <br></br>
                                        <div  className="form-group"><label  htmlFor><strong >Difficulty <span  className="text-danger">*</span>
                                         </strong></label><div  className="row"><div  className="col-md-4 col-12">
                                          <input  type="radio" name="difficulty" formcontrolname="difficulty" id="easy" className="ng-untouched ng-pristine ng-valid" /> Easy 
                                          </div>
                                        <div  className="col-md-4 col-12">
                                            <input  type="radio" name="difficulty" formcontrolname="difficulty" id="medium" className="ng-untouched ng-pristine ng-valid" /> Medium 
                                        </div>
                                        <div  className="col-md-4 col-12"><input  type="radio" name="difficulty" formcontrolname="difficulty" id="difficult" className="ng-untouched ng-pristine ng-valid" /> Difficult 
                                        </div> </div></div>
                                        <br></br>
                                    <div  className="form-group"><label  htmlFor><strong >Reference</strong></label>
                                     <input  type="text" name="reference" placeholder="Reference" formcontrolname="reference" className="form-control ng-untouched ng-pristine ng-valid" />
                                    </div>
                                    <br></br>
                                    <div  className="form-group"><label  htmlFor><strong >Question <span  className="text-danger">*</span></strong></label>
                                    <textarea id="ques" rows="10" cols="50"> </textarea>

                                    <div  className="form-group pt-2"><label  htmlFor><strong >Question Image</strong></label>
                                    <br/>
                                    <input  id="question_image" type="file" formcontrolname="question_image" accept="image/*" className="form-control d-none ng-untouched ng-pristine ng-valid" />
                                     <label  htmlFor="question_image" className="btn btn-outline-primary">Choose Image</label></div></div><div  className="form-group">
                                    </div>
                                    <div  className="form-group my-3">
                                        <button  type="submit" className="btn btn-primary">Create</button>
                                    </div>
                                    
                                    </form></div></div></div></div>
                                    </app-question-paragraph></div></div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
