const router=require("express").Router()
const controller=require("../controllers/controller")


router.route("/employeeProfiles")
.get(controller.getAllEmployee)
.post(controller.addProfile)

router.route("/employee/:id")
.get(controller.singleEmployee)
module.exports=router