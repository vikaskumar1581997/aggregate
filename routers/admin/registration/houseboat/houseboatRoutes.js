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

router.get("/getHouseboat", HouseBoatController.getAllHouseBoat);
router.get(
	"/getOneHouseboat/:houseboatId",
	HouseBoatController.getSingleHouseBoat
);
router.get("/getHouseboatContract/:id", HouseboatContract.getSingleContract);
router.get("/getHouseboatPromotion/:id", HouseboatPromotion.getSinglePromotion);
router.get("/getHouseboatPolicy/:id", HouseboatPolicy.getSinglePolicy);
router.get(
	"/getRoomAvailability/:id",
	HBRoomAvailability.getRoomAvailabilityByID
);

router.put(
	"/updateHouseboat/:houseboatId",
	HouseBoatController.updateHouseBoat
);
router.put("/updateHouseboatContract/:id", HouseboatContract.updateContract);
router.put("/updateHouseboatPromotion/:id", HouseboatPromotion.updatePromotion);
router.put("/updateHouseboatPolicy/:id", HouseboatPolicy.updatePolicy);
router.put(
	"/updateRoomAvailability/:id",
	HBRoomAvailability.updateRoomAvailability
);

router.delete(
	"/deleteHouseboat/:houseboatId",
	HouseBoatController.deleteHouseBoat
);
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
