const router = require("express").Router();

const agentCategoryController = require("../../../../controller/admin/manageMaster/agentSettings/agentCategoryController");

router.post(
  "/createAgentCategory",
  agentCategoryController.createNewAgentCategory
);
router.get("/getAgentCategory", agentCategoryController.getAllAgentCategory);
router.get(
  "/getOneAgentCategory/:id",
  agentCategoryController.getSingleAgentCategory
);
router.put(
  "/updateAgentCategory/:id",
  agentCategoryController.updateAgentCategory
);
router.delete(
  "/deleteAgentCategory/:id",
  agentCategoryController.deleteAgentCategory
);

module.exports = router;
