const router = require("express").Router();
const couponController = require("../../../../controller/admin/manageMaster/coupon/couponController");
const upload = require("../../../../helper/multer/multer");

router.post(
  "/coupon",
  upload.single("couponImage"),
  couponController.createNewCoupon
);

router.get("/coupon", couponController.getAllCoupon);

router.put(
  "/coupon",
  upload.single("couponImage"),
  couponController.updateCoupon
);

router.delete("/:_id", couponController.deleteCoupon);

module.exports = router;
