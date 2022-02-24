import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div>
        <div class="topnav">      
            <div className="nav-topbar">
              <table>
                <tr>
                  <td>
                    <NavLink className="logo" to="/">
                      <h1 className="main-text">TaxiApp</h1>
                    </NavLink>
                  </td>
                </tr>
              </table>
            </div>
          </div>
    </div>
  );
}

export default NavBar;
