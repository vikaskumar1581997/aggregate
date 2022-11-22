const router = require("express").Router();

const houseBoatTypeController = require("../../../../controller/admin/manageMaster/houseboatSettings/houseboatTypeController");
const HBTRCController = require("../../../../controller/admin/manageMaster/houseboatSettings/houseboatRoomCategoryController");
const HBRTController = require("../../../../controller/admin/manageMaster/houseboatSettings/houseBoatRoomTypeController");

router.post("/houseboatType", houseBoatTypeController.createNewHouseBoatType);
router.post("/houseboatRoomCategory", HBTRCController.createNewHBTRCategory);
router.post("/houseboatRoomType", HBRTController.createNewHBRT);

router.get("/houseboatType", houseBoatTypeController.getAllHouseBoatType);
router.get("/houseboatRoomCategory", HBTRCController.getAllHBTRCategory);
router.get("/houseboatRoomType", HBRTController.getAllHBRT);

router.put("/houseboatType", houseBoatTypeController.updateHouseBoatType);
router.put("/houseboatRoomCategory", HBTRCController.updateHBTRCategory);
router.put("/houseboatRoomType", HBRTController.updateHBRT);

router.delete("/:_id", houseBoatTypeController.deleteHouseBoatType);
router.delete("/:_id", HBTRCController.deleteHBTRCategory);
router.delete("/:_id", HBRTController.deleteHBRT);

module.exports = router;
