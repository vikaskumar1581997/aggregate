const router = require("express").Router();

const HouseBoatController = require("../../../../controller/admin/registration/houseboat/houseboatController");

const HouseboatContract = require("../../../../controller/admin/registration/houseboat/houseboatContract");

const HouseboatPromotion = require("../../../../controller/admin/registration/houseboat/houseboatPromotion");

const HouseboatPolicy = require("../../../../controller/admin/registration/houseboat/houseboatPolicy");

const HBRoomAvailability = require("../../../../controller/admin/registration/houseboat/houseboatRoomAvailability");

const HBImageUpload = require("../../../../controller/admin/registration/houseboat/houseboatImage");

const upload = require("../../../../helper/multer/multer");

router.post("/createHouseboat", HouseBoatController.createNewHouseBoat);
router.post("/createHouseboatContract", HouseboatContract.createNewContract);
router.post("/createHouseboatPromotion", HouseboatPromotion.createPromotion);
router.post("/createHouseboatPolicy", HouseboatPolicy.createPolicy);
router.post(
  "/createRoomAvailability",
  HBRoomAvailability.createRoomAvailability
);
router.post(
  "/imageUpload",
  upload.array("imageCreate"),
  HBImageUpload.uploadHBImage
);

router.get("/createHouseboat", HouseBoatController.getAllHouseBoat);
router.get("/createOneHouseboat/:id", HouseBoatController.getSingleHouseBoat);
router.get("/createHouseboatContract/:id", HouseboatContract.getSingleContract);
router.get(
  "/createHouseboatPromotion/:id",
  HouseboatPromotion.getSinglePromotion
);
router.get("/createHouseboatPolicy/:id", HouseboatPolicy.getSinglePolicy);
router.get(
  "/createRoomAvailability/:id",
  HBRoomAvailability.getRoomAvailabilityByID
);

router.put("/updateHouseboat/:id", HouseBoatController.updateHouseBoat);
router.put("/updateHouseboatContract/:id", HouseboatContract.updateContract);
router.put("/updateHouseboatPromotion/:id", HouseboatPromotion.updatePromotion);
router.put("/updateHouseboatPolicy/:id", HouseboatPolicy.updatePolicy);
router.put(
  "/updateRoomAvailability/:id",
  HBRoomAvailability.updateRoomAvailability
);

router.delete("/deleteHouseboat/:id", HouseBoatController.deleteHouseBoat);
router.delete("/deleteHouseboatContract/:id", HouseboatContract.deleteContract);
router.delete(
  "/deleteHouseboatPromotion/:id",
  HouseboatPromotion.deletePromotion
);
router.delete("/deleteHouseboatPolicy/:id", HouseboatPolicy.deletePolicy);
router.delete(
  "/deleteRoomAvailability/:id",
  HBRoomAvailability.deleteRoomAvailability
);
router.delete("/deleteImage/:id", HBImageUpload.deleteHBImage);

module.exports = router;
