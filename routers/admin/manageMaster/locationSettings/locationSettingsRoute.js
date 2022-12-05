const router = require("express").Router();

const marketTypeController = require("../../../../controller/admin/manageMaster/locationSettings/marketTypeController");
const regionController = require("../../../../controller/admin/manageMaster/locationSettings/regionController");
const countryController = require("../../../../controller/admin/manageMaster/locationSettings/countryController");
const provinceController = require("../../../../controller/admin/manageMaster/locationSettings/provinceController");
const destinationController = require("../../../../controller/admin/manageMaster/locationSettings/destinationController");

router.post("/createMarketType", marketTypeController.createNewMarketType);
router.post("/createRegion", regionController.createNewRegion);
router.post("/createCountry", countryController.createNewCountry);
router.post("/createProvince", provinceController.createNewProvince);
router.post("/createDestination", destinationController.createNewDestination);

router.get("/getMarketType", marketTypeController.getAllMarketType);
router.get("/getOneMarketType/:id", marketTypeController.getSingleMarketType);
router.get("/getRegion", regionController.getAllRegion);
router.get("/getOneRegion/:id", regionController.getSingleRegion);
router.get("/getCountry", countryController.getAllCountry);
router.get("/getOneCountry/:id", countryController.getSingleCountry);
router.get("/getProvince", provinceController.getAllProvince);
router.get("/getOneProvince/:id", provinceController.getSingleProvince);
router.get("/getDestination", destinationController.allDestination);
router.get(
  "/getOneDestination/:id",
  destinationController.getSingleDestination
);

router.put("/updateMarketType/:id"), marketTypeController.updateMarketType;
router.put("/updateRegion/:id", regionController.updateRegion);
router.put("/updateCountry/:id", countryController.updateCountry);
router.put("/updateProvince/:id", provinceController.updateProvince);
router.put("/updateDestination/:id", destinationController.updateDestination);

router.delete("/deleteMarketType/:id", marketTypeController.deleteMarketType);
router.delete("/deleteRegion/:id", regionController.deleteRegion);
router.delete("/deleteCountry/:id", countryController.deleteCountry);
router.delete("/deleteProvince/:id", provinceController.deleteProvince);
router.delete(
  "/deleteDestination/:id",
  destinationController.deleteDestination
);

module.exports = router;
