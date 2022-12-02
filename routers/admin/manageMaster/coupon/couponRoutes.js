const router = require("express").Router();
const couponController = require("../../../../controller/admin/manageMaster/coupon/couponController");
const upload = require("../../../../helper/multer/multer");

router.post(
  "/createCoupon",
  upload.single("couponImage"),
  couponController.createNewCoupon
);

router.get("/getCoupon", couponController.getAllCoupon);
router.get("/getOneCoupon/:id", couponController.getSingleCoupon);

router.put(
  "/updateCoupon/:id",
  upload.single("couponImage"),
  couponController.updateCoupon
);

router.delete("/deleteCoupon/:id", couponController.deleteCoupon);

module.exports = router;
