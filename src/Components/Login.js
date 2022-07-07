import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [displayError, setDisplayError] = useState(false);

//   let status = true;
  const handleSubmit = async (e) => {
    console.log(email, password, isLoggedIn);


    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    
    const data = await axios.post(
      "http://localhost:3001/login",
      { email , password },config
    );
    
    if(!(Object.keys(data.data).length)){
        setDisplayError(true);
    }
    else{
        const userData = {
            email,
            password,
          };
          localStorage.setItem("user-info", JSON.stringify(userData));
          setIsLoggedin(true);
          setDisplayError(false);
          navigate("/home");
    }
  

    e.preventDefault();
  };

  const handleChange = (e) => {
    let target = e.target.name;
    let value = e.target.value;
    console.log(target, value);
    if (target === "email") {
      setEmail(value);
    } else if (target === "password") {
      setPassword(value);
    }
  };
  return (
    <div className="login">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 login_container">
          <h2 className="login_header display-4">Login</h2>
          {/* display error on login */}
          {displayError && (
            <p className="login_error">Incorrect Email or Password!</p>
          )}
          <input
            name="email"
            className="login_textbox form-control"
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={handleChange}
          />{" "}
          <br></br>
          <input
            name="password"
            className="login_textbox form-control"
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br></br>
          <button
            type="submit"
            name="submit"
            className="login_submit btn btn-dark"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="col-3"></div>
      </div>
      <div className="login_signup">
        Not Registered? <Link to="/signup">Sign Up!</Link>
      </div>
    </div>
  );
}

export default Login;
