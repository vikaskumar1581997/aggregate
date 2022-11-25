const router = require("express").Router();

const shikaraControllers = require("../../../../controller/admin/registration/shikara/shikaraController");

router.post("/shikara", shikaraControllers.createNewShikara);

router.get("/shikara", shikaraControllers.getAllShikara);

router.get("/shikara/:id", shikaraControllers.getSingleShikara);

router.put("/shikara/:id", shikaraControllers.updateShikara);

router.delete("/shikara/:id", shikaraControllers.deleteShikara);

module.exports = router;
