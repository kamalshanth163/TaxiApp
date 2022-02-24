import React, { useState } from 'react';
import '../../styles/AdminPage.css'
import DateTimeService from '../../../services/DateTimeService';

function Employee() {
  var initialEmployee = {
    id: "",
    name: "",
    department: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    hotel_id: 0
  }
  const [employee, setEmployee] = useState(initialEmployee);

  return (
    <div className="user-page row">
      User Page
    </div>
  );
}

export default Employee;