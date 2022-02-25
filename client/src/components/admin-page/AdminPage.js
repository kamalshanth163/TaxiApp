import React from 'react';
import logo from '../../assets/images/l.png';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { useHistory } from 'react-router';
import Dashboard from './tabs/Dashboard';

const AdminPage = () => {
  let { path, url } = useRouteMatch();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log('logout')
    localStorage.clear();
    history.push('/');
  }

  return (

  <div className='admin-page'>

<header class="header">

    <div class="top-bar">
  
  <div class="container">
      <ul class="phones">
          <li><button class="driver-links btn-shape logout" onClick={(e) => handleLogout(e)}><p>Logout</p></button></li> 
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

  <section className='no-pad'>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title">
            <h1>Welcome Admin !</h1>
          </div>
        </div>
      </div>
      <div class="row align-centre">

      <Switch>
          <Route path={`${path}`} exact component = {Dashboard} />
          <Route path={`${path}/dashboard`} component = {Dashboard} />
        </Switch>
      

    </div>
    </div>

  </section>





    {/* <div>
      <div>

        <h1>Admin page</h1>
        <table className='admin-menu'>
          <tr>
            <td>
              <Link className="menu-link" to={`${url}/dashboard`}>Dashboard</Link>
            </td>
          </tr>
        </table>

        <Switch>
          <Route path={`${path}`} exact component = {Dashboard} />
          <Route path={`${path}/dashboard`} component = {Dashboard} />
        </Switch>

      </div>
    </div> */}
    
    </div>
  );
}

export default AdminPage;
