const router = require("express").Router();

const packageController = require("../../../../controller/admin/registration/package_/packageController");

const upload = require("../../../../helper/multer/multer");

router.post(
  "/package",
  upload.array("files"),
  packageController.createNewPackage
);

router.get("/package", packageController.getAllPackage);

router.put(
  "/package/:id",
  upload.array("files"),
  packageController.updatePackage
);

router.delete("/package/:id", packageController.deletePackage);

module.exports = router;
