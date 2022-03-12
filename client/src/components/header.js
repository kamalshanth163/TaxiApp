import React from 'react';
import "../assets/css/style.css";
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/l.png';


const Header = () => {
  return (
    
        <div>
        <header class="header">
            <div class="top-bar">
                <div class="container">
                    <button id="phone-trigger" class="phone-trigger ion-android-call"></button>
                    <ul class="phones">
					<NavLink to="/login-select">
						<li><button class="driver-links btn-shape"><p>Login</p></button></li>
                    </NavLink>

					<NavLink to="/registration-select">
						<li><button class="driver-links btn-shape"><p>Signup</p></button></li>
                    </NavLink>
                    </ul>
					<ul class="phones">
					<li><a href="tel:1-800-200-300"><span>General Inquiries</span> +94117533433</a></li>
                    </ul>
					<ul class="driver-links">
					<NavLink to="/register-page">
						<button class="#"><p>Become a Driver</p></button>
                    </NavLink>
                    </ul>
                </div>
            </div>
            <div id="nav-bar" class="nav-bar">
                <div class="container">
            	<img src={logo} alt="Logo" />

                    <button id="nav-trigger" class="nav-trigger ion-android-menu"></button>
                    <nav class="main-nav">
                        <ul>
						<NavLink to="/">
							<li><a>Home</a></li>
                    	</NavLink>
						<NavLink to="/about-us">
							<li><a>About</a></li>
                    	</NavLink>

						<NavLink to="/services">
							<li><a>Services</a></li>
                    	</NavLink>

						<NavLink to="/drivers-list">
							<li><a>Drivers</a></li>
                    	</NavLink>

						<NavLink to="/vehicles">
							<li><a>Vehicles</a></li>
                    	</NavLink>

						<NavLink to="/contact">
							<li><a>Contact</a></li>
                    	</NavLink>

                        </ul>

                    </nav>
                </div>
            </div>
			<svg height="20" width="2560" class="pattern">
            <defs>
            <pattern id="header-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" />
                <rect x="10" y="10" width="10" height="10" />
            </pattern>
            <mask id="header-mask" x="0" y="0" width="2560" height="20" >
                <rect x="0" y="0"  width="2560" height="20" />
            </mask>
            </defs>
            <rect x="0" y="0" width="2560" height="20" id="header-image" />
            </svg>

        </header>
        </div>
    
  );
}

export default Header;