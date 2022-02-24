import React from 'react';
import '../styles/AdminPage.css'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Details from './tabs/Details';
import DriverTrips from './tabs/DriverTrips';

const DriverPage = () => {
  let { path, url } = useRouteMatch();

  return (

  <div className='driver-page'>
    <div>
      <div>

        <h1>Driver page</h1>
        <table className='admin-menu'>
          <tr>
            <td>
              <Link className="menu-link" to={`${url}/details`}>Details</Link>
            </td>
            <td>
              <Link className="menu-link" to={`${url}/driver-trips`}>Trips</Link>
            </td>
          </tr>
        </table>

        <Switch>
          <Route path={`${path}`} exact component = {Details} />
          <Route path={`${path}/details`} component = {Details} />
          <Route path={`${path}/driver-trips`} component = {DriverTrips} />
        </Switch>

      </div>
    </div>
    
    </div>
  );
}

export default DriverPage;
