const router = require("express").Router();

const houseBoatTypeController = require("../../../../controller/admin/manageMaster/houseboatSettings/houseboatTypeController");
const HBTRCController = require("../../../../controller/admin/manageMaster/houseboatSettings/houseboatRoomCategoryController");
const HBRTController = require("../../../../controller/admin/manageMaster/houseboatSettings/houseBoatRoomTypeController");

router.post(
  "/createHouseboatType",
  houseBoatTypeController.createNewHouseBoatType
);
router.post(
  "/createHouseboatRoomCategory",
  HBTRCController.createNewHBTRCategory
);
router.post("/createHouseboatRoomType", HBRTController.createNewHBRT);

router.get("/getHouseboatType", houseBoatTypeController.getAllHouseBoatType);
router.get(
  "/getOneHouseboatType/:id",
  houseBoatTypeController.getSingleHouseBoatType
);
router.get("/getHouseboatRoomCategory", HBTRCController.getAllHBTRCategory);
router.get(
  "/getOneHouseboatRoomCategory/:id",
  HBTRCController.getSingleHBTRCategory
);
router.get("/getHouseboatRoomType", HBRTController.getAllHBRT);
router.get(
  "/getOneHouseboatRoomType/:id",
  HBRTController.getSingleHouseBoatRoomType
);

router.put(
  "/updateHouseboatType/:id",
  houseBoatTypeController.updateHouseBoatType
);
router.put(
  "/updateHouseboatRoomCategory/:id",
  HBTRCController.updateHBTRCategory
);
router.put("/updateHouseboatRoomType/:id", HBRTController.updateHBRT);

router.delete(
  "/deleteHouseboatType/:id",
  houseBoatTypeController.deleteHouseBoatType
);
router.delete(
  "/deleteHouseboatRoomCategory/:id",
  HBTRCController.deleteHBTRCategory
);
router.delete("/deleteHouseboatRoomType/:id", HBRTController.deleteHBRT);

module.exports = router;
