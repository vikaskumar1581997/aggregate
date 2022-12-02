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
  "/getOneDesignation/:id",
  designationController.getSingleDesignation
);
router.get("/getCurrency", currencyController.getAllCurrencies);
router.get("/getOneCurrency/:id", currencyController.getSingleCurrency);
router.get("/getMarkup", markupController.getAllMarkups);
router.get("/getOneMarkup/:id", markupController.getSingleMarkUp);
router.get("/getContactType", contactTypeController.getAllContactTypes);
router.get(
  "/getOneContactType/:id",
  contactTypeController.getSingleContactType
);
router.get("/getBank", bankController.getAllBanks);
router.get("/getOneBank/:id", bankController.getSingleBank);
router.get("/getAssignMenu", assignMenuController.getAllAssignMenu);
router.get("/getOneAssignMenu/:id", assignMenuController.getSingleAssignMenu);

router.put("/updateDesignation/:id", designationController.updateDesignation);
router.put("/updateCurrency/:id", currencyController.updateCurrency);
router.put("/updateMarkup/:id", markupController.updateMarkup);
router.put("/updateContactType/:id", contactTypeController.updateContactType);
router.put("/updateBank/:id", bankController.updateBank);
router.put("/updateAssignMenu/:id", assignMenuController.updateAllAssignMenu);

router.delete(
  "/deleteDesignation/:id",
  designationController.deleteDesignation
);
router.delete("/deleteCurrency/:id", currencyController.deleteCurrency);
router.delete("/deleteMarkup/:id", markupController.deleteMarkup);
router.delete(
  "/deleteContactType/:id",
  contactTypeController.deleteContactType
);
router.delete("/deleteBank/:id", bankController.deleteBank);
router.delete(
  "/deleteAssignMenu/:id",
  assignMenuController.deleteAllAssignMenu
);

module.exports = router;
