const router = require("express").Router();

const hotelCategoryController = require("../../../../controller/admin/manageMaster/hotelSettings/hotelCategoryController");
const hotelTypeController = require("../../../../controller/admin/manageMaster/hotelSettings/hotelTypeController");
const occupancyTypeController = require("../../../../controller/admin/manageMaster/hotelSettings/occupancyTypeController");
const seasonTypeController = require("../../../../controller/admin/manageMaster/hotelSettings/seasonTypeController");
const roomCategoryController = require("../../../../controller/admin/manageMaster/hotelSettings/roomCategoryController");
const roomTypeController = require("../../../../controller/admin/manageMaster/hotelSettings/roomTypeController");
const hotelAmenityController = require("../../../../controller/admin/manageMaster/hotelSettings/hotelAmenityController");
const roomAmenityController = require("../../../../controller/admin/manageMaster/hotelSettings/roomAmenityController");
const mealPlanController = require("../../../../controller/admin/manageMaster/hotelSettings/mealPlanController");

router.post("/hotelCategory", hotelCategoryController.createNewHotelCategory);
router.post("/hotelType", hotelTypeController.createHotelType);
router.post("/occupancyType", occupancyTypeController.createOccupancyType);
router.post("/seasonType", seasonTypeController.createSeasonType);
router.post("/roomCategory", roomCategoryController.createNewRoomCategory);
router.post("/roomType", roomTypeController.createNewRoomType);
router.post("/hotelAmenity", hotelAmenityController.createNewHotelAmenity);
router.post("/roomAmenity", roomAmenityController.createNewRoomAmenity);
router.post("/mealPlan", mealPlanController.createNewMealPlan);

router.get("/hotelCategory", hotelCategoryController.getAllHotelCategory);
router.get("/hotelType", hotelTypeController.getAllHotelType);
router.get("/occupancyType", occupancyTypeController.getAllOccupancyType);
router.get("/seasonType", seasonTypeController.getAllSeasonType);
router.get("/roomCategory", roomCategoryController.getAllRoomCategory);
router.get("/roomType", roomTypeController.getAllRoomType);
router.get("/hotelAmenity", hotelAmenityController.getAllHotelAmenity);
router.get("/roomAmenity", roomAmenityController.getAllRoomAmenity);
router.get("/mealPlan", mealPlanController.getAllMealPlan);

router.put("/hotelCategory", hotelCategoryController.updateHotelCategory);
router.put("/hotelType", hotelTypeController.updateHotelType);
router.put("/occupancyType", occupancyTypeController.updateOccupancyType);
router.put("/seasonType", seasonTypeController.updateSeasonType);
router.put("/roomCategory", roomCategoryController.updateRoomCategory);
router.put("/roomType", roomTypeController.updateRoomType);
router.put("/hotelAmenity", hotelAmenityController.updateHotelAmenity);
router.put("/roomAmenity", roomAmenityController.updateRoomAmenity);
router.put("/mealPlan", mealPlanController.updateMealPlan);

router.delete("/:_id", hotelCategoryController.deleteHotelCategory);
router.delete("/:_id", hotelTypeController.deleteHotelType);
router.delete("/:_id", occupancyTypeController.deleteOccupancyType);
router.delete("/:_id", seasonTypeController.deleteSeasonType);
router.delete("/:_id", roomCategoryController.deleteRoomCategory);
router.delete("/:_id", roomTypeController.deleteRoomType);
router.delete("/:_id", hotelAmenityController.deleteHotelAmenity);
router.delete("/:_id", roomAmenityController.deleteRoomAmenity);
router.delete("/:_id", mealPlanController.deleteMealPlan);

module.exports = router;
