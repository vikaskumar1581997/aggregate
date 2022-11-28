const router = require("express").Router();

const packageController = require("../../../../controller/admin/registration/package_/packageController");

const packageRate = require("../../../../controller/admin/registration/package_/packageRate");

const packagePromotion = require("../../../../controller/admin/registration/package_/packagePromotion");

const upload = require("../../../../helper/multer/multer");

router.post(
  "/package",
  upload.array("files"),
  packageController.createNewPackage
);
router.post("/packageRate", packageRate.packageRateCreate);
router.post("/packagePromotion", packagePromotion.createPackagePromotion);

router.get("/package", packageController.getAllPackage);
router.get("/package/:id", packageController.getSinglePackage);
router.get("/packageRate/:id", packageRate.getPackageRate);
router.get("/packagePromotion/:id", packagePromotion.getPackagePromotion);

router.put(
  "/package/:id",
  upload.array("files"),
  packageController.updatePackage
);
router.put("/packageRate/:id", packageRate.updatePackageRate);
router.put("/packagePromotion/:id", packagePromotion.updatePackagePromotion);

router.delete("/package/:id", packageController.deletePackage);
router.delete("/packageRate/:id", packageRate.deletePackageRate);
router.delete("/packagePromotion/:id", packagePromotion.deletePackagePromotion);

module.exports = router;
