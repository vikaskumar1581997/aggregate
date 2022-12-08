const partnerLogincredentialsModel = require("../../../../../model/admin/registration/hotel/hotelActions/loginCredentials");

const createPartnerLoginCredentials = async (req, res, next) => {
  try {
    const data = req.body; //body will contain hotelId also
    const credentialCreated = await partnerLogincredentialsModel.updateOne(
        {_id:partnerLoginOid},
        data,
        {upsert:true},
        {new:true}
        );

    return res.status(201).json({
      status: true,
      msg: "partner credential created successfully",
      data: credentialCreated,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createPartnerLoginCredentials };
