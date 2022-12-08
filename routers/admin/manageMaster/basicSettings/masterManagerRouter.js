const router = require("express").Router();

const designationController = require("../../../../controller/admin/manageMaster/basicSettings/designationController");
const currencyController = require("../../../../controller/admin/manageMaster/basicSettings/currencyController");
const markupController = require("../../../../controller/admin/manageMaster/basicSettings/markupController");
const contactTypeController = require("../../../../controller/admin/manageMaster/basicSettings/contactTypeController");
const bankController = require("../../../../controller/admin/manageMaster/basicSettings/bankController");
const assignMenuController = require("../../../../controller/admin/manageMaster/basicSettings/assignMenuController");

router.post("/createDesignation", designationController.createNewDesignation);
router.post("/createCurrency", currencyController.createNewCurrency);
router.post("/createMarkup", markupController.createNewMarkup);
router.post("/createContactType", contactTypeController.createNewContactType);
router.post("/createBank", bankController.createNewBank);
router.post("/createAssignMenu", assignMenuController.createNewAssignMenu);

router.get("/getDesignation", designationController.getAllDesignations);
router.get(
	"/getOneDesignation/:designationId",
	designationController.getSingleDesignation
);
router.get("/getCurrency", currencyController.getAllCurrencies);
router.get("/getOneCurrency/:currencyId", currencyController.getSingleCurrency);
router.get("/getMarkup", markupController.getAllMarkups);
router.get("/getOneMarkup/:id", markupController.getSingleMarkUp);
router.get("/getContactType", contactTypeController.getAllContactTypes);
router.get(
	"/getOneContactType/:contactTypeId",
	contactTypeController.getSingleContactType
);
router.get("/getBank", bankController.getAllBanks);
router.get("/getOneBank/:bankId", bankController.getSingleBank);
router.get("/getAssignMenu", assignMenuController.getAllAssignMenu);
router.get(
	"/getOneAssignMenu/:assignMenuId",
	assignMenuController.getSingleAssignMenu
);

router.put(
	"/updateDesignation/:designationId",
	designationController.updateDesignation
);
router.put("/updateCurrency/:currencyId", currencyController.updateCurrency);
router.put("/updateMarkup/:id", markupController.updateMarkup);
router.put(
	"/updateContactType/:contactTypeId",
	contactTypeController.updateContactType
);
router.put("/updateBank/:bankId", bankController.updateBank);
router.put(
	"/updateAssignMenu/:assignMenuId",
	assignMenuController.updateAllAssignMenu
);

router.delete(
	"/deleteDesignation/:designationId",
	designationController.deleteDesignation
);
router.delete("/deleteCurrency/:currencyId", currencyController.deleteCurrency);
router.delete("/deleteMarkup/:id", markupController.deleteMarkup);
router.delete(
	"/deleteContactType/:contactTypeId",
	contactTypeController.deleteContactType
);
router.delete("/deleteBank/:bankId", bankController.deleteBank);
router.delete(
	"/deleteAssignMenu/:assignMenuId",
	assignMenuController.deleteAllAssignMenu
);

module.exports = router;
