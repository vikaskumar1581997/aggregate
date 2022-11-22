const router = require("express").Router();

const designationController = require("../../../../controller/admin/manageMaster/basicSettings/designationController");
const currencyController = require("../../../../controller/admin/manageMaster/basicSettings/currencyController");
const markupController = require("../../../../controller/admin/manageMaster/basicSettings/markupController");
const contactTypeController = require("../../../../controller/admin/manageMaster/basicSettings/contactTypeController");
const bankController = require("../../../../controller/admin/manageMaster/basicSettings/bankController");
const assignMenuController = require("../../../../controller/admin/manageMaster/basicSettings/assignMenuController");

router.post("/designation", designationController.createNewDesignation);
router.post("/currency", currencyController.createNewCurrency);
router.post("/markup", markupController.createNewMarkup);
router.post("/contactType", contactTypeController.createNewContactType);
router.post("/bank", bankController.createNewBank);
router.post("/assignMenu", assignMenuController.createNewAssignMenu);

router.get("/designation", designationController.getAllDesignations);
router.get("/currency", currencyController.getAllCurrencies);
router.get("/markup", markupController.getAllMarkups);
router.get("/contactType", contactTypeController.getAllContactTypes);
router.get("/bank", bankController.getAllBanks);
router.get("/assignMenu", assignMenuController.getAllAssignMenu);

router.put("/designation", designationController.updateDesignation);
router.put("/currency", currencyController.updateCurrency);
router.put("/markup", markupController.updateMarkup);
router.put("/contactType", contactTypeController.updateContactType);
router.put("/bank", bankController.updateBank);
router.put("/assignMenu", assignMenuController.updateAllAssignMenu);

router.delete("/:_id", designationController.deleteDesignation);
router.delete("/:_id", currencyController.deleteCurrency);
router.delete("/:_id", markupController.deleteMarkup);
router.delete("/:_id", contactTypeController.deleteContactType);
router.delete("/:_id", bankController.deleteBank);
router.delete("/:_id", assignMenuController.deleteAllAssignMenu);

module.exports = router;
