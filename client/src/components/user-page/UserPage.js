import React from 'react';
import '../styles/AdminPage.css'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Booking from './tabs/Booking';
import UserTrips from './tabs/UserTrips';

const UserPage = () => {
  let { path, url } = useRouteMatch();

  return (

  <div className='user-page'>
    <div>
      <div>

        <h1>Passenger page</h1>
        <table className='admin-menu'>
          <tr>
            <td>
              <Link className="menu-link" to={`${url}/booking`}>Booking</Link>
            </td>
            <td>
              <Link className="menu-link" to={`${url}/user-trips`}>Trips</Link>
            </td>
          </tr>
        </table>

        <Switch>
          <Route path={`${path}`} exact component = {Booking} />
          <Route path={`${path}/booking`} component = {Booking} />
          <Route path={`${path}/user-trips`} component = {UserTrips} />
        </Switch>

      </div>
    </div>
    
    </div>
  );
}

export default UserPage;
