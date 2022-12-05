const router = require("express").Router();
const upload = require("../../../../helper/multer/multer");
const hotelControllers = require("../../../../controller/admin/registration/hotel/hotelControllers.js");
const hotelImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/hotelProfilePic");
const roomImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/roomImageUpload");

router.post("/createHotel", hotelControllers.hotelRegistration);
router.put("/updateHotel/:id", hotelControllers.updateHotel);
router.delete("/deleteHotel/:id", hotelControllers.deleteHotel);
router.get("/getHotelList", hotelControllers.getHotelList);


router.post(
  "/hotelImageUpload/:id",
  upload.array("profilePicture"),      
  hotelImageControllers.hotelProfileImageUpload
);

router.post(
  "/roomImageUpload/:id",
  upload.array("gallery"),
  roomImageControllers.roomImageUpload
);

module.exports = router;
