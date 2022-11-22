const router = require("express").Router();

const agentCategoryController = require("../../../../controller/admin/manageMaster/agentSettings/agentCategoryController");

router.post("/agentCategory", agentCategoryController.createNewAgentCategory);
router.get("/agentCategory", agentCategoryController.getAllAgentCategory);
router.put("/agentCategory", agentCategoryController.updateAgentCategory);
router.delete("/:_id", agentCategoryController.deleteAgentCategory);

module.exports = router;
