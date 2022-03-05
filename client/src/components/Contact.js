import React from 'react';
import "../assets/css/style.css";
import logo from '../assets/images/l.png';
import Header from './header';
import Footer from './Footer';




const Contact = () => {
  return (
    
        <div>
        	<Header />

		<div class="content">
			<section class="intro">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h1>Contact</h1>
								<h6>Say hello</h6>
							</div>
                            <h3>
                            PickMe Head Office
                            </h3>
							<p><big>
                            City Taxi (Pvt) Ltd.
                            No 309, High Level Road,
                            Kandy, Sri Lanka</big></p>
                            
                            <h3>
                            General Inquiries
                            </h3>
							<p><big>
                            +94117433433</big></p>
                                                        
                            <h3>
                            
                                Business Inquiries


                            </h3>
							<p><big>
                            +94114507500 |
business@citytaxi.lk
</big></p>
                                                        
                            <h3>
                            Media & Marketing

                            </h3>
							<p><big>
                            social@citytaxi.lk</big></p>


                            <h3>
                            Careers
                            </h3>
							
                            <p><big>
                            +94114507518
careers@pickme.lk</big></p>


<h3>
Inquiries on Affiliations (Driver or Fleet Owner)
                            </h3>
							
                            <p><big>
                            +94114507555 |
registration@citytaxi.lk</big></p>



                            






                            


							<hr class="blank" />
						</div>
					</div>
				</div>
			</section>
			

		</div>
		<Footer />
		
        </div>
    
  );
}

export default Contact;