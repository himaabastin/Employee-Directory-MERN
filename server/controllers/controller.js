const Employees = require("../models/employeeModel");

const controller = {
  //adding employee profile
  addProfile: async (req, res) => {
    try {
     
      const { name, employeeId,jobTitle, department, contactInfo, history, education,avatar } = req.body;
   
      const newEmployee = new Employees({
        name,
        employeeId,
        jobTitle,
        department,
        contactInfo,
        history,
        education,
        avatar
      });

      await newEmployee.save()
      res.json(newEmployee)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  //Get all employees

  getAllEmployee:async(req,res)=>{
    try {
        const allEmployees=await Employees.find()
        res.json(allEmployees)
    } catch (error) {
        return res.status(500).json({ msg: err.message });   
    }
  },
 
};
module.exports = controller;
