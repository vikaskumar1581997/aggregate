const router = require("express").Router();

const upload = require("../../../helper/multer/multer");

const companyProfileController = require("../../../controller/admin/companyProfile/companyProfileController");

router.post(
  "/profile",
  upload.single("companyLogo"),
  companyProfileController.createCompanyProfile
);

router.put("/profile/:id", companyProfileController.updateCompanyProfile);

module.exports = router;
