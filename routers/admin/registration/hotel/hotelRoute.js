const router = require("express").Router();
const upload = require("../../../../helper/multer/multer");
const hotelControllers = require("../../../../controller/admin/registration/hotel/hotelControllers");
const hotelImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/hotelProfilePic");
const roomImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/roomImageUpload");
const occupancyMinimumLengthControllers = require("../../../../controller/admin/registration/hotel/hotelActions/occupancyAndMinimum");
const partnerCredentialsControllers = require("../../../../controller/admin/registration/hotel/hotelActions/loginCredentials");
const mailCenterControllers = require("../../../../controller/admin/registration/hotel/hotelActions/mailCenter");

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

//===================occupancy and minimum length routes===========================

router.post(
  "/createOccupancy",
  occupancyMinimumLengthControllers.createOccupancy
);

router.delete(
  "/deleteOccupancy/:occupancyId",
  occupancyMinimumLengthControllers.deleteOccupancy
);

router.put(
  "/updateOccupancy/:occupancyId",
  occupancyMinimumLengthControllers.updateOccupancy
);

router.put(
  "/setStatusLive/:occupancyId",
  occupancyMinimumLengthControllers.setStatusLive
);

//===================mailcenter=======================

router.post("/mailCenter/:hotelId", mailCenterControllers.createMailCenter);


//====================partnerLogin Credentials===========================

router.put(
  "/partnerCredentials",
  partnerCredentialsControllers.createPartnerLoginCredentials
);

module.exports = router;
