import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

//Home Page

function Home() {
  const [allEmployee, setAllEmployee] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await axios.get("/employeeProfiles");
        console.log(employees.data);
        setAllEmployee(employees.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="home-wrapper">
      {allEmployee.map((employee) => (
        <div className="card" key={employee._id}>
          <div className="img">
            <img src={employee.avatar} alt={employee.name} />
          </div>
          <div className="infos">
            <div className="name">
              <a href={`/profile/${employee.employeeId}`} className="Emp_name">
                {employee.name}
              </a>
              <h4>{employee.jobTitle}</h4>
            </div>

            <ul className="stats">
              <li>
                <h3>{employee.contactInfo[0]}</h3>
                <h3>{employee.contactInfo[1]}</h3>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
