const router = require("express").Router();

const HouseBoatController = require("../../../../controller/admin/registration/houseboat/houseboatController");

router.post("/houseboat", HouseBoatController.createNewHouseBoat);

router.get("/houseboat", HouseBoatController.getAllHouseBoat);

router.get("/houseboat/:id", HouseBoatController.getSingleHouseBoat);

router.put("/houseboat/:id", HouseBoatController.updateHouseBoat);

router.delete("/houseboat/:id", HouseBoatController.deleteHouseBoat);

module.exports = router;
