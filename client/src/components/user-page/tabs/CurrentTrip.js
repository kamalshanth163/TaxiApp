import React, { useEffect, useState } from 'react';
import API_Driver from '../../../APIs/API_Driver';
import API_User from '../../../APIs/API_User';
import '../../../App.css'

function CurrentTrip() {

  const userId = localStorage.getItem("user-id");
  const driverId = localStorage.getItem("driver-id");
  const vehicleId = localStorage.getItem("vehicle-id");

  const initialTrip = {
    start_location: "",
    end_location: "",
    distance: 0.0,
    total_charge: 0.0,
    status: "",
    duration: 0.0,
    user_id: 0,
    driver_id: 0,
    vehicle_id: 0,
  }
  
  const [trip, setTrip] = useState(initialTrip);
  const [driver, setDriver] = useState({});

  useEffect(() => {
    new API_User().getAllBookings().then(data => {
      console.log(data);
      var currentTrip = data.find(i => 
        i.user_id.toString() === userId && 
        i.driver_id.toString() === driverId && 
        i.vehicle_id.toString() === vehicleId);
      setTrip({...currentTrip});

      if(currentTrip !== undefined){
        new API_Driver().getAllDrivers().then(data => {
          console.log(data);
          var driver = data.find(i => i.id.toString() === currentTrip.driver_id.toString());
          console.log(driver);
          setDriver({...driver});
        })
      }
    })
  }, [])


  return (
    <div className="user-current-trip-page row">
      <h2>Current Trip</h2>

      <h5>Driver: {driver.name}</h5>

      <table>
        <tr>
          <td>Start location</td>
          <td>{trip.start_location}</td>
        </tr>
        <tr>
          <td>End location</td>
          <td>{trip.end_location}</td>
        </tr>
        <tr>
          <td>Distance</td>
          <td>{trip.distance} meters</td>
        </tr>
        <tr>
          <td>Total charge (LKR)</td>
          <td>{trip.total_charge}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{trip.status}</td>
        </tr>
        <tr>
          <td>Duration</td>
          <td>{trip.duration} minutes</td>
        </tr>
      </table>

    </div>
  );
}

export default CurrentTrip;