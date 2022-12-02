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

router.post(
  "/createHotelCategory",
  hotelCategoryController.createNewHotelCategory
);
router.post("/createHotelType", hotelTypeController.createHotelType);
router.post(
  "/createOccupancyType",
  occupancyTypeController.createOccupancyType
);
router.post("/createSeasonType", seasonTypeController.createSeasonType);
router.post(
  "/createRoomCategory",
  roomCategoryController.createNewRoomCategory
);
router.post("/createRoomType", roomTypeController.createNewRoomType);
router.post(
  "/createHotelAmenity",
  hotelAmenityController.createNewHotelAmenity
);
router.post("/createRoomAmenity", roomAmenityController.createNewRoomAmenity);
router.post("/createMealPlan", mealPlanController.createNewMealPlan);

router.get("/getHotelCategory", hotelCategoryController.getAllHotelCategory);
router.get(
  "/getOneHotelCategory/:id",
  hotelCategoryController.getSingleHotelCategory
);
router.get("/getHotelType", hotelTypeController.getAllHotelType);
router.get("/getOneHotelType/:id", hotelTypeController.getSingleHotelType);
router.get("/getOccupancyType", occupancyTypeController.getAllOccupancyType);
router.get(
  "/getOneOccupancyType/:id",
  occupancyTypeController.getSingleOccupancyType
);
router.get("/getSeasonType", seasonTypeController.getAllSeasonType);
router.get("/getOneSeasonType/:id", seasonTypeController.getSingleSeasonType);
router.get("/getRoomCategory", roomCategoryController.getAllRoomCategory);
router.get(
  "/getOneRoomCategory/:id",
  roomCategoryController.getSingleRoomCategory
);
router.get("/getRoomType", roomTypeController.getAllRoomType);
router.get("/getOneRoomType/:id", roomTypeController.getSingleRoomType);
router.get("/getHotelAmenity", hotelAmenityController.getAllHotelAmenity);
router.get(
  "/getOneHotelAmenity/:id",
  hotelAmenityController.getSingleHotelAmenity
);
router.get("/getRoomAmenity", roomAmenityController.getAllRoomAmenity);
router.get(
  "/getOneRoomAmenity/:id",
  roomAmenityController.getSingleRoomAmenity
);
router.get("/getMealPlan", mealPlanController.getAllMealPlan);
router.get("/getOneMealPlan/:id", mealPlanController.getSingleMealPlan);

router.put(
  "/getHotelCategory/:id",
  hotelCategoryController.updateHotelCategory
);
router.put("/getHotelType/:id", hotelTypeController.updateHotelType);
router.put(
  "/getOccupancyType/:id",
  occupancyTypeController.updateOccupancyType
);
router.put("/getSeasonType/:id", seasonTypeController.updateSeasonType);
router.put("/getRoomCategory/:id", roomCategoryController.updateRoomCategory);
router.put("/getRoomType/:id", roomTypeController.updateRoomType);
router.put("/getHotelAmenity/:id", hotelAmenityController.updateHotelAmenity);
router.put("/getRoomAmenity/:id", roomAmenityController.updateRoomAmenity);
router.put("/getMealPlan/:id", mealPlanController.updateMealPlan);

router.delete(
  "/deleteHotelCategory/:id",
  hotelCategoryController.deleteHotelCategory
);
router.delete("/deleteHotelType/:id", hotelTypeController.deleteHotelType);
router.delete(
  "/deleteOccupancyType/:id",
  occupancyTypeController.deleteOccupancyType
);
router.delete("/deleteSeasonType/:id", seasonTypeController.deleteSeasonType);
router.delete(
  "/deleteRoomCategory/:id",
  roomCategoryController.deleteRoomCategory
);
router.delete("/deleteRoomType/:id", roomTypeController.deleteRoomType);
router.delete(
  "/deleteHotelAmenity/:id",
  hotelAmenityController.deleteHotelAmenity
);
router.delete(
  "/deleteRoomAmenity/:id",
  roomAmenityController.deleteRoomAmenity
);
router.delete("/deleteMOneealPlan/:id", mealPlanController.deleteMealPlan);

module.exports = router;
