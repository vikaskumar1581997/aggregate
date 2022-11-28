const router = require("express").Router();

const agentController = require("../../../../controller/admin/registration/agent/agentController");

const upload = require("../../../../helper/multer/multer");

const agentCredit = require("../../../../controller/admin/registration/agent/agentCredit");

router.post(
  "/agentSettings",
  upload.single("companyLogo"),
  agentController.createNewAgent
);
router.post("/agentCredit", agentCredit.creditLimitCreate);

router.get("/agentSettings", agentController.getAllAgent);
router.get("/agentSettings/:id", agentController.getSingleAgentModel);
router.get("/agentCredit/:id", agentCredit.singleAgentLimit);

router.put(
  "/agentSettings/:id",
  upload.single("companyLogo"),
  agentController.updateAgent
);
router.put("/agentCredit/:id", agentCredit.updateCreditLimit);

router.delete("/agentSettings/:id", agentController.deleteAgent);

module.exports = router;
