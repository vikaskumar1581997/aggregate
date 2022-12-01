const router = require("express").Router();

const HouseBoatController = require("../../../../controller/admin/registration/houseboat/houseboatController");

const HouseboatContract = require("../../../../controller/admin/registration/houseboat/houseboatContract");

const HouseboatPromotion = require("../../../../controller/admin/registration/houseboat/houseboatPromotion");

const HouseboatPolicy = require("../../../../controller/admin/registration/houseboat/houseboatPolicy");

const HBRoomAvailability = require("../../../../controller/admin/registration/houseboat/houseboatRoomAvailability");

router.post("/houseboat", HouseBoatController.createNewHouseBoat);
router.post("/houseboatContract", HouseboatContract.createNewContract);
router.post("/houseboatPromotion", HouseboatPromotion.createPromotion);
router.post("/houseboatPolicy", HouseboatPolicy.createPolicy);
router.post("/roomAvailability", HBRoomAvailability.createRoomAvailability);

router.get("/houseboat", HouseBoatController.getAllHouseBoat);
router.get("/houseboat/:id", HouseBoatController.getSingleHouseBoat);
router.get("/houseboatContract/:id", HouseboatContract.getSingleContract);
router.get("/houseboatPromotion/:id", HouseboatPromotion.getSinglePromotion);
router.get("/houseboatPolicy/:id", HouseboatPolicy.getSinglePolicy);
router.get("/roomAvailability/:id", HBRoomAvailability.getRoomAvailabilityByID);

router.put("/houseboat/:id", HouseBoatController.updateHouseBoat);
router.put("/houseboatContract/:id", HouseboatContract.updateContract);
router.put("/houseboatPromotion/:id", HouseboatPromotion.updatePromotion);
router.put("/houseboatPolicy/:id", HouseboatPolicy.updatePolicy);
router.put("/roomAvailability/:id", HBRoomAvailability.updateRoomAvailability);

router.delete("/houseboat/:id", HouseBoatController.deleteHouseBoat);
router.delete("/houseboatContract/:id", HouseboatContract.deleteContract);
router.delete("/houseboatPromotion/:id", HouseboatPromotion.deletePromotion);
router.delete("/houseboatPolicy/:id", HouseboatPolicy.deletePolicy);
router.delete(
  "/roomAvailability/:id",
  HBRoomAvailability.deleteRoomAvailability
);

module.exports = router;
