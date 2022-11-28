const router = require("express").Router();

const companyProfileController = require("../../../controller/admin/companyProfile/companyProfileController");

router.post("/profile", companyProfileController.createCompanyProfile);

router.put("/profile/:id", companyProfileController.updateCompanyProfile);

module.exports = router;
