import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
export default function Participationreport() {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div className="page-content mt-4"><div>
        <router-outlet />
        <app-participation-report>
            <div  className="row mt-2 justify-content-center">
                <div  className="col-md-11 stretch card">
                    <div >
                        <div  className="card-body">
                        <div class="col-md-6">
                              <h6>
                                <strong>Participation Reports:</strong>
                              </h6>
                            </div>
                            <hr></hr>
                            <form  noValidate action className="ng-untouched ng-pristine ng-invalid">
     <div  className="form-group"><label >Institution <span  className="text-danger">*</span></label><select  formcontrolname="institution" name="institution" className="form-control default-input ng-untouched ng-pristine ng-invalid" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
             <option  value selected> -- Institution --</option>
             <option  value="l81aqgxq" className="ng-star-inserted">Coign_practise</option>
             <option  value="l8isw0y2" className="ng-star-inserted">View_2024_pos</option>
             <option  value="l8ndd2us" className="ng-star-inserted">Gpcet</option>
             <option  value="l8omwowz" className="ng-star-inserted">Aits_2023 Pos</option>
             <option  value="l8sopzic" className="ng-star-inserted">Vnr</option>
         </select></div>

         <div  className="form-group"><label >Category <span  className="text-danger">*</span></label><select  formcontrolname="category_id" name="type" className="form-control default-input ng-untouched ng-pristine ng-invalid" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
             <option  value selected> -- Category --</option>
             <option  value="l8kli3ip" className="ng-star-inserted">Coign_daily Practice_technical_view</option>
             <option  value="l9y1j9f6" className="ng-star-inserted">Coign_daily Practice_technical_au</option>
             <option  value="la2i9rhz" className="ng-star-inserted">Coign_daily Practice_aptitude_aits</option>
             <option  value="la2iamjd" className="ng-star-inserted">Coign_daily Practice_verbal_aits</option>
         </select></div>
         <div  className="form-group"><label >Assessment <span  className="ng-select ng-select-multiple ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"></span></label><select  formcontrolname="assesment_id" name="type" className="form-control default-input ng-untouched ng-pristine ng-invalid" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
             <option  value selected> -- Assessment --</option>
             <option  value=" " className="ng-star-inserted">Assessment_1</option>
             <option  value=" " className="ng-star-inserted">Assessment_2</option>
         </select></div>
     <div  className="form-group"><label >Batch Year</label><select  formcontrolname="batch_year" name="type" className="form-control default-input ng-untouched ng-pristine ng-valid" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
             <option  value selected> -- Batch Year --</option>
         </select></div>
         <div  className="form-group"><label >Batch </label><select  formcontrolname="batch" name="type" className="form-control default-input ng-untouched ng-pristine ng-valid" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
             <option  value selected> -- Batch  --</option>
         </select></div>    
         <br></br>
                <div  className="form-group text-center"><button  type="submit" className="btn btn-primary">Download</button></div>
        </form>
                        </div>
                    </div>
                </div>
            </div>
        </app-participation-report></div></div></div></div>          
      </div>
    </>
  );
}
