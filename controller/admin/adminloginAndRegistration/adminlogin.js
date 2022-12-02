const adminAndPartnerModel = require("../../../model/adminAndPartnerModel");

exports.adminAndPartnerLogin = async (req, res, next) => {
  const data = req.body;

  let user = await adminAndPartnerModel.findOne({ email: email });
  if (!user)
    return res
      .status(401)
      .json({ status: false, messege: "email or password is not corerct" });

  if (data.password != user.password) {
    return res
      .status(401)
      .json({ status: false, messege: "email or password is not corerct" });
  }

  res.status(201).json({
    status: true,
    messege: "User logged-In successfully",
  });
};
