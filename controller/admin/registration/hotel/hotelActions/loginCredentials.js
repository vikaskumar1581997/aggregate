const partnerLogincredentialsModel = require("../../../../../model/admin/registration/hotel/hotelActions/partnerLoginCredentials");
const bcrypt = require("bcrypt");


const createPartnerLoginCredentials = async (req, res, next) => {
  try {
    const data = req.body; //body will contain hotelId also

    const userExist = await partnerLogincredentialsModel.findOne({
      userName: data.userName,
    });
    if (userExist) {
      return res.status(400).json({
        error: true,
        message: "username already exist",
      });
    }

    
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
   // console.log(data.password);

    const credentialCreated = await partnerLogincredentialsModel.create(data);

    return res.status(201).json({
      status: true,
      msg: "partner credential created successfully",
      data: credentialCreated,
    });
  } catch (err) {
    next(err);
  }
};

const updatePartnerLoginCredentials = async (req, res, next) => {
  try {
    const data = req.body; //body will contain hotelId also
    const partnerLoginOid=req.params.partnerLoginOid
    
    //console.log(partnerLoginOid);

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    //console.log(data.password);

    const credentialUpdated = await partnerLogincredentialsModel.findOneAndUpdate(
      { _id: partnerLoginOid },
      data,
  
      { new: true }
    );

    return res.status(200).json({
      status: true,
      msg: "partner credential updated successfully",
      data: credentialUpdated,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPartnerLoginCredentials,
  updatePartnerLoginCredentials,
};
