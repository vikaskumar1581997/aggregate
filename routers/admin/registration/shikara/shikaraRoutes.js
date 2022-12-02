const router = require("express").Router();

const shikaraControllers = require("../../../../controller/admin/registration/shikara/shikaraController");

const shikaraContract = require("../../../../controller/admin/registration/shikara/shikaraContract");

const shikaraPromotion = require("../../../../controller/admin/registration/shikara/shikaraPromotion");

router.post("/createShikara", shikaraControllers.createNewShikara);
router.post("/createShikaraContract", shikaraContract.createNewContract);
router.post("/createShikaraPromotion", shikaraPromotion.createPromotion);

router.get("/getShikara", shikaraControllers.getAllShikara);
router.get("/getOneShikara/:id", shikaraControllers.getSingleShikara);
router.get("/getShikaraContract/:id", shikaraContract.getSingleContract);
router.get("/getShikaraPromotion/:id", shikaraPromotion.getSinglePromotion);

router.put("/updateShikara/:id", shikaraControllers.updateShikara);
router.put("/updateShikaraContract/:id", shikaraContract.updateContract);
router.put("/updateShikaraPromotion/:id", shikaraPromotion.updatePromotion);

router.delete("/deleteShikara/:id", shikaraControllers.deleteShikara);
router.delete("/deleteShikaraContract/:id", shikaraContract.deleteContract);
router.delete("/deleteShikaraPromotion/:id", shikaraPromotion.deletePromotion);

module.exports = router;
