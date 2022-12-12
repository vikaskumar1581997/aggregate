const adminModel = require("../../../model/adminModel");
const createJwtToken=require("../../../middleware/auth-middleware") 
const bcrypt = require("bcrypt");
const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === "number") return false;
  return true;
};

const isvalidRequest = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};

//=========================================================
exports.adminRegistration = async (req, res, next) => {
  try {
    const data = req.body;
    if (!isvalidRequest(data)) {
      res.status(400).json({
        status: false,
        message: "body can't be empty",
      });
    } 

    if (!isValid(req.body.name)) {
      res.status(400).json({
        status: false,
        message: "name should be string",
      });
    }

    if (/\d/g.test(req.body.name)) {
      return res
        .status(400)
        .send({ status: false, message: "Number is not allowed in name" });
    }

    if (!isValid(req.body.phone)) {
      res.status(400).json({
        status: false,
        message: "mobile number should be string",
      });
    }

    if (!/^[6-9]{1}[0-9]{9}$/.test(req.body.phone))
      return res.status(400).send({
        status: false,
        message: "Phone No is invalid. +91 is not required",
      });
    let phone = await adminModel.findOne({
      phone: req.body.phone,
    });
    if (phone) {
      return res
        .status(409)
        .send({ status: false, message: "this phone no. already exist" });
    }



    if (!req.body.email) {
      return res.status(400).send({ msg: " Email name is required " });
    }
    if (!isValid(req.body.email)) {
      return res.status(400).send({
        status: false,
        message: "please provide  email in string format",
      });
    }

    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(req.body.email)) {
      return res
        .status(400)
        .send({ status: false, message: "email Id is invalid" });
    }

    let emailId = await adminModel.findOne({ email: req.body.email });
    if (emailId) {
      return res
        .status(409)
        .send({ status: false, message: "this EmailId already exist" });
    }

  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  console.log(data.password);

    const createdAdmin = await adminModel.create(data);

    return res.status(201).send({
      message: "user registered",
      data: createdAdmin,
    });
  } catch (err) {
    next(err);
  }
};

//================================================

exports.adminLogin = async (req, res, next) => {
  const data = req.body;

  let user = await adminModel.findOne({ email: data.email });
  if (!user)
    return res
      .status(401)
      .json({ status: false, messege: "email or password is not corerct" });


let checkpass = await bcrypt.compare(data.password, user.password);
// console.log(checkpass)
if (!checkpass)
  return res``
    .status(401)
    .send({ status: false, messege: "password is not matching" });

  const token = createJwtToken.createJwtToken(data);

  res.status(200).json({
    status: true,
    messege: "User logged-In successfully",
    role:"admin",
    token:token
  });
};

//==========================================================

exports.adminUpdation = async (req, res, next) => {
  try {
    const data = req.body;
    const adminId = req.params.adminId;

    if (!isvalidRequest(data)) {
      res.status(400).json({
        status: false,
        message: "body can't be empty",
      });
    }

    if (!isValid(req.body.name)) {
      res.status(400).json({
        status: false,
        message: "name should be string",
      });
    }

    if (/\d/g.test(req.body.name)) {
      return res
        .status(400)
        .json({ status: false, message: "Number is not allowed in name" });
    }

    if (!isValid(req.body.phone)) {
      res.status(400).json({
        status: false,
        message: "mobile number should be string",
      });
    }

    if (!/^[6-9]{1}[0-9]{9}$/.test(req.body.phone))
      return res.status(400).send({
        status: false,
        message: "Phone No is invalid. +91 is not required",
      });


    if (!req.body.email) {
      return res.status(400).json({ msg: " Email name is required " });
    }
    if (!isValid(req.body.email)) {
      return res.status(400).json({
        status: false,
        message: "please provide  email in string format",
      });
    }

    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(req.body.email)) {
      return res
        .status(400)
        .json({ status: false, message: "email Id is invalid" });
    }

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    console.log(data.password);


    const updatedAdmin = await adminModel.findOneAndUpdate(
      { _id: adminId, isDeleted: false },
      data,
      { new: true }
    );

    if (updatedAdmin) {
      return res.status(200).json({
        message: "user updated success",
        data: updatedAdmin,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "no such data to update",
      });
    }
  } catch (err) {
    next(err);
  }
};

//======================================================

exports.adminDeletion = async (req, res, next) => {
  try {
    adminId = req.params.adminId;

    const deletedAdmin = await adminModel.findOneAndUpdate(
      { _id: adminId, isDeleted: false },
      { isDeleted: true }
    );

    if (!deletedAdmin) {
      return res.status(404).send({
        message: "user not found",
      });
    }

    return res.status(200).send({
      message: "user deleted",
    });
  } catch (err) {
    next(err);
  }
};
