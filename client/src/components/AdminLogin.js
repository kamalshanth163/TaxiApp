import React from 'react';
import { useHistory } from 'react-router-dom';
import "../assets/css/style.css";
import logo from '../assets/images/l.png';

const AdminLogin = () => {
  const history = useHistory();

  const handleStart = (userType) => {
    localStorage.setItem("user-type", userType);
    history.push('./login-page')
  }

  return (

<div>
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


  );
}

export default AdminLogin;
