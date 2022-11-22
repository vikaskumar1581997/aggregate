const router = require("express").Router();

const marketTypeController = require("../../../../controller/admin/manageMaster/locationSettings/marketTypeController");
const regionController = require("../../../../controller/admin/manageMaster/locationSettings/regionController");
const countryController = require("../../../../controller/admin/manageMaster/locationSettings/countryController");
const provinceController = require("../../../../controller/admin/manageMaster/locationSettings/provinceController");
const destinationController = require("../../../../controller/admin/manageMaster/locationSettings/destinationController");

router.post("/marketType", marketTypeController.createNewMarketType);
router.post("/region", regionController.createNewRegion);
router.post("/country", countryController.createNewCountry);
router.post("/province", provinceController.createNewProvince);
router.post("/destination", destinationController.createNewDestination);

router.get("/marketType", marketTypeController.getAllMarketType);
router.get("/region", regionController.getAllRegion);
router.get("/country", countryController.getAllCountry);
router.get("/province", provinceController.getAllProvince);
router.get("/destination", destinationController.allDestination);

router.put("/marketType"), marketTypeController.updateMarketType;
router.put("/region", regionController.updateRegion);
router.put("/country", countryController.updateCountry);
router.put("/province", provinceController.updateProvince);
router.put("/destination", destinationController.updateDestination);

router.delete("/:_id", marketTypeController.deleteMarketType);
router.delete("/:_id", regionController.deleteRegion);
router.delete("/:_id", countryController.deleteCountry);
router.delete("/:_id", provinceController.deleteProvince);
router.delete("/:_id", destinationController.deleteDestination);

module.exports = router;
