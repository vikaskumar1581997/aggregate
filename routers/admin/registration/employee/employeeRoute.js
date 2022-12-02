const router = require("express").Router();
const employeeController = require("../../../../controller/admin/registration/employee/employeeController");
const upload = require("../../../../helper/multer/multer");

router.post(
  "/createEmployee",
  upload.single("profileImage"),
  employeeController.createNewEmployee
);

router.get("/getEmployee", employeeController.getAllEmployee);
router.get("/getEmployee/:id", employeeController.getSingleEmployee);

router.put(
  "/updateEmployee/:id",
  upload.single("profileImage"),
  employeeController.updateEmployee
);

router.delete("/deleteEmployee/:id", employeeController.deleteEmployee);

module.exports = router;
