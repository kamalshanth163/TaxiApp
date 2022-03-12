import React, { useEffect, useState } from 'react';
import API_Driver from '../../../APIs/API_Driver';
import API_User from '../../../APIs/API_User';
import { useHistory } from 'react-router';
import '../../../App.css'

function CurrentTrip() {

  const userId = localStorage.getItem("user-id");
  const driverId = localStorage.getItem("driver-id");
  const vehicleId = localStorage.getItem("vehicle-id");
  const history = useHistory();

  const initialTrip = {
    id: 0,
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
  const [user, setUser] = useState({});

  console.log("trip", trip)

  useEffect(() => {
    console.log(trip)
    new API_Driver().getAllBookings().then(data => {
      console.log(data);
      var currentTrip = data.find(i => 
        i.driver_id.toString() === userId && 
        i.status === "Pending");

        setTrip({...currentTrip});
        console.log(currentTrip)

        if(currentTrip !== undefined){
          new API_User().getAllUsers().then(data => {
            console.log(data);
            var user = data.find(i => i.id.toString() === currentTrip.user_id.toString());
            console.log(user);
            setUser({...user});
          })
        }
 
      })   
    }, [])

  const completePayment = () => {

    // if(trip.id.toString() == "0"){

      // update driver status to available
      new API_Driver().getAllDrivers().then(data => {
        var driver = data.find(d => d.id.toString() === userId);
        driver.availability = 1;
        new API_Driver().updateDriver(driver).then(data => {
          console.log(data);
          alert(`Driver ${driver.name} is Available for new trips.`)
        })
      })
  
      // update booking status to completed
      new API_Driver().getAllBookings().then(data => {
        var booking = data.find(d => d.id.toString() === trip.id.toString());
        console.log("trip", trip);
        console.log("booking", booking);
        booking.status = "Completed";
        new API_Driver().updateBooking(booking).then(data => {
          console.log(data);
          alert(`Payment completed successfully. Thank you`);
          history.push('./driver-completed-trips');
        })
      })
    // }
  }

  return (
    
    <div className="user-current-trip-page row">
    {
  
      Object.keys(trip).length === 0 || trip.id.toString() == "0" ? 

      <h2>No current trip available to display</h2> :
      <div>
      <h2>Current Trip</h2>

      <h5>Passenger: {user.name}</h5>

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


      <button className='completetripbtn' onClick={(e) => completePayment()}>Complete payment</button>
    </div>
    }
  </div>
  );
}

export default CurrentTrip;