const adminAndPartnerModel = require("../../../model/adminAndPartnerModel");

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === "number") return false;
  return true;
};

const isvalidRequest = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};

exports.adminAndPartnerRegistration = async (req, res, next) => {
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

    let emailId = await adminAndPartnerModel.findOne({ email: req.body.email });
    if (emailId) {
      return res
        .status(409)
        .send({ status: false, message: "this EmailId already exist" });
    }

    const savedAdmin = await adminAndPartnerModel.create(data);

    return res.status(201).send({
      message: "user registered",
      data: savedAdmin,
    });
  } catch (err) {
    next(err);
  }
};

//================================================

exports.adminAndPartnerLogin = async (req, res, next) => {
  const data = req.body;

  let user = await adminAndPartnerModel.findOne({ email: data.email });
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

//=========================================

exports.adminAndPartnerUpdation = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.query.id;
    
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

    const savedAdmin = await adminAndPartnerModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      data,
      { new: true }
    );

    if (savedAdmin) {
      return res.status(200).json({
        message: "user updated success",
        data: savedAdmin,
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

exports.adminAndPartnerDeletion = async (req, res, next) => {
  try {
    id = req.query.id;

    const savedAdmin = await adminAndPartnerModel.findOneAndUpdate(
      { _id: id },
      { isDeleted: true }
    );

    return res.status(201).send({
      message: "user deleted",
    });
  } catch (err) {
    next(err);
  }
};
