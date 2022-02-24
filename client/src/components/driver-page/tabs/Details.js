import React, { useEffect, useState } from 'react';
import API_Driver from '../../../APIs/API_Driver';
import '../../styles/AdminPage.css'

function Details() {

  const userId = localStorage.getItem("user-id");

  var initialDriver = {
    name: "",
    license_id: "",
    availability: true,
    email: "",
    phone: "",
    password: "",
  }
  const [driver, setDriver] = useState(initialDriver);

  useEffect(() => {
    new API_Driver().getAllDrivers().then(data => {
      const driver = data.find(d => d.id.toString() === userId);
      setDriver(driver);
    })
  }, [])

  return (
    <div className="driver-details-page row">
      <h1>Driver Details Page</h1>

      <table>
        <tr>
          <td>Driver's name</td>
          <td>{driver.name}</td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td>{driver.phone}</td>
        </tr>
        <tr>
          <td>Email address</td>
          <td>{driver.email}</td>
        </tr>
        <tr>
          <td>Driving license id</td>
          <td>{driver.license_id}</td>
        </tr>
        <tr>
          <td>Availability (Currently { driver.availability ? "Available" : "Busy"})</td>
          <td>
          {
            driver.availability 
            ? 
            <button>Set as Busy</button>
            :
            <button>Set as Available</button>
          }
          </td>
        </tr>
      </table>

    </div>
  );
}

export default Details;