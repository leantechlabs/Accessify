import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import AdminDashboard from "./Admin/admindash";

export default function Dashboard() {
  const [auth,setAuth] = useState(false);
  const [message,setMessage] = useState('')
  const [name, setName] = useState('')

  axios.defaults.withCredentials = true;
    const navigate = useNavigate() 
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(res => {
            if(res.data.Status === "Success"){
                setAuth(true)
                setName(res.data.name)
                navigate('/dashboard')  //login
            }else{
                setAuth(false)
                setMessage(res.data.Error)
            }
        })
        .then(err => console.log(err));
    }, [])

    const handleDelete = () => {
        axios.get('http://localhost:3001/logout')
        .then(res => {
            window.location.reload(true);
        }).catch(err=> console.log(err));
    }
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        {
          auth ? 
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
        : 
        <div>
            <h3>{message}</h3>
            <h3>Login Now</h3>
            <Link to='/' className='btn btn-primary'>Login</Link>
        </div>
        }
      </div>
    </>
  );
}
