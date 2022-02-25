import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginSelection from './components/LoginSelection';
import AdminPage from './components/admin-page/AdminPage';
import LoginPage from './components/Login';
import LoginSelectionPage from './components/LoginSelection';
import RegisterPage from './components/Register';
import DriverPage from './components/driver-page/DriverPage';
import UserPage from './components/user-page/UserPage';


function App() {
  return (

    // <LoginSelection />
    // <LoginPage />
    // <RegisterPage />


      <Router>
         <Switch>
             <Route path="/" exact component = {LoginSelectionPage} />
             <Route path="/admin-page" component = {AdminPage} />
             <Route path="/login-page" component = {LoginPage} />
             <Route path="/register-page" component = {RegisterPage} />
             <Route path="/driver-page" component = {DriverPage} />
             <Route path="/user-page" component = {UserPage} />
         </Switch>
       </Router>

  );
}

export default App;
