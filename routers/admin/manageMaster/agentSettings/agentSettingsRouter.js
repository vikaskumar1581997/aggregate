const router = require("express").Router();

const agentCategoryController = require("../../../../controller/admin/manageMaster/agentSettings/agentCategoryController");

router.post("/agentCategory", agentCategoryController.createNewAgentCategory);
router.get("/agentCategory", agentCategoryController.getAllAgentCategory);
router.put("/agentCategory/:id", agentCategoryController.updateAgentCategory);
router.delete(
  "/agentCategory/:id",
  agentCategoryController.deleteAgentCategory
);

module.exports = router;
