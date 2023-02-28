const router=require("express").Router()
const controller=require("../controllers/controller")

//Routes

router.route("/employeeProfiles")
.get(controller.getAllEmployee)
.post(controller.addProfile)


module.exports=router