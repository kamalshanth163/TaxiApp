import React, { useEffect, useState } from 'react';
import API_Driver from '../../../APIs/API_Driver';
import API_User from '../../../APIs/API_User';

function Dashboard() {

  const [users, setUsers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAndDisplayData();
  }, [])

  const getAndDisplayData = () => {
    new API_User().getAllUsers().then(data => setUsers([...data]));
    new API_User().getAllVehicles().then(data => setVehicles([...data]));
    new API_User().getAllBookings().then(data => setBookings([...data]));
    new API_Driver().getAllDrivers().then(data => setDrivers([...data]));
  }

  return (
    <div className="admin-page-dashboard row">
      <h2>Dashboard</h2>

      <div>
        <div className='dash-card'>
          <h3>Users</h3>
          <span>{users.length}</span>
        </div>
        <div className='dash-card'>
          <h3>Drivers</h3>
          <span>{drivers.length}</span>
        </div>
        <div className='dash-card'>
          <h3>Vehicles</h3>
          <span>{vehicles.length}</span>
        </div>
        <div className='dash-card'>
          <h3>Bookings</h3>
          <span>{bookings.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;