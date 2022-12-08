//const mailCenterModel = require("../../../../../model/admin/registration/hotel/hotelActions/mailCenterModel");

// const createMailCenter = async (req, res, next) => {
//   try {
//     const data = req.body; //body will contain hotelId also
//     //console.log(data)
//     const length=(data.mailCenter).length
//     const array=[]
//     //console.log(length, data.mailCenter);
//     for(let i=0;i<length;i++){
//        array.push(data.mailCenter[i].contactNumber);
//     }
//     const isMailAlreadyExist = await mailCenterModel.findOne({ contactNumber :{$in:[array]}});
//     console.log(array);
//     if(!isMailAlreadyExist){

//     const mailCreated = await mailCenterModel.create(data);
//     return res.status(201).json({
//       status: true,
//       msg: "hotel registered successfully",
//       data: mailCreated,
//     });
// }else{
//     const mailCreated = await mailCenterModel.findOneAndUpdate({contactNumber:data.contactNumber},data,{new:true});
//     return res.status(201).json({
//       status: true,
//       msg: "hotel  successfully",
//       data: mailCreated,
//     });
// }
//   }  catch (err) {
//     next(err);
//   }
// }

const hotelModel = require("../../../../../model/admin/registration/hotel/hotelModel");

const createMailCenter = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelId;
    const data = req.body;
    //console.log(data, "data>>>>>>>>>>>>>>>>>>>>>>");
    const createmailCenter = await hotelModel.findOneAndUpdate(
      {
        _id: hotelId,
      },
      { $set: data },
      { new: true }
    );

    console.log(createmailCenter, "dgsk");
    return res.status(201).json({
      status: true,
      msg: "hotel  successfully",
      data: createmailCenter,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createMailCenter };
