const router = require("express").Router();

const agentController = require("../../../../controller/admin/registration/agent/agentController");

const upload = require("../../../../helper/multer/multer");

const agentCredit = require("../../../../controller/admin/registration/agent/agentCredit");

router.post(
  "/createAgentSettings",
  upload.single("companyLogo"),
  agentController.createNewAgent
);
router.post("/createAgentCredit", agentCredit.creditLimitCreate);

router.get("/getAgentSettings", agentController.getAllAgent);
router.get("/getAgentSettings/:id", agentController.getSingleAgentModel);
router.get("/getAgentCredit/:id", agentCredit.singleAgentLimit);

router.put(
  "/updateAgentSettings/:id",
  upload.single("companyLogo"),
  agentController.updateAgent
);
router.put("/updateAgentCredit/:id", agentCredit.updateCreditLimit);

router.delete("/deleteAgentSettings/:id", agentController.deleteAgent);

module.exports = router;
