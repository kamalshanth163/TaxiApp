import React from 'react';
import "../assets/css/style.css";
import logo from '../assets/images/l.png';
import premio from '../assets/images/premio-white.png';
import wagon from '../assets/images/wagon-fx.png';
import premio1 from '../assets/images/premio-1.png';
import vit from '../assets/images/vit-silver.png';
import alto from '../assets/images/alto-black.png';
import Header from './header';
import vitz from '../assets/images/VITZ-BLUE.png';
import Footer from './Footer';



const Vehicles = () => {
  return (
    
        <div>
        <Header />

		<div class="content">


			<section class="intro">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h1>CARS</h1>
								<h6>SEE WHAT WE DRIVE</h6>
							</div>
							<hr class="blank" />
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<ul class="cars inline three-columns">
								<li>
            	                    <img src={premio} />
									<h6>TOYOTA PREMIO 2019</h6>
									<p>6.5 L Petrol, G SUPERIOR  , 4 passenger</p>
								</li>
								<li>
                                <img src={wagon}  />
									<h6>SUZUKI WAGON R FX” 2018</h6>
									<p>3.5 L Petrol, FX, 5 passengers</p>
								</li>
								<li>
                                <img src={alto}  />

									<h6>Suzuki Alto 2017</h6>
									<p>3.5 L Petrol, 5 passenger</p>
								</li>
								<li>
                                <img src={premio1}  />
									<h6>TOYOTA PREMIO 2017</h6>
									<p>4.7 L Petrol, G SUPERIOR, 4 passenger</p>
								</li>
								<li>
                                <img src={vit}  />
									<h6>TOYOTA VITZ F SAFETY” 2018</h6>
									<p>2.9 L Petrol, 4 passengers</p>
								</li>
								<li>
                                <img src={vitz}  />

									<h6>TOYOTA VITZ F SAFETY” 2018</h6>
									<p>6.3 L Petrol, 4 passengers</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
		<Footer />

        </div>
    
  );
}

export default Vehicles;