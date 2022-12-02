const router = require("express").Router();

const guestDetailsController = require("../../../controller/admin/bookingMaster/guestDetailsController");

router.post("/create", guestDetailsController.createNewGuest);

router.get("/guest/:id", guestDetailsController.getGuestDetailsById);

router.get("/list", guestDetailsController.getGuestDetailsList);

router.put("/update/:id", guestDetailsController.updateGuestDetails);

router.delete("/delete/:id", guestDetailsController.deleteGuestDetails);

module.exports = router;
