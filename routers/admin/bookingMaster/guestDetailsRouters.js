const router = require("express").Router();

const guestDetailsController = require("../../../controller/admin/bookingMaster/guestDetailsController");

router.post("/create", guestDetailsController.createNewGuest);

router.get("/guest/:guestId", guestDetailsController.getGuestDetailsById);

router.get("/list", guestDetailsController.getGuestDetailsList);

router.put("/update/:guestId", guestDetailsController.updateGuestDetails);

router.delete("/delete/:guestId", guestDetailsController.deleteGuestDetails);

module.exports = router;
