const fast2sms = require("fast-two-sms");
const FAST2SMS = process.env.FAST2SMS;

exports.generateOTP = (otp_length) => {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

// exports.fast2sms = async (data) => {
//   try {
//      console.log(data);
//     const res = await fast2sms.sendMessage({
//       authorization: FAST2SMS,
//       message:data.message,
//       numbers: [data.contactNumber],
//     });
//     console.log("res");
//   } catch (error) {
//    return console.log(error,"error")
//   }
// };


