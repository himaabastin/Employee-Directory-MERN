import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Profile.css";
import { employeeProfiles } from "../../../axios/services/HomeService";

//Employee Profile

function Profile() {
  const [employee, setEmployee] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await employeeProfiles()
        console.log(employees)
        const selectedEmployee = employees.find(
          (emp) => emp.employeeId === params.id
        );
        if (selectedEmployee) {
          setEmployee(selectedEmployee);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployees();
  }, [params.id]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h3>{employee.name}</h3>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <img alt="User Pic" src={employee.avatar} />
        </div>
        <div className="profile-details">
          <table className="profile-information">
            <tbody>
              <tr>
                <td>Job</td>
                <td className="details">{employee.jobTitle}</td>
              </tr>
              <tr>
                <td>email</td>
                <td className="details">
                  {employee.contactInfo && employee.contactInfo[0]}
                </td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td className="details">
                  {employee.contactInfo && employee.contactInfo[1]}
                </td>
              </tr>
              <tr>
                <td>History</td>
                <td className="details">{employee.history}</td>
              </tr>
              <tr>
                <td>Education</td>
                <td className="details">{employee.education}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
