import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import './Home.css'

function Home() {

  const [allEmployee,setAllEmployee]=useState([])

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await axios.get("/employeeProfiles");
        console.log(employees.data);
        setAllEmployee(employees.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className='home-wrapper'>
      { allEmployee.map((employee)=>(
        <div className="card" key={employee._id}>
          <div className="img">
            <img src={employee.avatar} alt={employee.name} />
          </div>
          <div className="infos">
            <div className="name">
              <h2>{employee.name}</h2>
              <h4>@{employee.jobTitle}</h4>
            </div>
            <p className="text">
              I'm a Front End Developer, follow me to be the first who see my new work.
            </p>
            <ul className="stats">
              <li>
                <h3>15K</h3>
                <h4>Views</h4>
              </li>
              <li>
                <h3>82</h3>
                <h4>Projects</h4>
              </li>
              <li>
                <h3>1.3M</h3>
                <h4>Followers</h4>
              </li>
            </ul>
            <div className="links">
              <button className="follow">Follow</button>
              <button className="view">View profile</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home;
