import React ,{ useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/register', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/')
            }else{
                alert("Error");
            }
        })
        .then(err => console.log(err));
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign Up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter email" name="name"
                    onChange={e=>setValues({...values, name:e.target.value})}/>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                    onChange={e=>setValues({...values, email:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password"
                    onChange={e=>setValues({...values, password:e.target.value})} />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' type="submit" className="btn btn-primary">Login</Link>
    </form>
        </div>
    </div>
    
  )
}

export default Register
