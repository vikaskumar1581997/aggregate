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
  "/employee",
  upload.single("profileImage"),
  employeeController.updateEmployee
);

router.delete("/:_id", employeeController.deleteEmployee);

module.exports = router;
