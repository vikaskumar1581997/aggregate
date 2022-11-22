const router = require("express").Router();

const Mail = require("../../../../helper/admin/manageMaster/communicationMail/communicationMiddleware");

router.post("/sendMail", Mail.Mail);

module.exports = router;
