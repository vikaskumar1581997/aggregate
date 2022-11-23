const router = require("express").Router();
const employeeController = require("../../../../controller/admin/registration/employee/employeeController");
const upload = require("../../../../helper/multer/multer");

router.post(
  "/employee",
  upload.single("profileImage"),
  employeeController.createNewEmployee
);

router.get("/employee", employeeController.getAllEmployee);

router.put(
  "/employee/:id",
  upload.single("profileImage"),
  employeeController.updateEmployee
);

router.delete("/employee/:id", employeeController.deleteEmployee);

module.exports = router;
