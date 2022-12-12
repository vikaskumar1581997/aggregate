const router = require("express").Router();
const passport = require("passport");
const passportStrategy = require("../controller/passport");
const auth_Controllers = require("../controller/auth-controller");
const adminAndPartnerControllers = require("../controller/admin/adminloginAndRegistration/adminregistration");

router.post("/sendOTP", auth_Controllers.sendOTP);
router.post("/login", auth_Controllers.login);
router.post("/signUp", auth_Controllers.signUp);
//router.delete("/deletion", auth_Controllers.userDeletion);

//========login with google routes=======================
router.get("/google", passport.authenticate("google",{scope: ["profile", "email"]}));

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    // successRedirect: "/login/success",
    function(req, res) {
      console.log("error");
    },
    // failureRedirect: "/login/failed",
    function(req, res) {
      console.log("done");
    },
  })
);

//=======================Admin  auth route=====================

router.post(
  "/adminregistration",
  adminAndPartnerControllers.adminRegistration
);

router.post("/adminlogin", adminAndPartnerControllers.adminLogin);

router.put("/adminupdation/:adminId", adminAndPartnerControllers.adminUpdation);

router.delete(
  "/admindeletion/:adminId",
  adminAndPartnerControllers.adminDeletion
);

module.exports = router;
