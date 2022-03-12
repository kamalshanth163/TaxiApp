import React from 'react';
import { useHistory } from 'react-router-dom';
import "../App.css";
import logo from '../assets/images/l.png';
import driver from '../assets/images/driver.png';
import passanger from '../assets/images/passanger.png';
import LoginPage from './Login.js';
import Header from './header';
import Footer from './Footer';



const RegisterSelection = () => {
  const history = useHistory();

  const handleStart = (userType) => {
    localStorage.setItem("user-type", userType);
	history.push('./login-page')
  }

  return (

	

<div>
		<Header />
        
		

		<div class="content">

    <section class="intro">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h1>Welcome to <br /> City Taxi</h1>
								<h6>Register As</h6>
							</div>
							<hr class="blank" />
						</div>
					</div>
					<div class="row flex-box-card">

          <div className='card'>
          <img src={passanger} alt="passanger" />
          <button className="btn btn-1" onClick={() => handleStart("user")}>
            Passenger
          </button>
          </div>

          <div className='card'>
          <img src={driver} alt="driver" />

          <button className="btn btn-1" onClick={() => handleStart("driver")}>
            Driver
          </button>
          </div>
					
				</div>
				</div>

			</section>

          

		</div>
		<Footer />
		
        </div>


  );
}

export default RegisterSelection;
