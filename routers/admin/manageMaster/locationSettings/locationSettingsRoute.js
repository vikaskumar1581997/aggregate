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

router.put("/marketType/:id"), marketTypeController.updateMarketType;
router.put("/region/:id", regionController.updateRegion);
router.put("/country/:id", countryController.updateCountry);
router.put("/province/:id", provinceController.updateProvince);
router.put("/destination/:id", destinationController.updateDestination);

router.delete("/marketType/:id", marketTypeController.deleteMarketType);
router.delete("/region/:id", regionController.deleteRegion);
router.delete("/country/:id", countryController.deleteCountry);
router.delete("/province/:id", provinceController.deleteProvince);
router.delete("/destination/:id", destinationController.deleteDestination);

module.exports = router;
