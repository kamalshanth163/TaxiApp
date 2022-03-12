import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterSelection from './components/RegisterSelection';
import AdminPage from './components/admin-page/AdminPage';
import LoginPage from './components/Login';
import LoginSelectionPage from './components/LoginSelection';
import RegisterPage from './components/Register';
import DriverPage from './components/driver-page/DriverPage';
import UserPage from './components/user-page/UserPage';
import home from './components/Home';
import about from './components/About';
import contact from './components/Contact';
import Driverslist from './components/Drivers';
import Services from './components/Services';
import Vehicles from './components/Vehicles';
import AdminLogin from './components/AdminLogin';


function App() {
  return (


      <Router>
         <Switch>
             <Route path="/" exact component = {home} />
             <Route path="/login-select" exact component = {LoginSelectionPage} />
             <Route path="/registration-select" exact component = {RegisterSelection} />
             <Route path="/admin-page" component = {AdminPage} />
             <Route path="/login-page" component = {LoginPage} />
             <Route path="/register-page" component = {RegisterPage} />
             <Route path="/driver-page" component = {DriverPage} />
             <Route path="/user-page" component = {UserPage} />
             <Route path="/about-us" component = {about} />
             <Route path="/contact" component = {contact} />
             <Route path="/drivers-list" component = {Driverslist} />
             <Route path="/services" component = {Services} />
             <Route path="/vehicles" component = {Vehicles} />
             <Route path="/admin-login" component = {AdminLogin} />
         </Switch>
       </Router>

  );
}

export default App;
