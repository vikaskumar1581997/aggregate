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
router.get(
  "/packageCategory/:id",
  packageCategoryController.getSinglePackageCategory
);
router.get("/packageType", packageTypeController.getAllPackageType);
router.get("/packageType/:id", packageTypeController.getSinglePackageType);
router.get("/dayActivity", dayActivityController.getAllDayActivity);
router.get("/dayActivity/:id", dayActivityController.getSingleDayActivity);
router.get("/visaDetails", visaDetailsController.getAllVisaModel);
router.get("/visaDetails/:id", visaDetailsController.getSingleVisaModel);
router.get("/termsConditions", termsConditionsController.getAllTAndC);
router.get("/termsConditions/:id", termsConditionsController.getSingleTAndC);
router.get("/itineary", itinearyController.getAllItineary);
router.get("/itineary/:id", itinearyController.getSingleItineary);

router.put(
  "/packageCategory/:id",
  packageCategoryController.updatePackageCategory
);
router.put("/packageType/:id", packageTypeController.updatePackageType);
router.put("/dayActivity/:id", dayActivityController.updateDayActivity);
router.put("/visaDetails/:id", visaDetailsController.updateVisaModel);
router.put("/termsConditions/:id", termsConditionsController.updateTAndC);
router.put(
  "/itineary/:id",
  upload.single("itinearyImage"),
  itinearyController.updateItineary
);

router.delete(
  "/packageCategory",
  packageCategoryController.deletePackageCategory
);
router.delete("/packageType/:id", packageTypeController.deletePackageType);
router.delete("/dayActivity/:id", dayActivityController.deleteDayActivity);
router.delete("/visaDetails/:id", visaDetailsController.deleteVisaModel);
router.delete("/termsConditions/:id", termsConditionsController.deleteTAndC);
router.delete("/itineary/:id", itinearyController.deleteItineary);

module.exports = router;
