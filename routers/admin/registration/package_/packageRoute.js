const router = require("express").Router();

const packageController = require("../../../../controller/admin/registration/package_/packageController");

const packageRate = require("../../../../controller/admin/registration/package_/packageRate");

const packagePromotion = require("../../../../controller/admin/registration/package_/packagePromotion");

const upload = require("../../../../helper/multer/multer");

router.post(
  "/createPackage",
  upload.array("files"),
  packageController.createNewPackage
);
router.post("/createPackageRate", packageRate.packageRateCreate);
router.post("/createPackagePromotion", packagePromotion.createPackagePromotion);

router.get("/getPackage", packageController.getAllPackage);
router.get("/getPackage/:id", packageController.getSinglePackage);
router.get("/getPackageRate/:id", packageRate.getPackageRate);
router.get("/getPackagePromotion/:id", packagePromotion.getPackagePromotion);

router.put(
  "/updatePackage/:id",
  upload.array("files"),
  packageController.updatePackage
);
router.put("/updatePackageRate/:id", packageRate.updatePackageRate);
router.put(
  "/updatePackagePromotion/:id",
  packagePromotion.updatePackagePromotion
);

router.delete("/deletePackage/:id", packageController.deletePackage);
router.delete("/deletePackageRate/:id", packageRate.deletePackageRate);
router.delete(
  "/deletePackagePromotion/:id",
  packagePromotion.deletePackagePromotion
);

module.exports = router;
