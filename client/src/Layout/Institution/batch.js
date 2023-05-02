import Sidebar from "../includes/sidebar"
import Header  from "../includes/header"
export default function Batches(){
    return(
        <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
                {/*Your body code*/}
                
            </div>
        </div>
        </div>
        </div>
        </>
    

    );
}