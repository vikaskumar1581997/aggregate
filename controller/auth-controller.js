const express = require("express");
const userModel = require("../model/userModel.js");
const {createJwtToken} = require("../middleware/auth-middleware");
const {generateOTP,fast2sms} = require("../config/Otp")

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === "number") return false;
  return true;
};

const sendOTP = async function (req, res, next) {
  try {
    const user = req.body;
    console.log(user);
    if (!isValid(user.phone))
      return res.status(400).send({
        status: false,
        message: " provide  phone in string format",
      });
    if (!/^[6-9]{1}[0-9]{9}$/.test(user.phone))
      return res.status(400).send({
        status: false,
        message: "Phone No is invalid. +91 is not required",
      });

    const otp = generateOTP(6);
    
    // await fast2sms({
    //   message: `Your OTP is ${otp}`,
    //   contactNumber: user.phone,
    // });

    const token = createJwtToken(otp);

    const existingUser =await userModel.findOne({ phone: user.phone });
    
    console.log(existingUser,"db")
    if (!existingUser) {
      console.log(otp)
      res.setHeader("x-auth-key", token);
      res.status(403).send({ message: "User not registered",otp:otp });
    } else {
      res.status(200).send({ message: "sent OTP successfully", otp: otp });
    }

    
  } catch (err) {
    next(err);
  }
};

const login = async function (req, res, next) {
  try {
    const { mob_No, otp_input } = req.body;
    let token = req.headers.authorization;
    let newtoken = token.split(" ");
    jwt.verify(
      newtoken[1],
      process.env.jwtSecret,
      { ignoreExpiration: true },
      async function (error, decodedToken) {
        req.otp = decodedToken.otp;
        if (otp_input === otp) {
          const user_Name = await userModel.findOne({ phone: mob_No });
          return res.status(200).send({
            user_Name: user_Name.name,
            message: "OTP matched",
          });
        } else {
          return res.status(401).send({
            message: "wrong OTP input",
          });
        }
      }
    );
  } catch (err) {
    next(err);
  }
};



const signUp = async function (req, res, next) {
  try {
    let user = req.body;

    if (!isvalidRequest(user)) {
      return res
        .status(400)
        .send({ status: false, message: "please provide required details" });
    }
    // const { name, email, phone } = req.body;

    //============name validation============

    if (!isValid(user.name)) {
      return res.status(400).send({
        status: false,
        message: "please provide  Name in string format",
      });
    }

    if (/\d/g.test(user.name)) {
      return res
        .status(400)
        .send({ status: false, message: "Number is not allowed in name" });
    }

    //========email validation=================
    if (!user.email) {
      return res.status(400).send({ msg: " Email name is required " });
    }
    if (!isValid(user.email)) {
      return res.status(400).send({
        status: false,
        message: "please provide  email in string format",
      });
    }

    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(user.email)) {
      return res
        .status(400)
        .send({ status: false, message: "email Id is invalid" });
    }

    let emailId = await userModel.findOne({ email: user.email });
    if (emailId) {
      return res
        .status(409)
        .send({ status: false, message: "this EmailId already exist" });
    }

    //====================================

    const savedUser = await userModel.create(user);
    return res.status(201).send({
      "message": "user registered",
      "data": savedUser,
    });
  } catch (err) {
    next(err);
  }
};


module.exports = { sendOTP, login, signUp };
