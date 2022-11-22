const router = require("express").Router();

const packageCategoryController = require("../../../../controller/admin/manageMaster/packageSettings/packageCategoryController");
const packageTypeController = require("../../../../controller/admin/manageMaster/packageSettings/packageTypeController");
const dayActivityController = require("../../../../controller/admin/manageMaster/packageSettings/dayActivityController");
const visaDetailsController = require("../../../../controller/admin/manageMaster/packageSettings/visaDetailsController");
const termsConditionsController = require("../../../../controller/admin/manageMaster/packageSettings/termsAndConditionsController");
const itinearyController = require("../../../../controller/admin/manageMaster/packageSettings/itinearyController");
const upload = require("../../../../helper/multer/multer");

router.post(
  "/packageCategory",
  packageCategoryController.createNewPackageCategory
);
router.post("/packageType", packageTypeController.createNewPackageType);
router.post("/dayActivity", dayActivityController.createNewDayActivity);
router.post("/visaDetails", visaDetailsController.createNewVisaModel);
router.post("/termsConditions", termsConditionsController.createNewTAndC);
router.post(
  "/itineary",
  upload.single("itinearyImage"),
  itinearyController.createNewItineary
);

router.get("/packageCategory", packageCategoryController.getAllPackageCategory);
router.get("/packageType", packageTypeController.getAllPackageType);
router.get("/dayActivity", dayActivityController.getAllDayActivity);
router.get("/visaDetails", visaDetailsController.getAllVisaModel);
router.get("/termsConditions", termsConditionsController.getAllTAndC);
router.get("/itineary", itinearyController.getAllItineary);

router.put("/packageCategory", packageCategoryController.updatePackageCategory);
router.put("/packageType", packageTypeController.updatePackageType);
router.put("/dayActivity", dayActivityController.updateDayActivity);
router.put("/visaDetails", visaDetailsController.updateVisaModel);
router.put("/termsConditions", termsConditionsController.updateTAndC);
router.put(
  "/itineary",
  upload.single("itinearyImage"),
  itinearyController.updateItineary
);

router.delete(
  "/packageCategory",
  packageCategoryController.deletePackageCategory
);
router.delete("/:_id", packageTypeController.deletePackageType);
router.delete("/:_id", dayActivityController.deleteDayActivity);
router.delete("/:_id", visaDetailsController.deleteVisaModel);
router.delete("/:_id", termsConditionsController.deleteTAndC);
router.delete("/:_id", itinearyController.deleteItineary);

module.exports = router;
