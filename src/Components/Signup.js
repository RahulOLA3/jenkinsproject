import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/signup.css"
import {useNavigate} from 'react-router-dom'
function Signup() {
    let navigate=useNavigate();
    const [name,setName] = useState("");
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSubmit = (e) => {
        console.log(name,username,email,password);
        const userData = {
            email,
            // username,
            // name,
            password,
          };
          localStorage.setItem('user-info', JSON.stringify(userData));
          setEmail('');
          setPassword('');
          setName('');
          setUserName('');
        navigate('/login');
        e.preventDefault();
      }

    const handleChange = (e) => {
        let target = e.target.name;
        let value =e.target.value;
        console.log(target,value);
        if(target==="email"){
            setEmail(value);
        }
        else if(target==="password"){
            setPassword(value);
        }
        else if(target==="name"){
            setName(value);
        }
        else if(target==="username"){
            setUserName(value);
        }
    }



  return (
    <div className='signup'>  
        <form>
    <h3 className='signup_header display-5'>Sign Up</h3>

    <div className="mb-3">
      <label>Enter Name</label>
      <input
        type="text"
        className="form-control signup_textbox"
        placeholder="Full Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label>User Name</label>
      <input type="text"  name="username"
        value={username} className="form-control signup_textbox" placeholder="User Name" onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label>Email Address</label>
      <input
        type="email"
        name="email"
        value={email}
        className="form-control signup_textbox"
        placeholder="Enter email"
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        className="form-control signup_textbox"
        placeholder="Enter password"
        onChange={handleChange}
      />
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Sign Up
      </button>
    </div>
    <p className="forgot-password text-right">
      Already registered? <Link to="/login">Sign in!</Link>
    </p>
  </form></div>
  )
}

export default Signup