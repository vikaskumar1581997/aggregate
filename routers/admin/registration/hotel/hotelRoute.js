const router = require("express").Router();
const upload=require("../../../../helper/multer/multer")
const hotelControllers = require("../../../../controller/admin/registration/hotel/hotelControllers.js");
const hotelImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/hotelProfilePic");
const roomImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/roomImageUpload");

router.post("/createHotel", hotelControllers.hotelRegistration);
router.post("/updateHotel", hotelControllers.updateHotel);
router.post("/deleteHotel", hotelControllers.deleteHotel);


router.post(
  "/hotelImageUpload",
  upload.array("profilePicture"),
  hotelImageControllers.hotelProfileImageUpload
);

router.post(
  "/roomImageUpload",
  upload.array("gallery"),
  roomImageControllers.roomImageUpload
);

module.exports=router;