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

router.put("/hotelCategory/:id", hotelCategoryController.updateHotelCategory);
router.put("/hotelType/:id", hotelTypeController.updateHotelType);
router.put("/occupancyType/:id", occupancyTypeController.updateOccupancyType);
router.put("/seasonType/:id", seasonTypeController.updateSeasonType);
router.put("/roomCategory/:id", roomCategoryController.updateRoomCategory);
router.put("/roomType/:id", roomTypeController.updateRoomType);
router.put("/hotelAmenity/:id", hotelAmenityController.updateHotelAmenity);
router.put("/roomAmenity/:id", roomAmenityController.updateRoomAmenity);
router.put("/mealPlan/:id", mealPlanController.updateMealPlan);

router.delete(
  "/hotelCategory/:id",
  hotelCategoryController.deleteHotelCategory
);
router.delete("/hotelType/:id", hotelTypeController.deleteHotelType);
router.delete(
  "/occupancyType/:id",
  occupancyTypeController.deleteOccupancyType
);
router.delete("/seasonType/:id", seasonTypeController.deleteSeasonType);
router.delete("/roomCategory/:id", roomCategoryController.deleteRoomCategory);
router.delete("/roomType/:id", roomTypeController.deleteRoomType);
router.delete("/hotelAmenity/:id", hotelAmenityController.deleteHotelAmenity);
router.delete("/roomAmenity/:id", roomAmenityController.deleteRoomAmenity);
router.delete("/mealPlan/:id", mealPlanController.deleteMealPlan);

module.exports = router;
