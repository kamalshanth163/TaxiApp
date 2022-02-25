import API_User from '../APIs/API_User';
import API_Driver from '../APIs/API_Driver';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import API_Admin from '../APIs/API_Admin';
import "../assets/css/style.css";
import logo from '../assets/images/l.png';

const Register = () => {
  const userType = localStorage.getItem("user-type");

  var initialUser = {
    name: "",
    license_id: "",
    availability: true,
    email: "",
    phone: "",
    password: "",
  }

  const history = useHistory();
  const [user, setUser] = useState(initialUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userType === "user"){
      var passenger = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
      }
      new API_User().postUser(passenger).then(data => {
        localStorage.setItem("user-id", data.insertId);
        history.push('/user-page');
      });
    }
    else if(userType === "driver"){
      var driver = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
        license_id: user.license_id,
        availability: user.availability
      }
      new API_Driver().postDriver(driver).then(data => {
        localStorage.setItem("user-id", data.insertId);
        history.push('/driver-page');
      });
    }
  }

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  return (
    <div className="register-page">

<div className="#">
      <header class="header">
			
      <div class="top-bar">
  
          <div class="container">
              <button id="phone-trigger" class="phone-trigger ion-android-call"></button>
              <ul class="phones">
                  <li><button class="driver-links btn-shape"><p>Login</p></button></li>
                  <li><button class="driver-links btn-shape"><p>Signup</p></button></li>
              </ul>
    <ul class="phones">
    <li><a href="tel:1-800-200-300"><span>General Inquiries</span> +94117533433</a></li>
              </ul>
    <ul class="driver-links">
      <button class="#"><p>Become a Driver</p></button>
              </ul>
          </div>
      </div>
      <div id="nav-bar" class="nav-bar">
          <div class="container">
        <img src={logo} alt="Logo" />

              <button id="nav-trigger" class="nav-trigger ion-android-menu"></button>
              <nav class="main-nav">
                  <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="drivers.html">Services</a></li>
                      <li><a href="cars.html">Drivers</a></li>
                      <li><a href="garage.html">Vehicles</a></li>
                      <li><a href="locations.html">Contact</a></li>
                  </ul>

              </nav>
          </div>
      </div>
<svg height="20" width="2560" class="pattern">
  <defs>
    <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" />
      <rect x="10" y="10" width="10" height="10" />
    </pattern>
    <mask id="footer-mask" x="0" y="0" width="2560" height="20" >
      <rect x="0" y="0"  width="2560" height="20" />
    </mask>
  </defs>
  <rect x="0" y="0" width="2560" height="20" id="footer-image" />
</svg>

  </header>

  <div class="content">

<section class="intro">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title">
            <h1>Register as {userType}</h1>
            <h6>Fill this form to create an account.</h6>
          </div>
        </div>
      </div>
      <div class="row align-centre">
      <form>
        <div class="form-container">

          <div className='input-box'>
          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter your name" name="name" id="name" onChange={(e)=>handleChange(e)} required />
          </div>

          
          <div className='input-box'>

          <label for="Phone"><b>Phone</b></label>
          <input type="text" placeholder="Enter your phone number" name="phone" id="phone" onChange={(e)=>handleChange(e)} required />
          </div>

          {
            userType === "driver" ? 
          <div className='input-box'>
              <label for="license_id"><b>License id</b></label>
              <input type="text" placeholder="Enter your license id" name="license_id" id="license_id" required onChange={(e)=>handleChange(e)}/>
            </div>
            : ""
          }

          <div className='input-box'>

          <label for="Phone"><b>Email</b></label>
          <input type="text" placeholder="Enter your Email " name="email" id="email" onChange={(e)=>handleChange(e)} required />
          </div>

          <div className='input-box'>

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="password" required onChange={(e)=>handleChange(e)}/>

          </div>

          <button type="submit" class="registerbtn" onClick={(e) => handleSubmit(e)}>Register</button>
          
          {
            userType !== "admin" 
            ?
            <div class="container signup">
              <p>Already have an account? <a href="./login-page">Sign in</a>.</p>
            </div> 
            : ""
          }
        </div>       
      </form>
      
    </div>
    </div>

  </section>

      

</div>
<footer class="footer">

  <svg height="20" width="2560" class="pattern">
    <defs>
      <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" />
        <rect x="10" y="10" width="10" height="10" />
      </pattern>
      <mask id="footer-mask" x="0" y="0" width="2560" height="20" >
        <rect x="0" y="0"  width="2560" height="20" />
      </mask>
    </defs>
    <rect x="0" y="0" width="2560" height="20" id="footer-image" />
  </svg>

  <div class="widgets">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="widget">
            <h6>About us</h6>
            <p>The City Taxi software is a platform that facilitates a real time connection between the taxi passenger and the taxi driver, enabling mutual engagement for the receipt and delivery of a seamless service.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="widget">
            <h6>Quick links</h6>
            <ul class="quick-links">
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="drivers.html">Drivers</a></li>
              <li><a href="cars.html">Cars</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="widget">
            <h6>Contact</h6>
            <ul class="contact">
              <li class="hotline"><a href="tel:94117433433">+94 117 423 423</a></li>
              <li class="phone"><a href="tel:212-647-0772">+94 114 550 550</a></li>
              <li class="email"><a href="mailto:info@taxigrabber.biz">info@citytaxi.com</a></li>
              <li class="address">City Taxi (Pvt) Ltd. <br />
                        No 309, High Level Road, <br />
                        Kandy, Sri Lanka</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="credits">
    <div class="container">
      <div class="copyright">&copy; City Taxi</div>
      <ul class="social-links">
        <li><a href="htp://facebook.com">Facebook</a></li>
        <li><a href="htp://twitter.com">Twitter</a></li>
        <li><a href="htp://linkedin.com">LinkedIn</a></li>
        <li><a href="htp://instagram.com">Instagram</a></li>
      </ul>
    </div>
  </div>
</footer>

</div>
















      {/* <h3 className="back-btn"  onClick={(e) => history.push('/')}>Back to Home</h3>
      <form>
        <div class="container">
          <h1>Register as {userType}</h1>
          <p>Fill this form to create an account.</p>
          <hr />

          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter your name" name="name" id="name" required onChange={(e)=>handleChange(e)}/>

          <label for="phone"><b>Phone</b></label>
          <input type="text" placeholder="Enter your phone number" name="phone" id="phone" required onChange={(e)=>handleChange(e)}/>

          {
            userType === "driver" ? 
            <div>
              <label for="license_id"><b>License id</b></label>
              <input type="text" placeholder="Enter your license id" name="license_id" id="license_id" required onChange={(e)=>handleChange(e)}/>
            </div>
            : ""
          }

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={(e)=>handleChange(e)}/>

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="password" required onChange={(e)=>handleChange(e)}/>

          <button type="submit" class="registerbtn" onClick={(e) => handleSubmit(e)}>Register</button>

          <div class="signin">
            <p>Already have an account? <a href="./login-page">Sign in</a>.</p>
          </div>
        </div>        
      </form> */}
    </div>
  );
}

export default Register;
