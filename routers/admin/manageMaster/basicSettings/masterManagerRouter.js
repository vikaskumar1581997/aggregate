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
router.get("/designation/:id", designationController.getSingleDesignation);
router.get("/currency", currencyController.getAllCurrencies);
router.get("/currency/:id", currencyController.getSingleCurrency);
router.get("/markup", markupController.getAllMarkups);
router.get("/markup/:id", markupController.getSingleMarkUp);
router.get("/contactType", contactTypeController.getAllContactTypes);
router.get("/contactType/:id", contactTypeController.getSingleContactType);
router.get("/bank", bankController.getAllBanks);
router.get("/bank/:id", bankController.getSingleBank);
router.get("/assignMenu", assignMenuController.getAllAssignMenu);
router.get("/assignMenu/:id", assignMenuController.getSingleAssignMenu);

router.put("/designation/:id", designationController.updateDesignation);
router.put("/currency/:id", currencyController.updateCurrency);
router.put("/markup/:id", markupController.updateMarkup);
router.put("/contactType/:id", contactTypeController.updateContactType);
router.put("/bank/:id", bankController.updateBank);
router.put("/assignMenu/:id", assignMenuController.updateAllAssignMenu);

router.delete("/designation/:id", designationController.deleteDesignation);
router.delete("/currency/:id", currencyController.deleteCurrency);
router.delete("/markup/:id", markupController.deleteMarkup);
router.delete("/contactType/:id", contactTypeController.deleteContactType);
router.delete("/bank/:id", bankController.deleteBank);
router.delete("/assignMenu/:id", assignMenuController.deleteAllAssignMenu);

module.exports = router;
