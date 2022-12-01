const router = require("express").Router();

const shikaraControllers = require("../../../../controller/admin/registration/shikara/shikaraController");

const shikaraContract = require("../../../../controller/admin/registration/shikara/shikaraContract");

const shikaraPromotion = require("../../../../controller/admin/registration/shikara/shikaraPromotion");

router.post("/shikara", shikaraControllers.createNewShikara);
router.post("/shikaraContract", shikaraContract.createNewContract);
router.post("/shikaraPromotion", shikaraPromotion.createPromotion);

router.get("/shikara", shikaraControllers.getAllShikara);
router.get("/shikara/:id", shikaraControllers.getSingleShikara);
router.get("/shikaraContract/:id", shikaraContract.getSingleContract);
router.get("/shikaraPromotion/:id", shikaraPromotion.getSinglePromotion);

router.put("/shikara/:id", shikaraControllers.updateShikara);
router.put("/shikaraContract/:id", shikaraContract.updateContract);
router.put("/shikaraPromotion/:id", shikaraPromotion.updatePromotion);

router.delete("/shikara/:id", shikaraControllers.deleteShikara);
router.delete("/shikaraContract/:id", shikaraContract.deleteContract);
router.delete("/shikaraPromotion/:id", shikaraPromotion.deletePromotion);

module.exports = router;
