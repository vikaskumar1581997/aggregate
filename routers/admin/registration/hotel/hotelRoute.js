const router = require("express").Router();
const upload = require("../../../../helper/multer/multer");
const hotelControllers = require("../../../../controller/admin/registration/hotel/hotelControllers");
const hotelImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/hotelProfilePic");
const roomImageControllers = require("../../../../controller/admin/registration/hotel/hotelActions/roomImageUpload");
const occupancyMinimumLengthControllers = require("../../../../controller/admin/registration/hotel/hotelActions/occupancyAndMinimum");
const partnerCredentialsControllers = require("../../../../controller/admin/registration/hotel/hotelActions/loginCredentials");
const mailCenterControllers = require("../../../../controller/admin/registration/hotel/hotelActions/mailCenter");
const availabilityControllers = require("../../../../controller/admin/registration/hotel/hotelActions/hotelAvailability");
const hotelBooking=require("../../../../controller/admin/newBooking/hotelBooking")

router.post("/createHotel", hotelControllers.hotelRegistration);
router.put("/updateHotel/:id", hotelControllers.updateHotel);
router.delete("/deleteHotel/:id", hotelControllers.deleteHotel);
router.get("/getHotelList", hotelControllers.getHotelList);
router.get("/getHotelByName/:hotelName", hotelControllers.getHotelByName);


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

//===================occupancy and minimum length routes==================================================

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
  occupancyMinimumLengthControllers.setStatusLiveOccupancy
);


router.post(
  "/createminimumLengthStay",
  occupancyMinimumLengthControllers.createminimumLengthStay
);


router.put(
  "/updateminimumLengthStay/:minLengthStayid",
  occupancyMinimumLengthControllers.updateminimumLengthStay
);


router.delete(
  "/updateminimumLengthStay/:minLengthStayid",
  occupancyMinimumLengthControllers.deleteminimumLengthStay
);


router.put(
  "/setStatusLive/:MinLengthStay",
  occupancyMinimumLengthControllers.setStatusLiveOfLength
);
//===================mailcenter==================================================================

router.post("/mailCenter/:hotelId", mailCenterControllers.createMailCenter);


//====================partnerLogin Credentials=========================================================
router.post(
  "/createPartnerCredentials",
  partnerCredentialsControllers.createPartnerLoginCredentials
);
router.put(
  "/updatePartnerCredentials/:partnerLoginOid",
  partnerCredentialsControllers.updatePartnerLoginCredentials
);


//===========================hotel Availability==========================================================

router.post(
  "/createAvailability",
  availabilityControllers.createHotelAvailability
);

router.post(
  "/createBlock",
  availabilityControllers.createBlockChekinCheckouts
);






















//======================================================
router.get("/bookHotel", hotelBooking.hotelBooking);



module.exports = router;
