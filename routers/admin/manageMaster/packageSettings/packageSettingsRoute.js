const router = require("express").Router();

const packageCategoryController = require("../../../../controller/admin/manageMaster/packageSettings/packageCategoryController");
const packageTypeController = require("../../../../controller/admin/manageMaster/packageSettings/packageTypeController");
const dayActivityController = require("../../../../controller/admin/manageMaster/packageSettings/dayActivityController");
const visaDetailsController = require("../../../../controller/admin/manageMaster/packageSettings/visaDetailsController");
const termsConditionsController = require("../../../../controller/admin/manageMaster/packageSettings/termsAndConditionsController");
const itinearyController = require("../../../../controller/admin/manageMaster/packageSettings/itinearyController");
const upload = require("../../../../helper/multer/multer");

router.post(
  "/createPackageCategory",
  packageCategoryController.createNewPackageCategory
);
router.post("/createPackageType", packageTypeController.createNewPackageType);
router.post("/createDayActivity", dayActivityController.createNewDayActivity);
router.post("/createVisaDetails", visaDetailsController.createNewVisaModel);
router.post("/createTermsConditions", termsConditionsController.createNewTAndC);
router.post(
  "/createItineary",
  upload.single("itinearyImage"),
  itinearyController.createNewItineary
);

router.get(
  "/getPackageCategory",
  packageCategoryController.getAllPackageCategory
);
router.get(
  "/getOnePackageCategory/:id",
  packageCategoryController.getSinglePackageCategory
);
router.get("/getPackageType", packageTypeController.getAllPackageType);
router.get(
  "/getOnePackageType/:id",
  packageTypeController.getSinglePackageType
);
router.get("/getDayActivity", dayActivityController.getAllDayActivity);
router.get(
  "/getOneDayActivity/:id",
  dayActivityController.getSingleDayActivity
);
router.get("/getVisaDetails", visaDetailsController.getAllVisaModel);
router.get("/getOneVisaDetails/:id", visaDetailsController.getSingleVisaModel);
router.get("/getTermsConditions", termsConditionsController.getAllTAndC);
router.get(
  "/getOneTermsConditions/:id",
  termsConditionsController.getSingleTAndC
);
router.get("/getItineary", itinearyController.getAllItineary);
router.get("/getOneItineary/:id", itinearyController.getSingleItineary);

router.put(
  "/updatePackageCategory/:id",
  packageCategoryController.updatePackageCategory
);
router.put("/updatePackageType/:id", packageTypeController.updatePackageType);
router.put("/updateDayActivity/:id", dayActivityController.updateDayActivity);
router.put("/updateVisaDetails/:id", visaDetailsController.updateVisaModel);
router.put("/updateTermsConditions/:id", termsConditionsController.updateTAndC);
router.put(
  "/updateItineary/:id",
  upload.single("itinearyImage"),
  itinearyController.updateItineary
);

router.delete(
  "/deletePackageCategory",
  packageCategoryController.deletePackageCategory
);
router.delete(
  "/deletePackageType/:id",
  packageTypeController.deletePackageType
);
router.delete(
  "/deleteDayActivity/:id",
  dayActivityController.deleteDayActivity
);
router.delete("/deleteVisaDetails/:id", visaDetailsController.deleteVisaModel);
router.delete(
  "/deleteTermsConditions/:id",
  termsConditionsController.deleteTAndC
);
router.delete("/deleteItineary/:id", itinearyController.deleteItineary);

module.exports = router;
