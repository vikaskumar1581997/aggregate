const router = require("express").Router();

const agentCategoryController = require("../../../../controller/admin/manageMaster/agentSettings/agentCategoryController");

router.post(
  "/createAgentCategory",
  agentCategoryController.createNewAgentCategory
);
router.get("/getAgentCategory", agentCategoryController.getAllAgentCategory);
router.get(
  "/getOneAgentCategory/:agentCategoryId",
  agentCategoryController.getSingleAgentCategory
);
router.put(
  "/updateAgentCategory/:agentCategoryId",
  agentCategoryController.updateAgentCategory
);
router.delete(
  "/deleteAgentCategory/:agentCategoryId",
  agentCategoryController.deleteAgentCategory
);

module.exports = router;
