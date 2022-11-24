const router = require("express").Router();
const couponController = require("../../../../controller/admin/manageMaster/coupon/couponController");
const upload = require("../../../../helper/multer/multer");

router.post(
  "/coupon",
  upload.single("couponImage"),
  couponController.createNewCoupon
);

router.get("/coupon", couponController.getAllCoupon);
router.get("/coupon/:id", couponController.getSingleCoupon);

router.put(
  "/coupon/:id",
  upload.single("couponImage"),
  couponController.updateCoupon
);

router.delete("/coupon/:id", couponController.deleteCoupon);

module.exports = router;
