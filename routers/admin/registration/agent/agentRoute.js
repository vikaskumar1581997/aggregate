const router = require("express").Router();

const agentController = require("../../../../controller/admin/registration/agent/agentController");

const upload = require("../../../../helper/multer/multer");

router.post(
  "/agentSettings",
  upload.single("companyLogo"),
  agentController.createNewAgent
);

router.get("/agentSettings", agentController.getAllAgent);

router.put(
  "/agentSettings",
  upload.single("companyLogo"),
  agentController.updateAgent
);

router.delete("/:_id", agentController.deleteAgent);

module.exports = router;
