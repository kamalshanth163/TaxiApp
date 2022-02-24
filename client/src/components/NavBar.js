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
                      <h1 className="main-text">LD</h1>
                    </NavLink>
                  </td>
                  <td className="sign-section">
                      {/* <span className="signin-btn">Login</span> */}
                  </td>
                </tr>
              </table>
            </div>
          </div>
    </div>
  );
}

export default NavBar;
