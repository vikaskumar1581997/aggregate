const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

//====jwt token creation============

exports.createJwtToken = (payload) => {
  const token = jwt.sign(payload, process.env.jwtSecret);
  return token;
};

//=====authenticaton==============

