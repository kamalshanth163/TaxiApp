import React, { useEffect, useState } from 'react';
import API_Driver from '../../../APIs/API_Driver';
import API_User from '../../../APIs/API_User';
import '../../styles/AdminPage.css'

function Booking() {
  const userId = localStorage.getItem("user-id");

  const initialBooking = {
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

  const [booking, setBooking] = useState(initialBooking);
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [totalCharge, setTotalCharge] = useState(0);

  useEffect(() => {
    getAllDrivers();
    getAllVehicles();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(booking)
    booking.user_id = userId;
    booking.status = "Pending";
    booking.total_charge = totalCharge;
    new API_User().postBooking(booking).then(data => {
      alert("Trip booked successfully");
    })

    var driver = drivers.find(i => i.id.toString() === booking.driver_id.toString());
    driver.availability = 0;
    new API_Driver().updateDriver(driver).then(data => {
      console.log(data);
    })
  }
    
  const handleChange = (e) => {
    setBooking({...booking, [e.target.name]: e.target.value});
  }

  const getAllVehicles = () => {
    new API_User().getAllVehicles().then(data => {
      setVehicles([...data]);
    })
  }

  const getAllDrivers = () => {
    new API_Driver().getAllDrivers().then(data => {
      setDrivers([...data]);
    })
  }

  const calculateTotalCharge = (e) => {
    e.preventDefault();
    const vehicle = vehicles.find(d => d.id.toString() === booking.vehicle_id.toString());
    setTotalCharge(vehicle.charge_per_meter * booking.distance);
  }

  return (
    <div className="booking-page row">
      <h1>Booking Page</h1>

      <form className="form">

           <div className='input'>
              <label for="start_location">Start location</label>
               <input type="text" placeholder="Start location" name="start_location" id="start_location" value={booking.start_location} required onChange={(e)=>handleChange(e)}/>
            </div>

            <div className='input'>
              <label for="end_location">End location</label>
               <input type="text" placeholder="End location" name="end_location" id="end_location" value={booking.end_location} required onChange={(e)=>handleChange(e)}/>
            </div>

            <div className='input'>
              <label for="distance">Distance (meters)</label>
               <input type="number" placeholder="Distance (meters)" name="distance" id="distance" value={booking.distance} required onChange={(e)=>handleChange(e)}/>
            </div>

            <div className='input'>
              <label for="duration">Duration (minutes)</label>
              <input type="number" placeholder="Duration (minutes)" name="duration" id="duration" value={booking.duration} required onChange={(e)=>handleChange(e)}/>
            </div>

            <div className='input select'>
              <label for="vehicle_id">Select a Vehicle</label>
              <select name="vehicle_id" id="vehicle_id" value={booking.vehicle_id} required onChange={(e)=>handleChange(e)}>
                {
                  vehicles.map(vehicle => {
                    return <option value={vehicle.id}>{vehicle.name}</option>
                  })
                }  
              </select>
            </div>

            <div className='input select'>
              <label for="driver_id">Select a Driver</label>
              <select name="driver_id" id="driver_id" value={booking.driver_id} required onChange={(e)=>handleChange(e)}>
                {
                  drivers.map(driver => {
                    return <option value={driver.id}>{driver.name}</option>
                  })
                }  
              </select>
            </div><br />

            <button disabled={booking.vehicle_id == 0 || booking.distance == 0} type="submit" className="calculateBtn" onClick={(e) => calculateTotalCharge(e)}>Calculate Total Charge</button>

            <div>
              <label>Total Charge (LKR)</label>
              <h2>{totalCharge}</h2>
            </div>

            <div className='btns'>
            <button type="submit" className="addBtn" onClick={(e) => handleSubmit(e)}>Book</button>
            </div>

        </form>

    </div>
  );
}

export default Booking;