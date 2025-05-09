import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')
      .then(result => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      }).catch(err => console.log(err));
  }, []);

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className='btn btn-success'>
        Add Employee 
      </Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employee.map(c => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td><img src={`http://localhost:3000/Images/${c.image}`} alt="" width="50" /></td>
                  <td>{c.email}</td>
                  <td>{c.address}</td>
                  <td>{c.salary}</td>
                  <td>
                    <Link to={`/dashboard/edit_employee/${c.id}`} className='btn btn-info btn-sm me-2'>Edit</Link>
                    <button className='btn btn-danger btn-sm'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
