import React from 'react';
import "../assets/css/style.css";
import logo from '../assets/images/l.png';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import Header from './header';
import Footer from './Footer';



const Home = () => {
  return (
    
        <div>
        <Header />

		<div class="content">

			<div class="slider owl-carousel">
				<div class="slide">
					<img alt="" class="slider-image" />
					<div class="slider-subtitle">Call us 24/7</div>
					<div class="slider-title"> 94-117-633-633</div>
					<span class="slider-subtitle">or</span>
					<div class="slider-button">
					<NavLink to="/login-select">
						<a class="btn btn-primary">BOOK NOW</a>
                    </NavLink>
					</div>
				</div>
			</div>
			
			<section class="booking">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h2>Book taxi online</h2>
								<h6> Availabile Vehicle Types</h6>
							</div>
						</div>
					</div>
					<form class="booking-form">
						<div class="row centerit">
							<div class="col-xs-6 col-sm-2">
								<fieldset class="car-type">
									<input type="checkbox" name="car-type" id="econo" />
									<label for="econo"><i class="icon-car-classic"></i>Car</label>
								</fieldset>
							</div>
							<div class="col-xs-6 col-sm-2">
								<fieldset class="car-type">
									<input type="checkbox" name="car-type" id="classic" />
									<label for="classic"><i class="icon-car-minivan"></i>Van</label>
								</fieldset>
							</div>
							<div class="col-xs-6 col-sm-2">
								<fieldset class="car-type">
									<input type="checkbox" name="car-type" id="minivan" />
									<label for="minivan"><i class="icon-car-wagon"></i>Minivan</label>
								</fieldset>
							</div>
						</div>
					</form>
				</div>
			</section>

			<section class="alt prices">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h2>Prices</h2>
								<h6>No hidden charges</h6>
							</div>
							<div class="info show-mobile">
								Drag the table left and right.
							</div>
							<div class="responsive-table">
								<table class="price-table">
									<thead>
										<tr>
											<th></th>
											<th><i class="icon-car-classic"></i>Econo</th>
											<th><i class="icon-car-minivan"></i>Classic</th>
											<th><i class="icon-car-wagon"></i>Minivan</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>Per Meter</th>
											<td>LKR 1</td>
											<td>LKR 2</td>
											<td>LKR 5</td>
										</tr>
										<tr>
											<th>Landing</th>
											<td>LKR 2</td>
											<td>LKR 2</td>
											<td>LKR 5</td>
										</tr>
										<tr>
											<th>Parking</th>
											<td>LKR 2</td>
											<td>LKR 3</td>
											<td>LKR 6</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section class="why">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h2>Why choose us</h2>
								<h6>Best services in the city</h6>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="service">
								<i class="icon-shield-2"></i>
								<p><strong>Secured booking</strong></p>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="service">
								<i class="icon-thumbs-up-2"></i>
								<p><strong>Reliable services</strong></p>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="service">
								<i class="icon-taxi-1"></i>
								<p><strong>Luxury cars</strong></p>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="service">
								<i class="icon-credit-card"></i>
								<p><strong>Credit cards accepted</strong></p>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="service">
								<i class="icon-headphone"></i>
								<p><strong>Customer service</strong></p>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="service">
								<i class="icon-smoke-free-area"></i>
								<p><strong>Non smoking and clean</strong></p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
		

		<Footer />

        </div>
    
  );
}

export default Home;