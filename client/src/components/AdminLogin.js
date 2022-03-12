import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "../assets/css/style.css";
import logo from '../assets/images/l.png';
import API_Admin from '../APIs/API_Admin';
import API_User from '../APIs/API_User';
import API_Driver from '../APIs/API_Driver';


const AdminLogin = () => {
	const userType = localStorage.getItem("user-type");
	const history = useHistory();
	var initialUserData = {
	  email: "",
	  password: "",
	}
	const [userData, setUserData] = useState(initialUserData);
  
	useEffect(() => {
	  setUserData(initialUserData);
	}, [])
  
	const handleSubmit = (e) => {
	  e.preventDefault();
  
	  if(userType === "admin"){
		new API_Admin().loginAdmin(userData).then(data => {
		  localStorage.setItem("user-id", data.id);
		  history.push('/admin-page');
		  alert("Admin Logged In Successfully");
		});
	  }
	  else if(userType === "user"){
		new API_User().loginUser(userData).then(data => {
		  localStorage.setItem("user-id", data.id);
		  history.push('/user-page');
		  alert("Passenger Logged In Successfully");
		});
	  }
	  else if(userType === "driver"){
		new API_Driver().loginDriver(userData).then(data => {
		  console.log(data)
		  localStorage.setItem("user-id", data.id);
		  history.push('/driver-page');
		  alert("Driver Logged In Successfully");
		});
	  }
	}
  
	const handleChange = (e) => {
	  setUserData({...userData, [e.target.name]: e.target.value});
	}
  
	return (

<div>
        
		

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title">
            <h1>Login as Admin</h1>
            <h6>Fill this form & login to your account.</h6>
          </div>
        </div>
      </div>
      <div class="row align-centre">
      <form>
        <div class="form-container">

          <div className='input-box'>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" onChange={(e)=>handleChange(e)} required />
          </div>

          
          <div className='input-box'>

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="psw" onChange={(e)=>handleChange(e)} required />
          </div>

          <button type="submit" className="#" onClick={(e) => handleSubmit(e)}>Login</button>
          
          {
            userType !== "admin" 
            ?
            <div class="container signup">
              <p>Do not have an account? <a href="./register-page">Register</a>.</p>
            </div> 
            : ""
          }
        </div>       
      </form>
      
    </div>
    </div>

        </div>


  );
}

export default AdminLogin;
